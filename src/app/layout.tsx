import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Silas Afra',
  description:
    'Criação de sites profissionais e personalizados para impulsionar o seu negócio. Transformamos suas ideias em realidade digital, oferecendo soluções de design modernas e funcionais. Maximize sua presença online e conquiste seu público-alvo com um site sob medida.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
