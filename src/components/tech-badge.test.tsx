import { render, screen } from '@testing-library/react';
import { TechBadge } from './tech-badge';

describe('TechBadge', () => {
  it('renders badge with technology name', () => {
    render(<TechBadge name='React' />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders correct icon for known technology', () => {
    render(<TechBadge name='React' />);
    expect(screen.getByText('⚛️')).toBeInTheDocument();
  });

  it('renders default icon for unknown technology', () => {
    render(<TechBadge name='UnknownTech' />);
    expect(screen.getByText('•')).toBeInTheDocument();
    expect(screen.getByText('UnknownTech')).toBeInTheDocument();
  });

  it('applies default variant when not specified', () => {
    const { container } = render(<TechBadge name='TypeScript' />);
    const badge = container.querySelector('.border-primary\\/40');
    expect(badge).toBeInTheDocument();
  });

  it('renders all technology icons correctly', () => {
    const technologies = [
      { name: 'Next.js', icon: '⚡' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Python', icon: '🐍' },
      { name: 'Docker', icon: '🐳' },
    ];

    technologies.forEach(({ name, icon }) => {
      const { unmount } = render(<TechBadge name={name} />);
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(icon)).toBeInTheDocument();
      unmount();
    });
  });

  it('applies hover styles through className', () => {
    const { container } = render(<TechBadge name='JavaScript' />);
    const badge = container.querySelector('.hover\\:scale-110');
    expect(badge).toBeInTheDocument();
  });
});
