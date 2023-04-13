import '../styles/globals.css';

import MainLayout from '@/components/MainLayout';

export const metadata = {
  title: 'PokeNext',
  description: 'Página Inicial',
  icons: {
    shortcut: {
      url: '/images/favicon.ico',
      type: 'image/ico'
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
