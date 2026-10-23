import { fireEvent, render, screen } from '@testing-library/react';
import { BookLoader, INTRO_DURATION_MS } from './book-loader';
import type { Dictionary } from '@/hooks/getDictionary';

// Mock dictionary data - only include fields used by BookLoader
const mockDict = {
  bookLoader: {
    title: 'Alejandro Tejada',
    subtitle: 'Curriculum Vitae',
    loading: 'Opening my story…',
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
    render(
      <BookLoader
        onComplete={jest.fn()}
        dict={mockDict}
      />
    );

    expect(screen.getByText('Alejandro Tejada')).toBeInTheDocument();
    expect(screen.getByText('Curriculum Vitae')).toBeInTheDocument();
  });

  it('renders loading text', () => {
    render(
      <BookLoader
        onComplete={jest.fn()}
        dict={mockDict}
      />
    );

    expect(screen.getByText('Opening my story…')).toBeInTheDocument();
  });

  it('calls onComplete once after the intro duration', () => {
    const mockOnComplete = jest.fn();
    render(
      <BookLoader
        onComplete={mockOnComplete}
        dict={mockDict}
      />
    );

    expect(mockOnComplete).not.toHaveBeenCalled();

    jest.advanceTimersByTime(INTRO_DURATION_MS);
    jest.advanceTimersByTime(INTRO_DURATION_MS);

    expect(mockOnComplete).toHaveBeenCalledTimes(1);
  });

  it('can be skipped with a key press', () => {
    const mockOnComplete = jest.fn();
    render(
      <BookLoader
        onComplete={mockOnComplete}
        dict={mockDict}
      />
    );

    fireEvent.keyDown(window, { key: 'Escape' });
    jest.advanceTimersByTime(INTRO_DURATION_MS);

    expect(mockOnComplete).toHaveBeenCalledTimes(1);
  });

  it('can be skipped with a click', () => {
    const mockOnComplete = jest.fn();
    render(
      <BookLoader
        onComplete={mockOnComplete}
        dict={mockDict}
      />
    );

    fireEvent.pointerDown(window);

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
    jest.advanceTimersByTime(INTRO_DURATION_MS);

    expect(mockOnComplete).not.toHaveBeenCalled();
  });

  it('applies fixed full-viewport positioning', () => {
    const { container } = render(
      <BookLoader
        onComplete={jest.fn()}
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

    render(
      <BookLoader
        onComplete={jest.fn()}
        dict={customDict}
      />
    );

    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Custom Loading...')).toBeInTheDocument();
  });
});
