'use client';

import { Typography, Row, Col, Card, Button, Space, List } from 'antd';
import {
  BuildOutlined,
  ExperimentOutlined,
  ToolOutlined,
  SafetyCertificateOutlined,
  TruckOutlined,
  CustomerServiceOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const { Title, Paragraph } = Typography;

export default function Services() {
  const services = [
    {
      icon: <BuildOutlined style={{ fontSize: 64, color: '#1890ff' }} />,
      title: 'Ready Mix Concrete',
      description: 'High-quality ready mix concrete for all types of construction projects',
      features: [
        'Various grades available (PSI 2500-6000)',
        'Consistent quality and strength',
        'On-time delivery to site',
        'Customized mix designs',
      ],
    },
    {
      icon: <ExperimentOutlined style={{ fontSize: 64, color: '#1890ff' }} />,
      title: 'Concrete Blocks & Bricks',
      description: 'Durable and cost-effective building blocks for residential and commercial use',
      features: [
        'Multiple sizes and specifications',
        'Superior strength and durability',
        'Weather-resistant properties',
        'Eco-friendly production',
      ],
    },
    {
      icon: <ToolOutlined style={{ fontSize: 64, color: '#1890ff' }} />,
      title: 'Construction Materials',
      description: 'Complete range of construction materials and building supplies',
      features: [
        'Cement and aggregates',
        'Steel and reinforcement bars',
        'Waterproofing materials',
        'Finishing materials',
      ],
    },
    {
      icon: <SafetyCertificateOutlined style={{ fontSize: 64, color: '#1890ff' }} />,
      title: 'Quality Testing',
      description: 'Comprehensive quality control and material testing services',
      features: [
        'Laboratory testing facilities',
        'Compliance certifications',
        'Quality assurance reports',
        'Technical documentation',
      ],
    },
    {
      icon: <TruckOutlined style={{ fontSize: 64, color: '#1890ff' }} />,
      title: 'Delivery Services',
      description: 'Efficient logistics and on-time delivery to construction sites',
      features: [
        'Fleet of modern trucks',
        'GPS-tracked deliveries',
        'Flexible scheduling',
        'Regional coverage',
      ],
    },
    {
      icon: <CustomerServiceOutlined style={{ fontSize: 64, color: '#1890ff' }} />,
      title: 'Technical Consultation',
      description: 'Expert advice and support for your construction needs',
      features: [
        'Project planning assistance',
        'Material recommendations',
        'Cost estimation support',
        'Technical problem-solving',
      ],
    },
  ];

  const additionalServices = [
    'Site surveys and material quantity estimation',
    'Concrete pumping services',
    'Specialized concrete for unique applications',
    'Emergency orders and rush deliveries',
    'Bulk supply contracts for large projects',
    'After-sales support and warranty',
  ];

  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <Title level={1} style={{ color: 'white', margin: 0 }}>Our Services</Title>
          <Paragraph style={{ color: 'white', fontSize: 18, margin: '16px 0 0' }}>
            Comprehensive construction solutions for your projects
          </Paragraph>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <Title level={2}>What We Offer</Title>
            <Paragraph style={{ fontSize: 16, color: '#666', maxWidth: 800, margin: '0 auto' }}>
              From premium concrete products to complete construction materials, we provide
              everything you need to build with confidence. Our services are designed to
              meet the diverse needs of modern construction projects.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {services.map((service, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card className="service-card" hoverable>
                  <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    <div style={{ textAlign: 'center' }}>
                      {service.icon}
                    </div>
                    <div>
                      <Title level={4}>{service.title}</Title>
                      <Paragraph style={{ color: '#666', marginBottom: 16 }}>
                        {service.description}
                      </Paragraph>
                      <List
                        size="small"
                        dataSource={service.features}
                        renderItem={(item) => (
                          <List.Item style={{ border: 'none', padding: '4px 0' }}>
                            <Space>
                              <CheckCircleOutlined style={{ color: '#52c41a' }} />
                              <span>{item}</span>
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
          <Card style={{ background: '#f5f5f5', border: 'none' }}>
            <Row gutter={[48, 32]} align="middle">
              <Col xs={24} md={12}>
                <Space direction="vertical" size="large">
                  <Title level={3}>Additional Services</Title>
                  <Paragraph style={{ fontSize: 16 }}>
                    Beyond our core offerings, we provide a range of specialized services
                    to support your construction projects from start to finish.
                  </Paragraph>
                  <List
                    dataSource={additionalServices}
                    renderItem={(item) => (
                      <List.Item style={{ border: 'none', padding: '8px 0' }}>
                        <Space>
                          <CheckCircleOutlined style={{ color: '#1890ff', fontSize: 18 }} />
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
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    minHeight: 300,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Space direction="vertical" size="large" align="center">
                    <Title level={3} style={{ color: 'white', margin: 0, textAlign: 'center' }}>
                      Need a Custom Solution?
                    </Title>
                    <Paragraph style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
                      We can tailor our services to meet your specific requirements
                    </Paragraph>
                    <Link href="/contact">
                      <Button type="primary" size="large" ghost>
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
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <Title level={2}>How We Work</Title>
            <Paragraph style={{ fontSize: 16, color: '#666', maxWidth: 700, margin: '0 auto' }}>
              Our streamlined process ensures quality delivery and customer satisfaction
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your project requirements and specifications' },
              { step: '02', title: 'Quotation', desc: 'Receive detailed pricing and delivery timeline' },
              { step: '03', title: 'Production', desc: 'Quality-controlled manufacturing of materials' },
              { step: '04', title: 'Delivery', desc: 'On-time delivery to your construction site' },
            ].map((process, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card className="process-card" style={{ textAlign: 'center' }}>
                  <Title level={1} style={{ color: '#1890ff', margin: 0, fontSize: 48 }}>
                    {process.step}
                  </Title>
                  <Title level={4} style={{ marginTop: 16 }}>{process.title}</Title>
                  <Paragraph style={{ color: '#666' }}>{process.desc}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
}
