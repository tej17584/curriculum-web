import { render, screen } from '@testing-library/react';
import { TechBadge } from './tech-badge';

describe('TechBadge', () => {
  it('renders the technology name as a text chip', () => {
    render(<TechBadge name='React' />);

    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders unknown technologies without a fallback icon', () => {
    render(<TechBadge name='UnknownTech' />);

    expect(screen.getByText('UnknownTech')).toBeInTheDocument();
    expect(screen.queryByText('•')).not.toBeInTheDocument();
  });

  it('uses the quiet outlined treatment by default', () => {
    const { container } = render(<TechBadge name='TypeScript' />);
    const badge = container.querySelector('[data-slot="badge"]');

    expect(badge).toHaveClass('border-border', 'rounded-none', 'font-mono');
  });

  it('uses a colour-only hover affordance', () => {
    const { container } = render(<TechBadge name='JavaScript' />);
    const badge = container.querySelector('[data-slot="badge"]');

    expect(badge).toHaveClass('hover:border-primary/60');
    expect(badge).not.toHaveClass('hover:scale-110');
  });
});
