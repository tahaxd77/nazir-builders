'use client';

import { Typography, Row, Col, Card, Form, Input, Button, Space, message } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    message.success('Thank you for contacting us! We will get back to you soon.');
    form.resetFields();
  };

  const contactInfo = [
    {
      icon: <PhoneOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: 'Phone',
      content: '+92 300 1234567',
      extra: '+92 321 9876543',
    },
    {
      icon: <MailOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: 'Email',
      content: 'info@nazirbuilders.com',
      extra: 'sales@nazirbuilders.com',
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: 'Address',
      content: '123 Business District',
      extra: 'Lahore, Pakistan',
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: 'Working Hours',
      content: 'Monday - Saturday',
      extra: '8:00 AM - 6:00 PM',
    },
  ];

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <Title level={1} style={{ color: 'white', margin: 0 }}>Contact Us</Title>
          <Paragraph style={{ color: 'white', fontSize: 18, margin: '16px 0 0' }}>
            Get in touch with us for any inquiries or quotes
          </Paragraph>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <Row gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div>
                  <Title level={2}>Send Us a Message</Title>
                  <Paragraph style={{ fontSize: 16, color: '#666' }}>
                    Fill out the form below and our team will get back to you within 24 hours.
                    For urgent matters, please call us directly.
                  </Paragraph>
                </div>

                <Card>
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                  >
                    <Row gutter={16}>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          label="First Name"
                          name="firstName"
                          rules={[{ required: true, message: 'Please enter your first name' }]}
                        >
                          <Input size="large" placeholder="John" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          label="Last Name"
                          name="lastName"
                          rules={[{ required: true, message: 'Please enter your last name' }]}
                        >
                          <Input size="large" placeholder="Doe" />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' },
                      ]}
                    >
                      <Input size="large" placeholder="john.doe@example.com" />
                    </Form.Item>

                    <Form.Item
                      label="Phone Number"
                      name="phone"
                      rules={[{ required: true, message: 'Please enter your phone number' }]}
                    >
                      <Input size="large" placeholder="+92 300 1234567" />
                    </Form.Item>

                    <Form.Item
                      label="Subject"
                      name="subject"
                      rules={[{ required: true, message: 'Please enter a subject' }]}
                    >
                      <Input size="large" placeholder="Project Inquiry" />
                    </Form.Item>

                    <Form.Item
                      label="Message"
                      name="message"
                      rules={[{ required: true, message: 'Please enter your message' }]}
                    >
                      <TextArea
                        rows={6}
                        placeholder="Tell us about your project requirements..."
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit" size="large" block>
                        Send Message
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Space>
            </Col>

            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div>
                  <Title level={2}>Contact Information</Title>
                  <Paragraph style={{ fontSize: 16, color: '#666' }}>
                    Reach out to us through any of the following channels. We're here to help
                    you with your construction needs.
                  </Paragraph>
                </div>

                <Row gutter={[24, 24]}>
                  {contactInfo.map((info, index) => (
                    <Col xs={24} sm={12} key={index}>
                      <Card className="contact-info-card" hoverable>
                        <Space direction="vertical" size="middle" align="center" style={{ width: '100%', textAlign: 'center' }}>
                          {info.icon}
                          <div>
                            <Title level={5} style={{ margin: '8px 0' }}>{info.title}</Title>
                            <Text style={{ display: 'block', color: '#666' }}>{info.content}</Text>
                            <Text style={{ display: 'block', color: '#666' }}>{info.extra}</Text>
                          </div>
                        </Space>
                      </Card>
                    </Col>
                  ))}
                </Row>

                <Card
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    marginTop: 24,
                  }}
                >
                  <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                    <Title level={4} style={{ color: 'white', margin: 0 }}>
                      Visit Our Office
                    </Title>
                    <Paragraph style={{ color: 'white', margin: 0, fontSize: 15 }}>
                      We welcome site visits and consultations at our office. Please call ahead
                      to schedule an appointment with our team.
                    </Paragraph>
                    <div style={{
                      background: 'rgba(255,255,255,0.2)',
                      padding: 20,
                      borderRadius: 8,
                      marginTop: 16,
                    }}>
                      <Text style={{ color: 'white', fontSize: 15 }}>
                        <EnvironmentOutlined /> 123 Business District, Lahore, Pakistan
                      </Text>
                    </div>
                  </Space>
                </Card>

                <Card style={{ background: '#f0f2f5', border: 'none' }}>
                  <Space direction="vertical" size="small" style={{ width: '100%' }}>
                    <Title level={5} style={{ margin: 0 }}>Quick Response Guarantee</Title>
                    <Paragraph style={{ margin: '8px 0 0', color: '#666' }}>
                      We pride ourselves on quick response times. All inquiries submitted through
                      our contact form are answered within 24 hours on business days.
                    </Paragraph>
                  </Space>
                </Card>
              </Space>
            </Col>
          </Row>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <Card>
            <div style={{
              height: 400,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}>
              <Space direction="vertical" align="center">
                <EnvironmentOutlined style={{ fontSize: 64, color: 'white' }} />
                <Title level={3} style={{ color: 'white', margin: 0 }}>
                  Location Map
                </Title>
                <Text style={{ color: 'white' }}>123 Business District, Lahore, Pakistan</Text>
              </Space>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
