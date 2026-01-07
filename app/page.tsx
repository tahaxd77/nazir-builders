"use client";

import {
  Button,
  Row,
  Col,
  Card,
  Typography,
  Space,
  Statistic,
  Flex,
} from "antd";
import {
  SafetyOutlined,
  ThunderboltOutlined,
  TeamOutlined,
  TrophyOutlined,
  RocketOutlined,
  CustomerServiceOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useEffect, useState } from "react";

const { Title, Paragraph, Text } = Typography;

// Define a consistent theme color
const themeColor = "#003a8c"; // A deeper, more professional blue
const lightGrayBg = "#f9f9f9";
const primaryTextColor = "#333";
const secondaryTextColor = "#595959";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Start counters animation after a delay
    const timer = setTimeout(() => {
      setCountersStarted(true);
    }, 300);

    // Intersection Observer for scroll animations
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
      clearTimeout(timer);
      reveals.forEach((reveal) => observer.unobserve(reveal));
    };
  }, []);

  const features = [
    {
      icon: <SafetyOutlined style={{ fontSize: 48, color: themeColor }} />,
      title: "Quality Assurance",
      description: "Premium grade materials tested for strength & durability",
    },
    {
      icon: <ThunderboltOutlined style={{ fontSize: 48, color: themeColor }} />,
      title: "Fast Delivery",
      description: "Quick & reliable delivery to your construction site",
    },
    {
      icon: <TeamOutlined style={{ fontSize: 48, color: themeColor }} />,
      title: "Expert Team",
      description: "Professional consultation & technical support",
    },
    {
      icon: <TrophyOutlined style={{ fontSize: 48, color: themeColor }} />,
      title: "Proven Track Record",
      description: "Years of excellence in the construction industry",
    },
    {
      icon: <RocketOutlined style={{ fontSize: 48, color: themeColor }} />,
      title: "Innovation",
      description: "Latest technology & modern construction solutions",
    },
    {
      icon: (
        <CustomerServiceOutlined style={{ fontSize: 48, color: themeColor }} />
      ),
      title: "24/7 Support",
      description: "Round the clock customer service & assistance",
    },
  ];

  const stats = [
    { title: "Projects Completed", value: 500, suffix: "+" },
    { title: "Happy Clients", value: 300, suffix: "+" },
    { title: "Years Experience", value: 15, suffix: "+" },
    { title: "Expert Team", value: 50, suffix: "+" },
  ];

  const sectionStyle = {
    padding: "80px 20px",
  };

  const containerStyle = {
    maxWidth: 1200,
    margin: "0 auto",
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className={isVisible ? "animate-fadeIn" : ""}
        style={{
          minHeight: "85vh",
          background: `linear-gradient(135deg, ${themeColor}, #001529)`,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Shapes */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "300px",
            height: "300px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            width: "200px",
            height: "200px",
            background: "rgba(255,255,255,0.03)",
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />

        <Flex
          vertical
          align="center"
          justify="center"
          gap="large"
          style={{ position: "relative", zIndex: 2 }}
        >
          <Title
            className={isVisible ? "animate-fadeInUp" : ""}
            level={1}
            style={{
              color: "white",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              margin: 0,
              fontWeight: 800,
              textShadow: "2px 2px 12px rgba(0,0,0,0.4)",
              letterSpacing: "2px",
              opacity: 0,
              animation: isVisible
                ? "fadeInUp 0.8s ease-out 0.2s forwards"
                : "none",
            }}
          >
            QUALITY & INTEGRITY
          </Title>
          <Paragraph
            className={isVisible ? "animate-fadeInUp delay-200" : ""}
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.35rem",
              maxWidth: 700,
              lineHeight: 1.6,
              opacity: 0,
              animation: isVisible
                ? "fadeInUp 0.8s ease-out 0.4s forwards"
                : "none",
            }}
          >
            Leading supplier of premium concrete products and construction
            materials. Building Pakistan's future with strength and reliability.
          </Paragraph>
          <div
            style={{
              opacity: 0,
              animation: isVisible
                ? "fadeInUp 0.8s ease-out 0.6s forwards"
                : "none",
            }}
          >
            <Link href="/contact">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                style={{
                  height: 56,
                  fontSize: 18,
                  padding: "0 48px",
                  fontWeight: "bold",
                  borderRadius: "28px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </Flex>
      </section>

      {/* Stats Section */}
      <section style={{ ...sectionStyle, backgroundColor: lightGrayBg }}>
        <div style={containerStyle}>
          <Row gutter={[32, 32]} justify="center">
            {stats.map((stat, index) => (
              <Col xs={12} sm={12} md={6} key={index}>
                <Card
                  className={`stat-card reveal delay-${index * 100}`}
                  bordered={false}
                  style={{
                    background: "#ffffff",
                    borderRadius: 16,
                    padding: "32px 16px",
                    textAlign: "center",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: `linear-gradient(90deg, ${themeColor}, #667eea)`,
                    }}
                  />
                  <Statistic
                    title={
                      <Text
                        style={{
                          fontSize: 16,
                          color: secondaryTextColor,
                          marginBottom: 12,
                          display: "block",
                        }}
                      >
                        {stat.title}
                      </Text>
                    }
                    value={countersStarted ? stat.value : 0}
                    suffix={stat.suffix}
                    valueStyle={{
                      color: themeColor,
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: "bold",
                    }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Features Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <Title
              level={2}
              style={{
                color: primaryTextColor,
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
              }}
            >
              Why Choose Nazir Builders
            </Title>
            <Paragraph
              style={{
                fontSize: 18,
                color: secondaryTextColor,
                maxWidth: 700,
                margin: "16px auto 0",
                lineHeight: 1.8,
              }}
            >
              We provide comprehensive construction solutions with a focus on
              quality, reliability, and customer satisfaction.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  hoverable
                  className={`feature-card reveal delay-${index * 100}`}
                  style={{
                    height: "100%",
                    borderRadius: 16,
                    textAlign: "center",
                    border: "1px solid #f0f0f0",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <Space
                    direction="vertical"
                    size="middle"
                    align="center"
                    style={{ width: "100%", padding: "24px 8px" }}
                  >
                    <div
                      style={{
                        padding: "20px",
                        background: "linear-gradient(135deg, #f0f5ff, #e6f4ff)",
                        borderRadius: "50%",
                        display: "inline-block",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      {feature.icon}
                    </div>
                    <Title
                      level={4}
                      style={{
                        margin: 0,
                        color: primaryTextColor,
                        fontSize: "1.25rem",
                      }}
                    >
                      {feature.title}
                    </Title>
                    <Paragraph
                      style={{
                        margin: 0,
                        color: secondaryTextColor,
                        minHeight: 44,
                        fontSize: "15px",
                      }}
                    >
                      {feature.description}
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ ...sectionStyle, backgroundColor: lightGrayBg }}>
        <div style={containerStyle}>
          <Card
            className="cta-card reveal"
            bordered={false}
            style={{
              background: `linear-gradient(135deg, ${themeColor}, #001529)`,
              color: "white",
              borderRadius: 20,
              padding: "clamp(32px, 5vw, 48px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-50%",
                right: "-50%",
                width: "100%",
                height: "100%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                animation: "float 6s ease-in-out infinite",
              }}
            />
            <Flex
              justify="space-between"
              align="center"
              wrap="wrap"
              gap={24}
              style={{ position: "relative", zIndex: 2 }}
            >
              <div style={{ flex: 1, minWidth: "280px" }}>
                <Title
                  level={2}
                  style={{
                    margin: 0,
                    color: "white",
                    fontWeight: 700,
                    fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
                  }}
                >
                  Ready to Start Your Project?
                </Title>
                <Paragraph
                  style={{
                    margin: 0,
                    color: "rgba(255,255,255,0.9)",
                    fontSize: 18,
                    marginTop: 12,
                    lineHeight: 1.6,
                  }}
                >
                  Get in touch with us today for a free consultation and quote.
                </Paragraph>
              </div>
              <Link href="/contact">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  style={{
                    height: 56,
                    fontSize: 18,
                    padding: "0 48px",
                    fontWeight: "bold",
                    borderRadius: "28px",
                    background: "white",
                    color: "white",
                    border: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </Flex>
          </Card>
        </div>
      </section>
    </div>
  );
}
