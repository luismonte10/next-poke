import '../styles/globals.css';

import MainLayout from '@/components/MainLayout';

export const metadata = {
  title: 'Página Inicial',
  description: 'Página Inicial'
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
