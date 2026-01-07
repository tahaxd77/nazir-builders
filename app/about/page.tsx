"use client";

import { Typography, Row, Col, Card, Timeline, Space } from "antd";
import {
  CheckCircleOutlined,
  SafetyOutlined,
  RocketOutlined,
  HeartOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";

const { Title, Paragraph } = Typography;

export default function About() {
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

  const values = [
    {
      icon: <SafetyOutlined style={{ fontSize: 48, color: "#1890ff" }} />,
      title: "Quality",
      description:
        "We never compromise on the quality of our materials and services",
    },
    {
      icon: <CheckCircleOutlined style={{ fontSize: 48, color: "#1890ff" }} />,
      title: "Integrity",
      description:
        "Honest business practices and transparent dealings with all clients",
    },
    {
      icon: <RocketOutlined style={{ fontSize: 48, color: "#1890ff" }} />,
      title: "Innovation",
      description: "Embracing new technologies and modern construction methods",
    },
    {
      icon: <HeartOutlined style={{ fontSize: 48, color: "#1890ff" }} />,
      title: "Customer Focus",
      description:
        "Dedicated to exceeding customer expectations in every project",
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: "Foundation",
      description:
        "Nazir Builders was established with a vision to provide quality construction materials",
      icon: <TrophyOutlined style={{ fontSize: 32, color: "#1890ff" }} />,
    },
    {
      year: "2012",
      title: "Expansion",
      description:
        "Expanded operations with new facilities and increased production capacity",
      icon: <RocketOutlined style={{ fontSize: 32, color: "#1890ff" }} />,
    },
    {
      year: "2016",
      title: "Innovation",
      description:
        "Introduced advanced concrete mixing technology and quality control systems",
      icon: <SafetyOutlined style={{ fontSize: 32, color: "#1890ff" }} />,
    },
    {
      year: "2020",
      title: "Recognition",
      description:
        "Received industry awards for excellence in construction material supply",
      icon: <TrophyOutlined style={{ fontSize: 32, color: "#1890ff" }} />,
    },
    {
      year: "2025",
      title: "Leadership",
      description:
        "Established as a leading supplier in the region with 500+ completed projects",
      icon: <CheckCircleOutlined style={{ fontSize: 32, color: "#1890ff" }} />,
    },
  ];

  return (
    <div className="about-page">
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
            About Us
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
            Building excellence through quality and integrity
          </Paragraph>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <Space direction="vertical" size="large" className="reveal">
                <Title
                  level={2}
                  style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}
                >
                  Who We Are
                </Title>
                <Paragraph
                  style={{ fontSize: 16, lineHeight: 1.8, color: "#595959" }}
                >
                  Nazir Builders is a leading supplier of premium quality
                  concrete products and construction materials in Pakistan. With
                  over 15 years of experience in the industry, we have
                  established ourselves as a trusted partner for builders,
                  contractors, and construction companies across the region.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 16, lineHeight: 1.8, color: "#595959" }}
                >
                  Our commitment to excellence, combined with state-of-the-art
                  facilities and a dedicated team of professionals, enables us
                  to deliver superior products that meet the highest industry
                  standards. We take pride in contributing to Pakistan's
                  infrastructure development through reliable and quality
                  materials.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 16, lineHeight: 1.8, color: "#595959" }}
                >
                  From small residential projects to large commercial
                  developments, we provide comprehensive construction solutions
                  tailored to meet the unique needs of each client. Our focus on
                  customer satisfaction and long-term relationships has made us
                  the preferred choice for quality construction materials.
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} md={12}>
              <div className="image-placeholder reveal delay-200">
                <Card
                  bordered={false}
                  style={{
                    overflow: "hidden",
                    borderRadius: "16px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  }}
                  cover={
                    <div
                      style={{
                        height: 400,
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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
                      <Title
                        level={2}
                        style={{
                          color: "white",
                          margin: 0,
                          zIndex: 2,
                          textAlign: "center",
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                        }}
                      >
                        Building Excellence
                        <br />
                        Since 2008
                      </Title>
                    </div>
                  }
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <Title level={2} style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
              Our Core Values
            </Title>
            <Paragraph
              style={{
                fontSize: 16,
                color: "#666",
                maxWidth: 700,
                margin: "16px auto 0",
                lineHeight: 1.8,
              }}
            >
              The principles that guide our business and define our commitment
              to excellence
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {values.map((value, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card
                  className={`value-card reveal delay-${index * 100}`}
                  hoverable
                  style={{
                    borderRadius: "16px",
                    height: "100%",
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
                      padding: "12px 0",
                    }}
                  >
                    <div
                      style={{
                        padding: "20px",
                        background: "linear-gradient(135deg, #f0f5ff, #e6f4ff)",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    >
                      {value.icon}
                    </div>
                    <Title level={4} style={{ margin: 0, fontSize: "1.25rem" }}>
                      {value.title}
                    </Title>
                    <Paragraph
                      style={{ margin: 0, color: "#666", lineHeight: 1.6 }}
                    >
                      {value.description}
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="history-section">
        <div className="container">
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <Title level={2} style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
              Our Journey
            </Title>
            <Paragraph
              style={{
                fontSize: 16,
                color: "#666",
                maxWidth: 700,
                margin: "16px auto 0",
                lineHeight: 1.8,
              }}
            >
              A timeline of growth, innovation, and achievement
            </Paragraph>
          </div>

          <Card
            className="reveal delay-200"
            style={{
              maxWidth: 900,
              margin: "0 auto",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              border: "1px solid #f0f0f0",
            }}
          >
            <Timeline
              mode="alternate"
              items={milestones.map((milestone, index) => ({
                dot: milestone.icon,
                children: (
                  <div
                    style={{
                      padding: "8px 0",
                      transition: "all 0.3s ease",
                    }}
                    className={`timeline-item delay-${index * 100}`}
                  >
                    <Title
                      level={3}
                      style={{
                        color: "#1890ff",
                        margin: 0,
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      {milestone.year}
                    </Title>
                    <Title
                      level={4}
                      style={{ marginTop: 8, fontSize: "1.15rem" }}
                    >
                      {milestone.title}
                    </Title>
                    <Paragraph
                      style={{ color: "#666", marginTop: 8, lineHeight: 1.6 }}
                    >
                      {milestone.description}
                    </Paragraph>
                  </div>
                ),
              }))}
            />
          </Card>
        </div>
      </section>
    </div>
  );
}
