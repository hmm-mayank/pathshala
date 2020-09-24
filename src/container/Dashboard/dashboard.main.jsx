import React from 'react';
import { Layout, Menu, Row, Col, Card, Input, Avatar, Badge, List } from "antd";
import {
    BarChartOutlined,
    ShopOutlined,
    UserOutlined,
    BellFilled
} from '@ant-design/icons';

const sylbi = [
    { subject: "Mathematics", type: "Practical", completeStatus: "78", color: "red" },
    { subject: "Biology", type: "Theory", completeStatus: "71", color: "green" },
    { subject: "Chemistry", type: "Practical", completeStatus: "54", color: "blue" },
    { subject: "Computer", type: "Theory", completeStatus: "45", color: "pink" },
    { subject: "Set Theory", type: "Practical", completeStatus: "56", color: "violet" },
    { subject: "Automata", type: "Theory", completeStatus: "0", color: "yellow" },
    { subject: "English", type: "Practical", completeStatus: "10", color: "black" },
]

const reminders = [
    { subject: "Mathematics", type: "Practical", completeStatus: "78", color: "red" },
    { subject: "Chemistry", type: "Practical", completeStatus: "54", color: "green" },
    { subject: "Set Theory", type: "Practical", completeStatus: "56", color: "orange" },
    { subject: "Automata", type: "Theory", completeStatus: "0", color: "red" },
    { subject: "English", type: "Practical", completeStatus: "10", color: "yellow" },
]

const { Content, Sider } = Layout;
const { Search } = Input;
const Dashboard = () => {
    return (
        <React.Fragment>
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>Dashboard</Menu.Item>
                        <Menu.Item key="2" icon={<ShopOutlined />}>Courses</Menu.Item>
                        <Menu.Item key="3" icon={<BarChartOutlined />}>Result</Menu.Item>

                    </Menu>
                </Sider>
            
                <Content style={{marginLeft:"220px", overflow: 'initial', height: "100vh" }}>
                    <Row>
                        <Col span={18} style={{ marginTop: "20px" }}>
                            <Row>
                                <Col md={12}><h1 className="bold-font big-font">Dashboard</h1></Col>
                                <Col lg={8}><Search size="large" placeholder={"Search"} type={"text"} key={"Serach Box"} name={"Serach_Box"} className="round shade" /></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} >
                            <Card className="round shade" style={{ paddingLeft: "5vh" }} >
                                <Row>
                                    <Col span={18}>
                                        <div>
                                            <span className="medium-font bold-font">
                                                <p>Welcome Back,<b className="user-font-color"> Mayank !</b>
                                                </p>
                                            </span>
                                            <div className="small-font bold-font">You have completed <b className="highlight-font">80% </b>of your goal this week.</div>
                                            <div className="small-font bold-font">Start a <b className="highlight-font">new goal</b> keep going and improve your result.</div>
                                        </div>
                                    </Col>
                                    <Col span={4}>
                                        <img src="/assets/education.png" alt="education" width="200px" height="200px" />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                    </Row>
                </Content>
                <Sider width="40vh" style={{background:"white"}}>
                <Card className="round shade" style={{ right: 0,height:"10vh" }}>
                                <Row justify="end">
                                    <Col span="7">
                                        <Badge count={5} size="small">
                                            <Avatar shape="square" style={{ backgroundColor: '#87d068' }} icon={<BellFilled />} />
                                        </Badge>
                                    </Col>
                                    <Col span="14">
                                        <div className="group-user-detail">
                                            <span className="user-name-font">
                                                Mayank Dwivedi<br />
                                                <p className="user-email-font">+91 9936142128</p>
                                            </span>

                                        </div>

                                    </Col>
                                    <Col span="3">
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" shape="square" size="large" icon={<UserOutlined />} />
                                    </Col>
                                </Row>
                            </Card>
                    <Card className="shade" style={{ overflow: "scroll", height: "44vh", marginBottom: 10 }} >
                        <div>
                            <span className="medium-font"><b>Syllabus</b></span>
                        </div>
                        <div>
                            <List>
                                {
                                    sylbi.map(e => {
                                        return <List.Item actions={[<p key="list-loadmore-edit">{e.completeStatus !== 0 && e.completeStatus + "%"}</p>, <p key="list-loadmore-more">{e.completeStatus !== 0 ? "Completed" : "Start Course"}</p>]}>
                                            <List.Item.Meta avatar={
                                                <Avatar style={{ color: "whitesmoke", backgroundColor: "black" }}>{e.subject[0]}</Avatar>
                                            }
                                                title={<a href="https://ant.design">{e.subject}</a>}
                                                description={e.type}></List.Item.Meta>
                                        </List.Item>
                                    })
                                }
                            </List>
                        </div>
                    </Card>
                    <Card className="shade" style={{ overflow: "scroll", height: "44vh", marginBottom: 10 }} >
                        <div>
                            <span className="medium-font"><b>Reminders</b></span>
                        </div>
                        <div >
                            <List >
                                {
                                    reminders.map(e => {
                                        return <List.Item >
                                            <List.Item.Meta avatar={
                                                <Avatar style={{ color: "whitesmoke", backgroundColor: "black" }}>{e.subject[0]}</Avatar>
                                            }
                                                title={<a href="https://ant.design">{e.subject}</a>}
                                                description={e.type}></List.Item.Meta>
                                        </List.Item>
                                    })
                                }
                            </List>
                        </div>
                    </Card>

                </Sider>
           </Layout>
        </React.Fragment>
    )
}
export default Dashboard;