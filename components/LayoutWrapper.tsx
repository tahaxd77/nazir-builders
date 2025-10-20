'use client';

import { ConfigProvider, Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 4,
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Layout.Content>{children}</Layout.Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}
