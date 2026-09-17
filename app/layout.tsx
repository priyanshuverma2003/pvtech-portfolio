import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Priyanshu Verma | Interactive 3D Portfolio (pvtech.portfolio)',
  description:
    'Portfolio of Priyanshu Verma - Full-Stack & Frontend Creative Developer. Experience at Ascention Corporation, Amazon Clone, Kirti4Arts, BCA 7.6 GPA.',
  keywords: [
    'Priyanshu Verma',
    'Portfolio',
    'Frontend Developer',
    'Full Stack Developer',
    'Next.js',
    'Vanilla CSS',
    'Three.js',
    'Delhi India',
  ],
  authors: [{ name: 'Priyanshu Verma' }],
  openGraph: {
    title: 'Priyanshu Verma | Interactive 3D Portfolio',
    description: 'Full-Stack & Frontend Creative Developer Portfolio.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
