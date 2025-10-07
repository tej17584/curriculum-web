import { getDictionary } from '@/hooks/getDictionary';
import { Lang } from '@/types';
import CVContent from './cv-content';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <CVContent
      dict={dict}
      lang={lang}
    />
  );
}
