import { getDictionary } from '@/hooks/getDictionary';
import { Lang } from '@/types';
import CVClientWrapper from '@/components/cv-client';
import { Chapter1About } from '@/components/chapters/chapter-1-about';
import { Chapter2Experience } from '@/components/chapters/chapter-2-experience';
import { Chapter3Projects } from '@/components/chapters/chapter-3-projects';
import { Chapter4Skills } from '@/components/chapters/chapter-4-skills';
import { Chapter5Education } from '@/components/chapters/chapter-5-education';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <CVClientWrapper
      lang={lang}
      pageText={dict.common.page}
      ofText={dict.common.of}
    >
      {/* Page 1: About */}
      <Chapter1About dict={dict} />

      {/* Page 2: Experience */}
      <Chapter2Experience dict={dict} />

      {/* Page 3: Projects */}
      <Chapter3Projects dict={dict} />

      {/* Page 4: Skills & Certifications */}
      <Chapter4Skills dict={dict} />

      {/* Page 5: Education */}
      <Chapter5Education dict={dict} />
    </CVClientWrapper>
  );
}
