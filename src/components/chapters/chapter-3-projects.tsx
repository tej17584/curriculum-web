"use client"

import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { TechBadge } from "@/components/tech-badge"

interface Chapter3ProjectsProps {
  t: (key: string) => string
}

export function Chapter3Projects({ t }: Chapter3ProjectsProps) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 font-serif text-3xl font-semibold tracking-wide text-foreground">{t("chapterProjects")}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="overflow-hidden bg-card shadow-sm transition-all hover:scale-[1.03] hover:shadow-lg">
          <div className="aspect-video w-full overflow-hidden bg-muted">
            <img
              src="/modern-e-commerce-platform-dashboard.jpg"
              alt="E-Commerce Platform"
              className="h-full w-full object-cover transition-all hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 font-serif text-2xl font-semibold text-foreground">
              <a
                href="https://project1.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                E-Commerce Platform
                <ExternalLink className="h-4 w-4" />
              </a>
            </h3>
            <p className="mb-4 font-serif text-base leading-relaxed text-muted-foreground">
              A full-featured e-commerce platform with real-time inventory management, payment processing, and admin
              dashboard. Built with modern technologies for optimal performance.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="Next.js" />
              <TechBadge name="Stripe" />
              <TechBadge name="PostgreSQL" />
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden bg-card shadow-sm transition-all hover:scale-[1.03] hover:shadow-lg">
          <div className="aspect-video w-full overflow-hidden bg-muted">
            <img
              src="/task-management-kanban.png"
              alt="Task Management App"
              className="h-full w-full object-cover transition-all hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 font-serif text-2xl font-semibold text-foreground">
              <a
                href="https://project2.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                Task Management App
                <ExternalLink className="h-4 w-4" />
              </a>
            </h3>
            <p className="mb-4 font-serif text-base leading-relaxed text-muted-foreground">
              A collaborative task management application with real-time updates, team workspaces, and advanced
              filtering. Designed for productivity and ease of use.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="React" />
              <TechBadge name="Firebase" />
              <TechBadge name="Tailwind" />
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden bg-card shadow-sm transition-all hover:scale-[1.03] hover:shadow-lg">
          <div className="aspect-video w-full overflow-hidden bg-muted">
            <img
              src="/portfolio-website-builder-drag-and-drop.jpg"
              alt="Portfolio Website Builder"
              className="h-full w-full object-cover transition-all hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 font-serif text-2xl font-semibold text-foreground">
              <a
                href="https://project3.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                Portfolio Website Builder
                <ExternalLink className="h-4 w-4" />
              </a>
            </h3>
            <p className="mb-4 font-serif text-base leading-relaxed text-muted-foreground">
              A drag-and-drop website builder for creatives to showcase their work. Features customizable templates,
              responsive design, and SEO optimization.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="Vue.js" />
              <TechBadge name="Node.js" />
              <TechBadge name="MongoDB" />
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden bg-card shadow-sm transition-all hover:scale-[1.03] hover:shadow-lg">
          <div className="aspect-video w-full overflow-hidden bg-muted">
            <img
              src="/web-development-course-online-learning.jpg"
              alt="Web Development Course"
              className="h-full w-full object-cover transition-all hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 font-serif text-2xl font-semibold text-foreground">
              <a
                href="https://course.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                Web Development Course
                <ExternalLink className="h-4 w-4" />
              </a>
            </h3>
            <p className="mb-4 font-serif text-base leading-relaxed text-muted-foreground">
              A comprehensive video course teaching modern web development from scratch. Covers React, Node.js,
              databases, and deployment strategies.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="Education" />
              <TechBadge name="React" />
              <TechBadge name="Full-Stack" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
