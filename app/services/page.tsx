"use client";

import React from "react";
import { Typography, Row, Col, Card, Button, Space, List } from "antd";
import {
  BuildOutlined,
  ExperimentOutlined,
  ToolOutlined,
  SafetyCertificateOutlined,
  TruckOutlined,
  CustomerServiceOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useEffect } from "react";

const { Title, Paragraph } = Typography;

export default function Services() {
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
  const services = [
    {
      icon: <BuildOutlined style={{ fontSize: 64, color: "#1890ff" }} />,
      title: "Ready Mix Concrete",
      description:
        "High-quality ready mix concrete for all types of construction projects",
      features: [
        "Various grades available (PSI 2500-6000)",
        "Consistent quality and strength",
        "On-time delivery to site",
        "Customized mix designs",
      ],
    },
    {
      icon: <ExperimentOutlined style={{ fontSize: 64, color: "#1890ff" }} />,
      title: "Concrete Blocks & Bricks",
      description:
        "Durable and cost-effective building blocks for residential and commercial use",
      features: [
        "Multiple sizes and specifications",
        "Superior strength and durability",
        "Weather-resistant properties",
        "Eco-friendly production",
      ],
    },
    {
      icon: <ToolOutlined style={{ fontSize: 64, color: "#1890ff" }} />,
      title: "Construction Materials",
      description:
        "Complete range of construction materials and building supplies",
      features: [
        "Cement and aggregates",
        "Steel and reinforcement bars",
        "Waterproofing materials",
        "Finishing materials",
      ],
    },
    {
      icon: (
        <SafetyCertificateOutlined style={{ fontSize: 64, color: "#1890ff" }} />
      ),
      title: "Quality Testing",
      description:
        "Comprehensive quality control and material testing services",
      features: [
        "Laboratory testing facilities",
        "Compliance certifications",
        "Quality assurance reports",
        "Technical documentation",
      ],
    },
    {
      icon: <TruckOutlined style={{ fontSize: 64, color: "#1890ff" }} />,
      title: "Delivery Services",
      description:
        "Efficient logistics and on-time delivery to construction sites",
      features: [
        "Fleet of modern trucks",
        "GPS-tracked deliveries",
        "Flexible scheduling",
        "Regional coverage",
      ],
    },
    {
      icon: (
        <CustomerServiceOutlined style={{ fontSize: 64, color: "#1890ff" }} />
      ),
      title: "Technical Consultation",
      description: "Expert advice and support for your construction needs",
      features: [
        "Project planning assistance",
        "Material recommendations",
        "Cost estimation support",
        "Technical problem-solving",
      ],
    },
  ];

  const additionalServices = [
    "Site surveys and material quantity estimation",
    "Concrete pumping services",
    "Specialized concrete for unique applications",
    "Emergency orders and rush deliveries",
    "Bulk supply contracts for large projects",
    "After-sales support and warranty",
  ];

  return (
    <div className="services-page">
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
            Our Services
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
            Comprehensive construction solutions for your projects
          </Paragraph>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <Title level={2} style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
              What We Offer
            </Title>
            <Paragraph
              style={{
                fontSize: 16,
                color: "#666",
                maxWidth: 800,
                margin: "16px auto 0",
                lineHeight: 1.8,
              }}
            >
              From premium concrete products to complete construction materials,
              we provide everything you need to build with confidence. Our
              services are designed to meet the diverse needs of modern
              construction projects.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {services.map((service, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  className={`service-card reveal delay-${index * 100}`}
                  hoverable
                  style={{
                    borderRadius: "16px",
                    border: "1px solid #f0f0f0",
                  }}
                >
                  <Space
                    direction="vertical"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        padding: "16px",
                        background: "linear-gradient(135deg, #f0f5ff, #e6f4ff)",
                        borderRadius: "12px",
                        margin: "-24px -24px 0 -24px",
                      }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <Title
                        level={4}
                        style={{ fontSize: "1.25rem", marginTop: 8 }}
                      >
                        {service.title}
                      </Title>
                      <Paragraph
                        style={{
                          color: "#666",
                          marginBottom: 16,
                          lineHeight: 1.6,
                        }}
                      >
                        {service.description}
                      </Paragraph>
                      <List
                        size="small"
                        dataSource={service.features}
                        renderItem={(item) => (
                          <List.Item
                            style={{ border: "none", padding: "6px 0" }}
                          >
                            <Space>
                              <CheckCircleOutlined
                                style={{ color: "#52c41a", fontSize: 16 }}
                              />
                              <span style={{ fontSize: 14 }}>{item}</span>
                            </Space>
                          </List.Item>
                        )}
                      />
                    </div>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="additional-services-section">
        <div className="container">
          <Card
            className="reveal"
            style={{
              background: "#f9f9f9",
              border: "none",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Row gutter={[48, 32]} align="middle">
              <Col xs={24} md={12}>
                <Space direction="vertical" size="large">
                  <Title
                    level={3}
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                  >
                    Additional Services
                  </Title>
                  <Paragraph
                    style={{ fontSize: 16, lineHeight: 1.8, color: "#595959" }}
                  >
                    Beyond our core offerings, we provide a range of specialized
                    services to support your construction projects from start to
                    finish.
                  </Paragraph>
                  <List
                    dataSource={additionalServices}
                    renderItem={(item, index) => (
                      <List.Item
                        style={{
                          border: "none",
                          padding: "10px 0",
                          transition: "all 0.3s ease",
                        }}
                        className="additional-service-item"
                      >
                        <Space>
                          <CheckCircleOutlined
                            style={{ color: "#1890ff", fontSize: 18 }}
                          />
                          <span style={{ fontSize: 15 }}>{item}</span>
                        </Space>
                      </List.Item>
                    )}
                  />
                </Space>
              </Col>
              <Col xs={24} md={12}>
                <Card
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    border: "none",
                    minHeight: 350,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                    size="large"
                    align="center"
                    style={{ position: "relative", zIndex: 2 }}
                  >
                    <Title
                      level={3}
                      style={{
                        color: "white",
                        margin: 0,
                        textAlign: "center",
                        fontSize: "clamp(1.5rem, 3vw, 1.75rem)",
                      }}
                    >
                      Need a Custom Solution?
                    </Title>
                    <Paragraph
                      style={{
                        color: "rgba(255,255,255,0.95)",
                        fontSize: 16,
                        textAlign: "center",
                        lineHeight: 1.6,
                      }}
                    >
                      We can tailor our services to meet your specific
                      requirements
                    </Paragraph>
                    <Link href="/contact">
                      <Button
                        type="primary"
                        size="large"
                        icon={<ArrowRightOutlined />}
                        style={{
                          background: "white",
                          color: "#1890ff",
                          border: "none",
                          height: 48,
                          padding: "0 32px",
                          fontSize: 16,
                          fontWeight: "bold",
                          borderRadius: "24px",
                        }}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </Space>
                </Card>
              </Col>
            </Row>
          </Card>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <Title level={2} style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
              How We Work
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
              Our streamlined process ensures quality delivery and customer
              satisfaction
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Discuss your project requirements and specifications",
              },
              {
                step: "02",
                title: "Quotation",
                desc: "Receive detailed pricing and delivery timeline",
              },
              {
                step: "03",
                title: "Production",
                desc: "Quality-controlled manufacturing of materials",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "On-time delivery to your construction site",
              },
            ].map((process, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card
                  className={`process-card reveal delay-${index * 100}`}
                  style={{
                    textAlign: "center",
                    borderRadius: "16px",
                    border: "2px solid #f0f0f0",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      margin: "0 auto 20px",
                      background: "linear-gradient(135deg, #667eea, #764ba2)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Title
                      level={1}
                      style={{
                        color: "white",
                        margin: 0,
                        fontSize: 36,
                        fontWeight: "bold",
                      }}
                    >
                      {process.step}
                    </Title>
                  </div>
                  <Title
                    level={4}
                    style={{ marginTop: 16, fontSize: "1.15rem" }}
                  >
                    {process.title}
                  </Title>
                  <Paragraph style={{ color: "#666", lineHeight: 1.6 }}>
                    {process.desc}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <style jsx global>{`
        .additional-service-item:hover {
          transform: translateX(8px);
          color: #1890ff;
        }
      `}</style>
    </div>
  );
}
