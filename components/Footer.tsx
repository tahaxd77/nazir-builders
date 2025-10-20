'use client';

import { Layout, Row, Col, Typography, Space } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;

export default function Footer() {
  return (
    <AntFooter className="footer-container">
      <div className="footer-content">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={4} style={{ color: 'white' }}>Nazir Builders</Title>
              <Text style={{ color: 'rgba(255,255,255,0.7)' }}>
                Your trusted partner in quality construction and building materials.
                Delivering excellence since establishment.
              </Text>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={5} style={{ color: 'white' }}>Quick Links</Title>
              <Space direction="vertical">
                <Link href="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
                <Link href="/about" style={{ color: 'rgba(255,255,255,0.7)' }}>About Us</Link>
                <Link href="/services" style={{ color: 'rgba(255,255,255,0.7)' }}>Services</Link>
                <Link href="/contact" style={{ color: 'rgba(255,255,255,0.7)' }}>Contact</Link>
              </Space>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={5} style={{ color: 'white' }}>Services</Title>
              <Space direction="vertical">
                <Text style={{ color: 'rgba(255,255,255,0.7)' }}>Concrete Supply</Text>
                <Text style={{ color: 'rgba(255,255,255,0.7)' }}>Construction Materials</Text>
                <Text style={{ color: 'rgba(255,255,255,0.7)' }}>Building Solutions</Text>
                <Text style={{ color: 'rgba(255,255,255,0.7)' }}>Consultation</Text>
              </Space>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={5} style={{ color: 'white' }}>Contact Info</Title>
              <Space direction="vertical">
                <Space>
                  <PhoneOutlined style={{ color: '#1890ff' }} />
                  <Text style={{ color: 'rgba(255,255,255,0.7)' }}>+92 300 1234567</Text>
                </Space>
                <Space>
                  <MailOutlined style={{ color: '#1890ff' }} />
                  <Text style={{ color: 'rgba(255,255,255,0.7)' }}>info@nazirbuilders.com</Text>
                </Space>
                <Space align="start">
                  <EnvironmentOutlined style={{ color: '#1890ff', marginTop: 4 }} />
                  <Text style={{ color: 'rgba(255,255,255,0.7)' }}>
                    123 Business District, Lahore, Pakistan
                  </Text>
                </Space>
              </Space>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <Text style={{ color: 'rgba(255,255,255,0.5)' }}>
            © 2025 Nazir Builders. All rights reserved.
          </Text>
        </div>
      </div>
    </AntFooter>
  );
}
