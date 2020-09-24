import React from 'react';
import { Row, Col, Button, Input,Form } from 'antd';
const InputForm = (props) => {
    let elements = props.props;
    let lastElement = elements[elements.length - 1];
    return (
        <div className="register-form">
            <div className="input-form">
                <p className="heading-text">{props.title}</p>
                <Row>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={props.submitUser}
                        onFinishFailed={console.log("onFinishFailed")}
                    >
                    {elements.map((e, count) => {
                        return !(props.props.length === count + 1) && <Col span={24} className="box-space">
                            <Form.Item 
                                name={e.name}
                                rules={[{ required: true, message: `${e.error}!` }]}>
                                <Input placeholder={e.placeholder} type={e.type} key={e.key} disabled={e.disabled} name={e.name} className="round-input"  />
                            </Form.Item>
                        </Col>
                    })}
                    <Col span={24} className="box-space">
                    <Form.Item>
                        <Button danger name={lastElement.name} key={lastElement.key}  htmlType="submit" className="btn-full-width round">{lastElement.text}</Button>
                    </Form.Item>
                    </Col>
                    </Form>
                </Row>
            </div>
        </div>
    )

}
export default InputForm;