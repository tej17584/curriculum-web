import { render, screen } from '@testing-library/react';
import { BookLoader } from './book-loader';
import type { Dictionary } from '@/hooks/getDictionary';

// Mock dictionary data - only include fields used by BookLoader
const mockDict = {
  bookLoader: {
    title: 'Curriculum Vitae',
    subtitle: 'Jose Alejandro Tejada',
    loading: 'Opening your story...',
  },
} as Dictionary;

describe('BookLoader', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders book loader with title and subtitle', () => {
    const mockOnComplete = jest.fn();
    render(
      <BookLoader
        onComplete={mockOnComplete}
        dict={mockDict}
      />
    );

    expect(screen.getByText('Curriculum Vitae')).toBeInTheDocument();
    expect(screen.getByText('Jose Alejandro Tejada')).toBeInTheDocument();
  });

  it('renders loading text', () => {
    const mockOnComplete = jest.fn();
    render(
      <BookLoader
        onComplete={mockOnComplete}
        dict={mockDict}
      />
    );

    expect(screen.getByText('Opening your story...')).toBeInTheDocument();
  });

  it('calls onComplete after the loader interval', () => {
    const mockOnComplete = jest.fn();
    render(
      <BookLoader
        onComplete={mockOnComplete}
        dict={mockDict}
      />
    );

    expect(mockOnComplete).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1900);

    expect(mockOnComplete).toHaveBeenCalledTimes(1);
  });

  it('clears timeout on unmount', () => {
    const mockOnComplete = jest.fn();
    const { unmount } = render(
      <BookLoader
        onComplete={mockOnComplete}
        dict={mockDict}
      />
    );

    unmount();
    jest.advanceTimersByTime(1900);

    expect(mockOnComplete).not.toHaveBeenCalled();
  });

  it('applies fixed full-viewport positioning', () => {
    const mockOnComplete = jest.fn();
    const { container } = render(
      <BookLoader
        onComplete={mockOnComplete}
        dict={mockDict}
      />
    );

    const overlay = container.firstChild as HTMLElement;
    expect(overlay).toHaveClass('fixed', 'inset-0');
  });

  it('uses dictionary values for all text content', () => {
    const customDict = {
      bookLoader: {
        title: 'Custom Title',
        subtitle: 'Custom Subtitle',
        loading: 'Custom Loading...',
      },
    } as Dictionary;

    const mockOnComplete = jest.fn();
    render(
      <BookLoader
        onComplete={mockOnComplete}
        dict={customDict}
      />
    );

    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Custom Loading...')).toBeInTheDocument();
  });
});
