'use client';

import { Button, Row, Col, Card, Typography, Space, Statistic } from 'antd';
import {
  SafetyOutlined,
  ThunderboltOutlined,
  TeamOutlined,
  TrophyOutlined,
  RocketOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const { Title, Paragraph, Text } = Typography;

export default function Home() {
  const features = [
    {
      icon: <SafetyOutlined style={{ fontSize: 48, color: '#1890ff' }} />,
      title: 'Quality Assurance',
      description: 'Premium grade materials tested for strength & durability',
    },
    {
      icon: <ThunderboltOutlined style={{ fontSize: 48, color: '#1890ff' }} />,
      title: 'Fast Delivery',
      description: 'Quick & reliable delivery to your construction site',
    },
    {
      icon: <TeamOutlined style={{ fontSize: 48, color: '#1890ff' }} />,
      title: 'Expert Team',
      description: 'Professional consultation & technical support',
    },
    {
      icon: <TrophyOutlined style={{ fontSize: 48, color: '#1890ff' }} />,
      title: 'Proven Track Record',
      description: 'Years of excellence in the construction industry',
    },
    {
      icon: <RocketOutlined style={{ fontSize: 48, color: '#1890ff' }} />,
      title: 'Innovation',
      description: 'Latest technology & modern construction solutions',
    },
    {
      icon: <CustomerServiceOutlined style={{ fontSize: 48, color: '#1890ff' }} />,
      title: '24/7 Support',
      description: 'Round the clock customer service & assistance',
    },
  ];

  const stats = [
    { title: 'Projects Completed', value: 500, suffix: '+' },
    { title: 'Happy Clients', value: 300, suffix: '+' },
    { title: 'Years Experience', value: 15, suffix: '+' },
    { title: 'Expert Team', value: 50, suffix: '+' },
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <Space direction="vertical" size="large" align="center">
            <Title level={1} style={{ color: 'white', fontSize: '3.5rem', margin: 0, textAlign: 'center' }}>
              QUALITY & INTEGRITY
            </Title>
            <Paragraph style={{ color: 'white', fontSize: '1.25rem', maxWidth: 600, textAlign: 'center' }}>
              Leading supplier of premium concrete products and construction materials.
              Building Pakistan's future with strength and reliability.
            </Paragraph>
            <Link href="/contact">
              <Button type="primary" size="large" style={{ height: 48, fontSize: 16, padding: '0 40px' }}>
                Get Started
              </Button>
            </Link>
          </Space>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <Row gutter={[32, 32]} justify="center">
            {stats.map((stat, index) => (
              <Col xs={12} sm={12} md={6} key={index}>
                <Card className="stat-card">
                  <Statistic
                    title={<Text style={{ fontSize: 16, color: '#666' }}>{stat.title}</Text>}
                    value={stat.value}
                    suffix={stat.suffix}
                    valueStyle={{ color: '#1890ff', fontSize: 40, fontWeight: 'bold' }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <Title level={2}>Why Choose Nazir Builders</Title>
            <Paragraph style={{ fontSize: 16, color: '#666', maxWidth: 700, margin: '0 auto' }}>
              We provide comprehensive construction solutions with a focus on quality,
              reliability, and customer satisfaction.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card className="feature-card" hoverable>
                  <Space direction="vertical" size="middle" align="center" style={{ width: '100%', textAlign: 'center' }}>
                    {feature.icon}
                    <Title level={4} style={{ margin: 0 }}>{feature.title}</Title>
                    <Paragraph style={{ margin: 0, color: '#666' }}>
                      {feature.description}
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <Card className="cta-card">
            <Row gutter={32} align="middle">
              <Col xs={24} md={16}>
                <Space direction="vertical" size="small">
                  <Title level={2} style={{ margin: 0, color: 'white' }}>
                    Ready to Start Your Project?
                  </Title>
                  <Paragraph style={{ margin: 0, color: 'rgba(255,255,255,0.85)', fontSize: 16 }}>
                    Get in touch with us today for a free consultation and quote.
                  </Paragraph>
                </Space>
              </Col>
              <Col xs={24} md={8} style={{ textAlign: 'right' }}>
                <Link href="/contact">
                  <Button type="primary" size="large" style={{ height: 48, fontSize: 16, padding: '0 40px' }}>
                    Contact Us
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card>
        </div>
      </section>
    </div>
  );
}
