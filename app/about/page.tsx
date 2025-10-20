'use client';

import { Typography, Row, Col, Card, Timeline, Space } from 'antd';
import {
  CheckCircleOutlined,
  SafetyOutlined,
  RocketOutlined,
  HeartOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function About() {
  const values = [
    {
      icon: <SafetyOutlined style={{ fontSize: 48, color: '#1890ff' }} />,
      title: 'Quality',
      description: 'We never compromise on the quality of our materials and services',
    },
    {
      icon: <CheckCircleOutlined style={{ fontSize: 48, color: '#1890ff' }} />,
      title: 'Integrity',
      description: 'Honest business practices and transparent dealings with all clients',
    },
    {
      icon: <RocketOutlined style={{ fontSize: 48, color: '#1890ff' }} />,
      title: 'Innovation',
      description: 'Embracing new technologies and modern construction methods',
    },
    {
      icon: <HeartOutlined style={{ fontSize: 48, color: '#1890ff' }} />,
      title: 'Customer Focus',
      description: 'Dedicated to exceeding customer expectations in every project',
    },
  ];

  const milestones = [
    {
      year: '2008',
      title: 'Foundation',
      description: 'Nazir Builders was established with a vision to provide quality construction materials',
    },
    {
      year: '2012',
      title: 'Expansion',
      description: 'Expanded operations with new facilities and increased production capacity',
    },
    {
      year: '2016',
      title: 'Innovation',
      description: 'Introduced advanced concrete mixing technology and quality control systems',
    },
    {
      year: '2020',
      title: 'Recognition',
      description: 'Received industry awards for excellence in construction material supply',
    },
    {
      year: '2025',
      title: 'Leadership',
      description: 'Established as a leading supplier in the region with 500+ completed projects',
    },
  ];

  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <Title level={1} style={{ color: 'white', margin: 0 }}>About Us</Title>
          <Paragraph style={{ color: 'white', fontSize: 18, margin: '16px 0 0' }}>
            Building excellence through quality and integrity
          </Paragraph>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <Space direction="vertical" size="large">
                <Title level={2}>Who We Are</Title>
                <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
                  Nazir Builders is a leading supplier of premium quality concrete products and
                  construction materials in Pakistan. With over 15 years of experience in the
                  industry, we have established ourselves as a trusted partner for builders,
                  contractors, and construction companies across the region.
                </Paragraph>
                <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
                  Our commitment to excellence, combined with state-of-the-art facilities and
                  a dedicated team of professionals, enables us to deliver superior products
                  that meet the highest industry standards. We take pride in contributing to
                  Pakistan's infrastructure development through reliable and quality materials.
                </Paragraph>
                <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
                  From small residential projects to large commercial developments, we provide
                  comprehensive construction solutions tailored to meet the unique needs of
                  each client. Our focus on customer satisfaction and long-term relationships
                  has made us the preferred choice for quality construction materials.
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} md={12}>
              <div className="image-placeholder">
                <Card
                  cover={
                    <div style={{
                      height: 400,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Title level={3} style={{ color: 'white', margin: 0 }}>
                        Building Excellence
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
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <Title level={2}>Our Core Values</Title>
            <Paragraph style={{ fontSize: 16, color: '#666', maxWidth: 700, margin: '0 auto' }}>
              The principles that guide our business and define our commitment to excellence
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {values.map((value, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card className="value-card" hoverable>
                  <Space direction="vertical" size="middle" align="center" style={{ width: '100%', textAlign: 'center' }}>
                    {value.icon}
                    <Title level={4} style={{ margin: 0 }}>{value.title}</Title>
                    <Paragraph style={{ margin: 0, color: '#666' }}>
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
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <Title level={2}>Our Journey</Title>
            <Paragraph style={{ fontSize: 16, color: '#666', maxWidth: 700, margin: '0 auto' }}>
              A timeline of growth, innovation, and achievement
            </Paragraph>
          </div>

          <Card style={{ maxWidth: 900, margin: '0 auto' }}>
            <Timeline
              mode="alternate"
              items={milestones.map((milestone) => ({
                children: (
                  <div>
                    <Title level={4} style={{ color: '#1890ff' }}>{milestone.year}</Title>
                    <Title level={5}>{milestone.title}</Title>
                    <Paragraph style={{ color: '#666' }}>{milestone.description}</Paragraph>
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
