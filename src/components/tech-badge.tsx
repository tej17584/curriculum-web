import { Badge } from '@/components/ui/badge';

interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'outline';
}

const techIcons: Record<string, string> = {
  'Next.js': '⚡',
  React: '⚛️',
  'Vue.js': '💚',
  'Node.js': '🟢',
  TypeScript: '🔷',
  JavaScript: '🟨',
  PostgreSQL: '🐘',
  MongoDB: '🍃',
  Stripe: '💳',
  Firebase: '🔥',
  Tailwind: '🎨',
  Python: '🐍',
  GraphQL: '◈',
  HTML: '📄',
  CSS: '🎨',
  SQL: '🗄️',
  Git: '📦',
  GitHub: '🐙',
  Vercel: '▲',
  AWS: '☁️',
  Docker: '🐳',
  Figma: '🎨',
  Express: '🚂',
  WordPress: '📝',
  jQuery: '💙',
  Education: '📚',
  'Full-Stack': '🔧',
  Accessibility: '♿',
};

export function TechBadge({ name, variant = 'outline' }: TechBadgeProps) {
  const icon = techIcons[name] || '•';

  return (
    <Badge
      variant={variant}
      className='group border-primary/30 from-primary/5 to-primary/10 text-foreground hover:border-primary/50 hover:from-primary/10 hover:to-primary/15 relative overflow-hidden border bg-gradient-to-br px-4 py-2 text-base font-medium shadow-sm transition-all hover:shadow-md'
    >
      <span className='mr-2 text-lg transition-transform group-hover:scale-125'>
        {icon}
      </span>
      <span className='relative z-10'>{name}</span>
    </Badge>
  );
}
