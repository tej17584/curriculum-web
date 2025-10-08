import {
  sanitizeHTML,
  isValidEmail,
  isValidURL,
  checkRateLimit,
} from './security';

describe('Security Utilities', () => {
  describe('sanitizeHTML', () => {
    it('escapes HTML special characters', () => {
      const malicious = '<script>alert("XSS")</script>';
      const sanitized = sanitizeHTML(malicious);
      expect(sanitized).toBe(
        '&lt;script&gt;alert(&quot;XSS&quot;)&lt;&#x2F;script&gt;'
      );
    });

    it('escapes ampersands', () => {
      expect(sanitizeHTML('Tom & Jerry')).toBe('Tom &amp; Jerry');
    });

    it('escapes quotes', () => {
      expect(sanitizeHTML('He said "Hello"')).toBe('He said &quot;Hello&quot;');
      expect(sanitizeHTML("It's working")).toBe('It&#x27;s working');
    });

    it('escapes forward slashes', () => {
      expect(sanitizeHTML('path/to/file')).toBe('path&#x2F;to&#x2F;file');
    });

    it('returns empty string for empty input', () => {
      expect(sanitizeHTML('')).toBe('');
    });

    it('handles mixed malicious content', () => {
      const input = '<img src=x onerror="alert(\'XSS\')">';
      const sanitized = sanitizeHTML(input);
      expect(sanitized).not.toContain('<img');
      expect(sanitized).toContain('&lt;img');
    });
  });

  describe('isValidEmail', () => {
    it('validates correct email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('user+tag@example.org')).toBe(true);
    });

    it('rejects invalid email addresses', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('invalid@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('user@')).toBe(false);
      expect(isValidEmail('user @example.com')).toBe(false);
    });

    it('rejects emails with multiple @', () => {
      expect(isValidEmail('user@@example.com')).toBe(false);
      expect(isValidEmail('user@test@example.com')).toBe(false);
    });
  });

  describe('isValidURL', () => {
    it('validates correct HTTP URLs', () => {
      expect(isValidURL('http://example.com')).toBe(true);
      expect(isValidURL('https://example.com')).toBe(true);
      expect(isValidURL('https://example.com/path?query=1')).toBe(true);
    });

    it('rejects invalid URLs', () => {
      expect(isValidURL('not-a-url')).toBe(false);
      expect(isValidURL('ftp://example.com')).toBe(false);
      expect(isValidURL('javascript:alert(1)')).toBe(false);
      expect(isValidURL('data:text/html,<script>alert(1)</script>')).toBe(
        false
      );
    });

    it('rejects URLs without protocol', () => {
      expect(isValidURL('example.com')).toBe(false);
      expect(isValidURL('//example.com')).toBe(false);
    });
  });

  describe('checkRateLimit', () => {
    beforeEach(() => {
      // Reset rate limit cache before each test
      jest.clearAllTimers();
    });

    it('allows requests under the limit', () => {
      const result1 = checkRateLimit('test-user', 5, 60000);
      expect(result1.allowed).toBe(true);
      expect(result1.remaining).toBe(4);

      const result2 = checkRateLimit('test-user', 5, 60000);
      expect(result2.allowed).toBe(true);
      expect(result2.remaining).toBe(3);
    });

    it('blocks requests over the limit', () => {
      // Make 5 requests (the limit)
      for (let i = 0; i < 5; i++) {
        checkRateLimit('test-user-2', 5, 60000);
      }

      // 6th request should be blocked
      const result = checkRateLimit('test-user-2', 5, 60000);
      expect(result.allowed).toBe(false);
      expect(result.remaining).toBe(0);
    });

    it('resets after time window', () => {
      jest.useFakeTimers();

      // Make max requests
      for (let i = 0; i < 5; i++) {
        checkRateLimit('test-user-3', 5, 1000);
      }

      // Should be blocked
      let result = checkRateLimit('test-user-3', 5, 1000);
      expect(result.allowed).toBe(false);

      // Advance time past window
      jest.advanceTimersByTime(1001);

      // Should be allowed again
      result = checkRateLimit('test-user-3', 5, 1000);
      expect(result.allowed).toBe(true);

      jest.useRealTimers();
    });

    it('tracks different identifiers separately', () => {
      const result1 = checkRateLimit('user-1', 3, 60000);
      const result2 = checkRateLimit('user-2', 3, 60000);

      expect(result1.allowed).toBe(true);
      expect(result1.remaining).toBe(2);
      expect(result2.allowed).toBe(true);
      expect(result2.remaining).toBe(2);
    });
  });
});
