import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PageNavigation } from './page-navigation';
import { useRouter, usePathname } from 'next/navigation';

// Mock Next.js navigation hooks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('PageNavigation', () => {
  const mockPush = jest.fn();
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.clear();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (usePathname as jest.Mock).mockReturnValue('/en');
  });

  const defaultProps = {
    currentPage: 2,
    totalPages: 5,
    onPageChange: mockOnPageChange,
    lang: 'en' as const,
    pageText: 'Page',
    ofText: 'of',
  };

  it('renders page navigation with current page info', () => {
    render(<PageNavigation {...defaultProps} />);
    expect(screen.getByText(/Page 2 of 5/)).toBeInTheDocument();
  });

  it('calls onPageChange when next button is clicked', () => {
    render(<PageNavigation {...defaultProps} />);
    const nextButton = screen.getAllByRole('button')[1];
    fireEvent.click(nextButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange when previous button is clicked', () => {
    render(<PageNavigation {...defaultProps} />);
    const prevButton = screen.getAllByRole('button')[0];
    fireEvent.click(prevButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });

  it('disables previous button on first page', () => {
    render(
      <PageNavigation
        {...defaultProps}
        currentPage={1}
      />
    );
    const prevButton = screen.getAllByRole('button')[0];
    expect(prevButton).toBeDisabled();
  });

  it('disables next button on last page', () => {
    render(
      <PageNavigation
        {...defaultProps}
        currentPage={5}
      />
    );
    const nextButton = screen.getAllByRole('button')[1];
    expect(nextButton).toBeDisabled();
  });

  it('toggles theme when theme button is clicked', async () => {
    render(<PageNavigation {...defaultProps} />);

    // Find theme toggle button (Moon icon initially)
    const themeButton = screen.getByLabelText('Toggle theme');

    // Click to toggle theme
    fireEvent.click(themeButton);

    await waitFor(() => {
      expect(localStorageMock.getItem('theme')).toBe('dark');
    });
  });

  it('toggles language when language button is clicked', () => {
    render(<PageNavigation {...defaultProps} />);

    const langButton = screen.getByLabelText('Toggle language');
    fireEvent.click(langButton);

    expect(mockPush).toHaveBeenCalledWith('/es');
  });

  it('toggles from Spanish to English', () => {
    (usePathname as jest.Mock).mockReturnValue('/es');
    render(
      <PageNavigation
        {...defaultProps}
        lang='es'
      />
    );

    const langButton = screen.getByLabelText('Toggle language');
    fireEvent.click(langButton);

    expect(mockPush).toHaveBeenCalledWith('/en');
  });

  it('displays correct text in Spanish', () => {
    render(
      <PageNavigation
        {...defaultProps}
        lang='es'
        pageText='Página'
        ofText='de'
      />
    );
    expect(screen.getByText(/Página 2 de 5/)).toBeInTheDocument();
  });

  it('prevents navigation beyond last page', () => {
    render(
      <PageNavigation
        {...defaultProps}
        currentPage={5}
      />
    );
    const nextButton = screen.getAllByRole('button')[1];
    fireEvent.click(nextButton);
    // Should not call onPageChange since we're on last page
    expect(mockOnPageChange).not.toHaveBeenCalled();
  });

  it('prevents navigation before first page', () => {
    render(
      <PageNavigation
        {...defaultProps}
        currentPage={1}
      />
    );
    const prevButton = screen.getAllByRole('button')[0];
    fireEvent.click(prevButton);
    // Should not call onPageChange since we're on first page
    expect(mockOnPageChange).not.toHaveBeenCalled();
  });

  it('initializes theme from localStorage', () => {
    localStorageMock.setItem('theme', 'dark');
    render(<PageNavigation {...defaultProps} />);

    // Theme should be initialized from localStorage
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
