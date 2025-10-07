"use client"

import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface Chapter2ExperienceProps {
  t: (key: string) => string
}

export function Chapter2Experience({ t }: Chapter2ExperienceProps) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 font-serif text-3xl font-semibold tracking-wide text-foreground">{t("chapterExperience")}</h2>
      <div className="space-y-8">
        <Card className="border-l-4 border-l-primary bg-card p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
          <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">Software Engineer 3</h3>
              <a
                href="https://www.xoom.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-serif text-lg text-primary hover:underline"
              >
                Xoom, A PayPal Service
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <span className="font-serif text-base italic text-muted-foreground">Oct 2022 — {t("present")}</span>
          </div>
          <p className="mb-4 font-serif text-base leading-relaxed text-muted-foreground">
            Working as a Software Engineer at Xoom, a PayPal service, contributing to the development and maintenance of
            financial technology solutions that enable international money transfers.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              JavaScript
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              React
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              PayPal
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              FinTech
            </Badge>
          </div>
        </Card>

        <Card className="border-l-4 border-l-muted bg-card p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
          <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">Software Engineer</h3>
              <a
                href="https://www.cognits.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-serif text-lg text-primary hover:underline"
              >
                Cognits
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <span className="font-serif text-base italic text-muted-foreground">Aug 2020 — Aug 2022</span>
          </div>
          <p className="mb-4 font-serif text-base leading-relaxed text-muted-foreground">
            Worked as a UI developer on banking projects, utilizing low code tools like Visualizer, Mendix and others to
            deliver efficient solutions for financial institutions.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              UI Development
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              Mendix
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              Visualizer
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              Banking
            </Badge>
          </div>
        </Card>

        <Card className="border-l-4 border-l-muted bg-card p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
          <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">Auxiliary Teacher</h3>
              <a
                href="https://www.uvg.edu.gt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-serif text-lg text-primary hover:underline"
              >
                Universidad del Valle de Guatemala
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <span className="font-serif text-base italic text-muted-foreground">Jan 2019 — Dec 2020</span>
          </div>
          <p className="mb-4 font-serif text-base leading-relaxed text-muted-foreground">
            Teaching physics, statistics, mathematics, algorithms and basic programming to university students, helping
            them develop strong foundational skills in STEM subjects.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              Teaching
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              Programming
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              Mathematics
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              Physics
            </Badge>
          </div>
        </Card>

        <Card className="border-l-4 border-l-muted bg-card p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
          <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">Software Developer</h3>
              <a
                href="https://www.pacifiko.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-serif text-lg text-primary hover:underline"
              >
                Pacifiko.com
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <span className="font-serif text-base italic text-muted-foreground">Oct 2019 — Jun 2020</span>
          </div>
          <p className="mb-4 font-serif text-base leading-relaxed text-muted-foreground">
            Worked in several areas including publicity, inventory management, finances, and developing features for an
            e-commerce platform, gaining diverse experience in full-stack development.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              E-Commerce
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              Full-Stack
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              Inventory
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 px-3 py-1 text-sm text-primary">
              Finance
            </Badge>
          </div>
        </Card>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-md">
          <img
            src="/career-desk-illustration.jpg"
            alt="Professional workspace with books and documents"
            className="w-full grayscale transition-all hover:opacity-90"
          />
        </div>
      </div>
    </section>
  )
}
