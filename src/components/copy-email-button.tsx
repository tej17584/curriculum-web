'use client';

import { Check, Copy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

interface CopyEmailButtonProps {
  email: string;
  copyLabel: string;
  copiedLabel: string;
}

const copiedResetMs = 2000;

export function CopyEmailButton({
  email,
  copyLabel,
  copiedLabel,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    []
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      return;
    }
    setCopied(true);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), copiedResetMs);
  };

  return (
    <Button
      type='button'
      variant='outline'
      size='icon'
      onClick={copy}
      aria-label={copied ? copiedLabel : copyLabel}
      title={copied ? copiedLabel : copyLabel}
      className='motion-surface border-border text-foreground hover:border-primary hover:text-primary size-8 rounded-none border bg-transparent'
    >
      <span
        className='t-icon-swap'
        data-state={copied ? 'b' : 'a'}
        aria-hidden='true'
      >
        <Copy
          className='t-icon size-4'
          data-icon='a'
        />
        <Check
          className='t-icon size-4'
          data-icon='b'
        />
      </span>
      <span
        className='sr-only'
        aria-live='polite'
      >
        {copied ? copiedLabel : ''}
      </span>
    </Button>
  );
}
