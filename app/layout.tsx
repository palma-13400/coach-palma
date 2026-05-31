import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kévin Palma — Coach HYROX Pro & Transformation',
  description: 'Programmes personnalisés HYROX et musculation. Athlète HYROX Pro 1h09. Coach de performance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0A0A0A; color: #fff; }
          :root { --accent: #FF2200; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}