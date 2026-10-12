import { Badge } from '@/components/ui/badge';
import { TechIcon } from '@/components/tech-icon';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
}

export function TechBadge({
  name,
  variant = 'outline',
  className,
}: TechBadgeProps) {
  return (
    <Badge
      variant={variant}
      className={cn(
        'motion-colors border-border text-foreground hover:border-primary/60 gap-1.5 rounded-none border bg-transparent px-3 py-1.5 font-mono text-xs font-medium tracking-wide',
        className
      )}
    >
      <TechIcon name={name} />
      {name}
    </Badge>
  );
}
