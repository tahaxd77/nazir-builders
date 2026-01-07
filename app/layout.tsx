import './globals.css';
import 'antd/dist/reset.css';
import type { Metadata } from 'next';
import LayoutWrapper from '@/components/LayoutWrapper';

export const metadata: Metadata = {
  title: 'Nazir Builders - Quality Concrete & Construction Materials',
  description: 'Leading supplier of quality concrete products and construction materials',
  icons:"/logo.png"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
