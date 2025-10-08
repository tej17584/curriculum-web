import { render, screen } from '@testing-library/react';
import { Footer } from './footer';
import type { Dictionary } from '@/hooks/getDictionary';

const mockDict = {
  footer: {
    copyright: 'Alejandro Tejada',
  },
} as Dictionary;

describe('Footer', () => {
  it('renders footer element', () => {
    const { container } = render(<Footer dict={mockDict} />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('displays copyright text with current year', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer dict={mockDict} />);

    // Footer has two copyright texts (mobile and desktop)
    const copyrightTexts = screen.getAllByText(
      new RegExp(`${currentYear} Alejandro Tejada`)
    );
    expect(copyrightTexts.length).toBeGreaterThan(0);
  });

  it('renders all social media links', () => {
    render(<Footer dict={mockDict} />);

    // Check for X/Twitter link
    const xLinks = screen.getAllByRole('link', { name: /X/i });
    expect(xLinks.length).toBeGreaterThan(0);

    // Check for GitHub link
    const githubLinks = screen.getAllByRole('link', { name: /GitHub/i });
    expect(githubLinks.length).toBeGreaterThan(0);

    // Check for LinkedIn link
    const linkedinLinks = screen.getAllByRole('link', { name: /LinkedIn/i });
    expect(linkedinLinks.length).toBeGreaterThan(0);
  });

  it('social links have correct href attributes', () => {
    render(<Footer dict={mockDict} />);

    const xLinks = screen.getAllByRole('link', { name: /X/i });
    expect(xLinks[0]).toHaveAttribute('href', 'https://x.com/josejose9797');

    const githubLinks = screen.getAllByRole('link', { name: /GitHub/i });
    expect(githubLinks[0]).toHaveAttribute(
      'href',
      'https://github.com/tej17584'
    );

    const linkedinLinks = screen.getAllByRole('link', { name: /LinkedIn/i });
    expect(linkedinLinks[0]).toHaveAttribute(
      'href',
      'https://linkedin.com/in/alejandrotejada17584'
    );
  });

  it('desktop links open in new tab', () => {
    const { container } = render(<Footer dict={mockDict} />);
    const desktopLinks = container.querySelectorAll('.hidden.md\\:flex a');

    desktopLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  it('has proper accessibility with screen reader text', () => {
    render(<Footer dict={mockDict} />);

    const srOnlyTexts = screen.getAllByText(/X|GitHub|LinkedIn/i, {
      selector: '.sr-only',
    });
    expect(srOnlyTexts.length).toBeGreaterThan(0);
  });

  it('icons are marked as aria-hidden', () => {
    const { container } = render(<Footer dict={mockDict} />);
    const icons = container.querySelectorAll('svg[aria-hidden="true"]');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('applies fixed positioning and backdrop blur', () => {
    const { container } = render(<Footer dict={mockDict} />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('fixed', 'backdrop-blur-md');
  });

  it('has mobile and desktop layouts', () => {
    const { container } = render(<Footer dict={mockDict} />);

    // Mobile layout
    const mobileLayout = container.querySelector('.md\\:hidden');
    expect(mobileLayout).toBeInTheDocument();

    // Desktop layout
    const desktopLayout = container.querySelector('.hidden.md\\:flex');
    expect(desktopLayout).toBeInTheDocument();
  });

  it('uses dictionary value for copyright', () => {
    const customDict = {
      footer: {
        copyright: 'Custom Name',
      },
    } as Dictionary;

    render(<Footer dict={customDict} />);
    const copyrightTexts = screen.getAllByText(/Custom Name/i);
    expect(copyrightTexts.length).toBeGreaterThan(0);
  });
});
