import { ImageResponse } from 'next/og';
import { getDictionary } from '@/hooks/getDictionary';
import { siteUrl } from '@/lib/site';

export const alt = 'Alejandro Tejada — Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/* Satori only understands hex/rgb, so these mirror the light theme tokens in app/tokens.css. */
const paper = '#f6ece2';
const ink = '#3b2a20';
const inkMuted = '#6f5a4c';
const accent = '#9a4a2f';
const rule = '#d6c1ae';

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: paper,
        color: ink,
          padding: '72px 88px',
      }}
    >
      <div
        style={{ display: 'flex', width: 96, height: 4, background: accent }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.05 }}>
          {dict.profile.name}
        </div>
        <div style={{ fontSize: 40, marginTop: 20, color: ink }}>
          {dict.profile.title}
        </div>
        <div
          style={{
            fontSize: 30,
            marginTop: 28,
            color: inkMuted,
            lineHeight: 1.4,
            maxWidth: 960,
          }}
        >
          {dict.profile.summary}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: `2px solid ${rule}`,
          paddingTop: 24,
          fontSize: 26,
          color: inkMuted,
        }}
      >
        <span>{dict.profile.availability}</span>
        <span>{siteUrl.replace(/^https?:\/\//, '')}</span>
      </div>
    </div>,
    size
  );
}
