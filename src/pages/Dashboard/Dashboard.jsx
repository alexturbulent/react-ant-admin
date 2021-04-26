import React from 'react';
import { Layout } from 'antd';

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import "./dashboard.scss";

const { Content } = Layout;

class Dashboard extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { collapsed } = this.state;

        return (
            <Layout>
                <Sidebar collapsed={collapsed} />

                <Layout className="site-layout">
                    <Header collapsed={collapsed} toggle={this.toggle} />

                    <Content className="site-layout-background">
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Dashboard;