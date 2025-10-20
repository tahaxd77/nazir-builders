'use client';

import { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Header: AntHeader } = Layout;

export default function Header() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { key: '/', label: 'Home' },
    { key: '/about', label: 'About Us' },
    { key: '/services', label: 'Services' },
    { key: '/contact', label: 'Contact' },
  ];

  return (
    <AntHeader className="header-container">
      <div className="header-content">
        <div className="logo">
          <Link href="/">
            <div className="logo-box">
              <div className="logo-icon">
                <div className="logo-lines">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="logo-text">
              <span className="company-name">NAZIR BUILDERS</span>
            </div>
          </Link>
        </div>

        <Menu
          mode="horizontal"
          selectedKeys={[pathname]}
          className="desktop-menu"
          items={menuItems.map(item => ({
            key: item.key,
            label: <Link href={item.key}>{item.label}</Link>,
          }))}
        />

        <Button
          className="mobile-menu-button"
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setDrawerVisible(true)}
        />
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        <Menu
          mode="vertical"
          selectedKeys={[pathname]}
          items={menuItems.map(item => ({
            key: item.key,
            label: <Link href={item.key}>{item.label}</Link>,
          }))}
          onClick={() => setDrawerVisible(false)}
        />
      </Drawer>
    </AntHeader>
  );
}
