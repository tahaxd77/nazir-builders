"use client";

import { Layout, Row, Col, Typography, Space } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  HeartFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

export default function Footer() {
  return (
    <AntFooter className="footer-container">
      <div className="footer-content">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={4} style={{ color: "white", fontSize: "1.25rem" }}>
                Nazir Builders
              </Title>
              <Text
                style={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                  display: "block",
                }}
              >
                Your trusted partner in quality construction and building
                materials. Delivering excellence since establishment.
              </Text>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={5} style={{ color: "white", fontSize: "1.1rem" }}>
                Quick Links
              </Title>
              <Space
                direction="vertical"
                size="small"
                style={{ width: "100%" }}
              >
                <Link
                  href="/"
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "block",
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "block",
                  }}
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "block",
                  }}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "block",
                  }}
                >
                  Contact
                </Link>
              </Space>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={5} style={{ color: "white", fontSize: "1.1rem" }}>
                Services
              </Title>
              <Space
                direction="vertical"
                size="small"
                style={{ width: "100%" }}
              >
                <Text
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    display: "block",
                    fontSize: "14px",
                  }}
                >
                  Concrete Products
                </Text>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    display: "block",
                    fontSize: "14px",
                  }}
                >
                  Building Solutions
                </Text>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    display: "block",
                    fontSize: "14px",
                  }}
                >
                  Consultation
                </Text>
              </Space>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={5} style={{ color: "white", fontSize: "1.1rem" }}>
                Contact Info
              </Title>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Space style={{ alignItems: "flex-start" }}>
                  <PhoneOutlined
                    style={{ color: "#667eea", fontSize: 16, marginTop: 2 }}
                  />
                  <Text
                    style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}
                  >
                    +92 333 4241841
                  </Text>
                </Space>
                <Space style={{ alignItems: "flex-start" }}>
                  <WhatsAppOutlined
                    style={{ color: "#25D366", fontSize: 16, marginTop: 2 }}
                  />
                  <Link
                    href="https://wa.me/923086644973"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Text
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "14px",
                        transition: "all 0.3s ease",
                      }}
                      className="whatsapp-link"
                    >
                      +92 308 6644973
                    </Text>
                  </Link>
                </Space>
                <Space align="start" style={{ alignItems: "flex-start" }}>
                  <EnvironmentOutlined
                    style={{ color: "#667eea", fontSize: 16, marginTop: 4 }}
                  />
                  <Link
                    href="https://www.google.com/maps/place/Nazir+Builders/@31.4665445,74.3468712,17z/data=!3m1!4b1!4m6!3m5!1s0x391907cd2eca0f79:0x4335ee4f124c96eb!8m2!3d31.4665445!4d74.3468712!16s%2Fg%2F11ghpxvzz9?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    <Text
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "14px",
                        lineHeight: 1.6,
                      }}
                    >
                      Service Ln, Gulshan Colony, Lahore.
                    </Text>
                  </Link>
                </Space>
              </Space>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <Text
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "14px",
              display: "block",
              marginBottom: 8,
            }}
          >
            © 2026 Nazir Builders. All rights reserved.
          </Text>
          <Text
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "14px",
              display: "block",
            }}
          >
            Made with{" "}
            <HeartFilled style={{ color: "#667eea", margin: "0 4px" }} /> for
            building excellence
          </Text>
        </div>
      </div>

      <style jsx global>{`
        .whatsapp-link:hover {
          color: #25d366 !important;
        }
      `}</style>
    </AntFooter>
  );
}
