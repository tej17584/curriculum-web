"use client"

import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Chapter5EducationProps {
  t: (key: string) => string
}

export function Chapter5Education({ t }: Chapter5EducationProps) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 font-serif text-3xl font-semibold tracking-wide text-foreground">{t("chapterEducation")}</h2>
      <Card className="border-l-4 border-l-primary bg-card p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
        <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Bachelor of Science in Computer Science
            </h3>
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
          <span className="font-serif text-base italic text-muted-foreground">2017 — 2022</span>
        </div>
        <p className="font-serif text-base leading-relaxed text-muted-foreground">
          Completed a comprehensive Computer Science degree with focus on software engineering, algorithms, data
          structures, and modern web technologies. Graduated with honors and participated in various academic projects
          and research initiatives.
        </p>
      </Card>

      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-md">
          <img
            src="/graduation-library-illustration.jpg"
            alt="Graduation cap with books in library setting"
            className="w-full grayscale transition-all hover:opacity-90"
          />
        </div>
      </div>
    </section>
  )
}
