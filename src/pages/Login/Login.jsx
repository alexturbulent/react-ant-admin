import React from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';

import { projectName } from "../../constants";
import "./login.scss";

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <Row align="middle" className="login-wrapper">
            <Col sm={24} md={12} lg={12} className="left"></Col>

            <Col sm={24} md={12} lg={12} className="right">
                <Row align="middle" justify="center" className="form-row" >
                    <Col xs={23} sm={20} md={20} xl={12}>
                        <div className="heading-box">
                            <h2>{projectName}</h2>
                            <p>Welcome back! Please login to your account.</p>
                        </div>

                        <Form
                            name="basic"
                            className="form"
                            initialValues={{
                                remember: true,
                            }}
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input placeholder="Username" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password placeholder="Password" />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Login;