import { Badge } from "@/components/ui/badge"

interface TechBadgeProps {
  name: string
  variant?: "default" | "outline"
}

const techIcons: Record<string, string> = {
  "Next.js": "⚡",
  React: "⚛️",
  "Vue.js": "💚",
  "Node.js": "🟢",
  TypeScript: "🔷",
  JavaScript: "🟨",
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  Stripe: "💳",
  Firebase: "🔥",
  Tailwind: "🎨",
  Python: "🐍",
  GraphQL: "◈",
  HTML: "📄",
  CSS: "🎨",
  SQL: "🗄️",
  Git: "📦",
  GitHub: "🐙",
  Vercel: "▲",
  AWS: "☁️",
  Docker: "🐳",
  Figma: "🎨",
  Express: "🚂",
  WordPress: "📝",
  jQuery: "💙",
  Education: "📚",
  "Full-Stack": "🔧",
  Accessibility: "♿",
}

export function TechBadge({ name, variant = "outline" }: TechBadgeProps) {
  const icon = techIcons[name] || "•"

  return (
    <Badge
      variant={variant}
      className="group relative overflow-hidden border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-primary/10 px-4 py-2 text-base font-semibold text-foreground shadow-sm transition-all hover:scale-110 hover:border-primary hover:from-primary hover:to-primary/80 hover:text-primary-foreground hover:shadow-lg"
    >
      <span className="mr-2 text-lg transition-transform group-hover:scale-125">{icon}</span>
      <span className="relative z-10">{name}</span>
    </Badge>
  )
}
