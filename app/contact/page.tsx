"use client";

import { Typography, Row, Col, Card, Space } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

export default function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal) => observer.observe(reveal));

    return () => {
      reveals.forEach((reveal) => observer.unobserve(reveal));
    };
  }, []);

  const contactInfo = [
    {
      icon: <PhoneOutlined style={{ fontSize: 32, color: "#1890ff" }} />,
      title: "Phone",
      content: "+92 308 6644973",
      extra: "+92 333 4241841",
    },

    {
      icon: <EnvironmentOutlined style={{ fontSize: 32, color: "#1890ff" }} />,
      title: "Address",
      content: "Service Ln, Gulshan Colony, Lahore",
      extra: "Lahore, Pakistan",
      link: "https://www.google.com/maps/place/Nazir+Builders/@31.4665445,74.3468712,17z/data=!3m1!4b1!4m6!3m5!1s0x391907cd2eca0f79:0x4335ee4f124c96eb!8m2!3d31.4665445!4d74.3468712!16s%2Fg%2F11ghpxvzz9?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D",
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: 32, color: "#1890ff" }} />,
      title: "Working Hours",
      content: "Monday - Saturday",
      extra: "8:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <Title
            level={1}
            style={{
              color: "white",
              margin: 0,
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            }}
          >
            Contact Us
          </Title>
          <Paragraph
            style={{
              color: "rgba(255,255,255,0.95)",
              fontSize: 18,
              margin: "16px 0 0",
              maxWidth: 700,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Get in touch with us for any inquiries or quotes
          </Paragraph>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <Row gutter={[48, 48]}>
            <Col xs={24}>
              <Space
                direction="vertical"
                size="small"
                style={{ width: "100%" }}
              >
                <Row gutter={[24, 24]}>
                  {contactInfo.map((info, index) => (
                    <Col xs={24} sm={12} key={index}>
                      <Card
                        className={`contact-info-card reveal delay-${
                          (index + 2) * 100
                        }`}
                        hoverable
                        style={{
                          borderRadius: "16px",
                          border: "1px solid #f0f0f0",
                        }}
                      >
                        <Space
                          direction="vertical"
                          size="middle"
                          align="center"
                          style={{
                            width: "100%",
                            textAlign: "center",
                            padding: "8px 0",
                          }}
                        >
                          <div
                            style={{
                              padding: "16px",
                              background:
                                "linear-gradient(135deg, #f0f5ff, #e6f4ff)",
                              borderRadius: "50%",
                              display: "inline-block",
                            }}
                          >
                            {info.icon}
                          </div>
                          <div>
                            <Title
                              level={5}
                              style={{ margin: "8px 0", fontSize: "1.1rem" }}
                            >
                              {info.title}
                            </Title>
                            {info.link ? (
                              <Link
                                href={info.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                  transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = "#1890ff";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = "#666";
                                }}
                              >
                                <Text
                                  style={{
                                    display: "block",
                                    color: "inherit",
                                    fontSize: "14px",
                                  }}
                                >
                                  {info.content}
                                </Text>
                                <Text
                                  style={{
                                    display: "block",
                                    color: "inherit",
                                    fontSize: "14px",
                                  }}
                                >
                                  {info.extra} 📍
                                </Text>
                              </Link>
                            ) : (
                              <>
                                <Text
                                  style={{
                                    display: "block",
                                    color: "#666",
                                    fontSize: "14px",
                                  }}
                                >
                                  {info.content}
                                </Text>
                                <Text
                                  style={{
                                    display: "block",
                                    color: "#666",
                                    fontSize: "14px",
                                  }}
                                >
                                  {info.extra}
                                </Text>
                              </>
                            )}
                          </div>
                        </Space>
                      </Card>
                    </Col>
                  ))}
                </Row>

                <Card
                  className="reveal delay-600"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    border: "none",
                    marginTop: 24,
                    borderRadius: "16px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-50%",
                      right: "-50%",
                      width: "200%",
                      height: "200%",
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                      animation: "float 6s ease-in-out infinite",
                    }}
                  />
                  <Space
                    direction="vertical"
                    size="middle"
                    style={{ width: "100%", position: "relative", zIndex: 2 }}
                  >
                    <Title level={4} style={{ color: "white", margin: 0 }}>
                      Visit Our Office
                    </Title>
                    <Paragraph
                      style={{
                        color: "rgba(255,255,255,0.95)",
                        margin: 0,
                        fontSize: 15,
                        lineHeight: 1.6,
                      }}
                    >
                      We welcome site visits and consultations at our office.
                      Please call ahead to schedule an appointment with our
                      team.
                    </Paragraph>
                    <Link
                      href="https://www.google.com/maps/place/Nazir+Builders/@31.4665445,74.3468712,17z/data=!3m1!4b1!4m6!3m5!1s0x391907cd2eca0f79:0x4335ee4f124c96eb!8m2!3d31.4665445!4d74.3468712!16s%2Fg%2F11ghpxvzz9?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(255,255,255,0.15)",
                          padding: 20,
                          borderRadius: 12,
                          marginTop: 16,
                          backdropFilter: "blur(10px)",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255,255,255,0.25)";
                          e.currentTarget.style.transform = "scale(1.02)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255,255,255,0.15)";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <Text style={{ color: "white", fontSize: 15 }}>
                          <EnvironmentOutlined /> Service Ln, Gulshan Colony,
                          Lahore📍
                        </Text>
                      </div>
                    </Link>
                  </Space>
                </Card>
              </Space>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}
