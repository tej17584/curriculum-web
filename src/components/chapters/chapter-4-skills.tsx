"use client"

import { Code2, BookOpen, Wrench, Globe, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface Chapter4SkillsProps {
  t: (key: string) => string
}

export function Chapter4Skills({ t }: Chapter4SkillsProps) {
  return (
    <>
      <section className="mb-16">
        <h2 className="mb-6 font-serif text-3xl font-semibold tracking-wide text-foreground">{t("chapterSkills")}</h2>
        <div className="space-y-8">
          <Card className="border-2 border-primary/20 bg-card p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl">
            <h3 className="mb-4 flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
              <Code2 className="h-6 w-6 text-primary" />
              {t("programmingLanguages")}
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                JavaScript
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                TypeScript
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                HTML
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                CSS
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                Python
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                SQL
              </Badge>
            </div>
          </Card>

          <Card className="border-2 border-primary/20 bg-card p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl">
            <h3 className="mb-4 flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
              <BookOpen className="h-6 w-6 text-primary" />
              {t("frameworks")}
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                React
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                Next.js
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                Vue.js
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                Node.js
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                React Native
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                Tailwind CSS
              </Badge>
            </div>
          </Card>

          <Card className="border-2 border-primary/20 bg-card p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl">
            <h3 className="mb-4 flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
              <Wrench className="h-6 w-6 text-primary" />
              {t("tools")}
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                Git
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                GitHub
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                Mendix
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                Visualizer
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                Unity
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                Figma
              </Badge>
            </div>
          </Card>

          <Card className="border-2 border-primary/20 bg-card p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl">
            <h3 className="mb-4 flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
              <Globe className="h-6 w-6 text-primary" />
              {t("spokenLanguages")}
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                {t("spanish")} — {t("native")}
              </Badge>
              <Badge className="border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                {t("english")} — {t("advanced")}
              </Badge>
            </div>
          </Card>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src="/study-books-illustration.jpg"
              alt="Open books and study materials"
              className="w-full grayscale transition-all hover:opacity-90"
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-6 flex items-center gap-2 font-serif text-2xl font-semibold text-foreground">
          <Award className="h-6 w-6 text-primary" />
          {t("certifications")}
        </h3>
        <div className="space-y-4">
          <Card className="border-l-4 border-l-primary bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h4 className="font-serif text-xl font-semibold text-foreground">Complete Intro to React, v6</h4>
                <p className="font-serif text-base text-muted-foreground">Frontend Masters</p>
              </div>
              <span className="font-serif text-base italic text-muted-foreground">Jul 2021</span>
            </div>
          </Card>

          <Card className="border-l-4 border-l-muted bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h4 className="font-serif text-xl font-semibold text-foreground">React Native</h4>
                <p className="font-serif text-base text-muted-foreground">Frontend Masters</p>
              </div>
              <span className="font-serif text-base italic text-muted-foreground">Jun 2021</span>
            </div>
          </Card>

          <Card className="border-l-4 border-l-muted bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h4 className="font-serif text-xl font-semibold text-foreground">
                  Visual Elements of User Interface Design
                </h4>
                <p className="font-serif text-base text-muted-foreground">Coursera</p>
              </div>
              <span className="font-serif text-base italic text-muted-foreground">Aug 2020</span>
            </div>
          </Card>

          <Card className="border-l-4 border-l-muted bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h4 className="font-serif text-xl font-semibold text-foreground">
                  CSS Grids and Flexbox for Responsive Web Design
                </h4>
                <p className="font-serif text-base text-muted-foreground">Frontend Masters</p>
              </div>
              <span className="font-serif text-base italic text-muted-foreground">Aug 2020</span>
            </div>
          </Card>

          <Card className="border-l-4 border-l-muted bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h4 className="font-serif text-xl font-semibold text-foreground">
                  User Experience: Research & Prototyping
                </h4>
                <p className="font-serif text-base text-muted-foreground">Coursera</p>
              </div>
              <span className="font-serif text-base italic text-muted-foreground">Jul 2020</span>
            </div>
          </Card>

          <Card className="border-l-4 border-l-muted bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h4 className="font-serif text-xl font-semibold text-foreground">Data Visualization</h4>
                <p className="font-serif text-base text-muted-foreground">Frontend Masters</p>
              </div>
              <span className="font-serif text-base italic text-muted-foreground">Jun 2020</span>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}
