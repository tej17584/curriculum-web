import { Badge } from '@/components/ui/badge';

interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'outline';
}

export function TechBadge({ name, variant = 'outline' }: TechBadgeProps) {
  return (
    <Badge
      variant={variant}
      className='motion-colors border-border text-foreground hover:border-primary/60 rounded-none border bg-transparent px-3 py-1.5 font-mono text-xs font-medium tracking-wide'
    >
      {name}
    </Badge>
  );
}
