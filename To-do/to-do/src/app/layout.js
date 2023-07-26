import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'To-Do App',
  description: 'To-Do app to organize your tasks and improve efficiency.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`bg-bgMain ${inter.className}`}>{children}</body>
    </html>
  );
}
