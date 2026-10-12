import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ChapterIllustrationProps {
  src: string;
  alt: string;
  figureClassName?: string;
}

/** Same treatment as e2bc431: grayscale on paper, invert+sepia in dark. */
export function ChapterIllustration({
  src,
  alt,
  figureClassName,
}: ChapterIllustrationProps) {
  return (
    <div className='mt-16 flex justify-center'>
      <figure
        className={cn(
          'border-border w-full max-w-md border-y py-6 lg:max-w-[740px]',
          figureClassName
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={1024}
          height={1024}
          className='w-full opacity-90 grayscale dark:opacity-85 dark:[filter:invert(1)_sepia(0.4)_hue-rotate(10deg)_brightness(1.1)_contrast(1.1)]'
        />
      </figure>
    </div>
  );
}
