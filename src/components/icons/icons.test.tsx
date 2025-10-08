import { render } from '@testing-library/react';
import { PopAuctionIcon } from './icons';

describe('PopAuctionIcon', () => {
  it('renders SVG element', () => {
    const { container } = render(<PopAuctionIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('has correct viewBox', () => {
    const { container } = render(<PopAuctionIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 272 30');
  });

  it('applies default className', () => {
    const { container } = render(<PopAuctionIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('fill-none');
  });

  it('applies custom className', () => {
    const { container } = render(<PopAuctionIcon className='custom-class' />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-class');
  });

  it('uses xMinYMin when not centered', () => {
    const { container } = render(<PopAuctionIcon centered={false} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('preserveAspectRatio', 'xMinYMin meet');
  });

  it('uses xMidYMid when centered', () => {
    const { container } = render(<PopAuctionIcon centered={true} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('preserveAspectRatio', 'xMidYMid meet');
  });

  it('renders all path elements', () => {
    const { container } = render(<PopAuctionIcon />);
    const paths = container.querySelectorAll('path');
    expect(paths.length).toBeGreaterThan(0);
  });

  it('all paths have currentColor fill', () => {
    const { container } = render(<PopAuctionIcon />);
    const paths = container.querySelectorAll('path');
    paths.forEach(path => {
      expect(path).toHaveAttribute('fill', 'currentColor');
    });
  });
});
