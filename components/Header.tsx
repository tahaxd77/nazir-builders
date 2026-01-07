"use client";

import { useState, useEffect } from "react";
import { Layout, Menu, Button, Drawer, Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const { Header: AntHeader } = Layout;

export default function Header() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { key: "/", label: "Home" },
    { key: "/about", label: "About Us" },
    { key: "/services", label: "Services" },
    { key: "/contact", label: "Contact" },
  ];

  return (
    <AntHeader
      className="header-container"
      style={{
        boxShadow: scrolled
          ? "0 6px 24px rgba(0, 0, 0, 0.12)"
          : "0 4px 20px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="header-content">
        <div className="logo">
          <Link href="/">
            <Flex align="center" gap={12}>
              <div
                style={{
                  background: "linear-gradient(135deg, #1890ff, #667eea)",
                  display: "inline-block",
                  borderRadius: "8px",
                  padding: "4px",
                  boxShadow: "0 4px 12px rgba(24, 144, 255, 0.3)",
                  transition: "all 0.3s ease",
                }}
                className="logo-container"
              >
                <Image
                  src="/logo.png"
                  alt="Nazir Builders Logo"
                  width={40}
                  height={40}
                  style={{
                    objectFit: "contain",
                    mixBlendMode: "screen",
                    transition: "transform 0.3s ease",
                  }}
                  className="logo-image"
                />
              </div>
              <span className="company-name">NAZIR BUILDERS</span>
            </Flex>
          </Link>
        </div>

        <Menu
          mode="horizontal"
          selectedKeys={[pathname]}
          className="desktop-menu"
          items={menuItems.map((item) => ({
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
        title={
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #1e3c72, #667eea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Navigation Menu
          </span>
        }
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        className="mobile-drawer"
        styles={{
          header: {
            borderBottom: "2px solid #f0f0f0",
          },
        }}
      >
        <Menu
          mode="vertical"
          selectedKeys={[pathname]}
          items={menuItems.map((item) => ({
            key: item.key,
            label: <Link href={item.key}>{item.label}</Link>,
          }))}
          onClick={() => setDrawerVisible(false)}
          style={{
            border: "none",
          }}
        />
      </Drawer>

      <style jsx global>{`
        .logo-container:hover {
          transform: rotate(-5deg) scale(1.05);
          box-shadow: 0 6px 16px rgba(24, 144, 255, 0.4);
        }

        .logo-image {
          filter: brightness(1.2);
        }

        .logo-container:hover .logo-image {
          transform: rotate(5deg);
        }
      `}</style>
    </AntHeader>
  );
}
