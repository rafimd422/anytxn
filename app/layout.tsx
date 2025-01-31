import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Navbar } from './components/Navbar';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Navbar />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
