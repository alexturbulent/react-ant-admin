import React from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import { projectName } from "../../../constants";

import "../dashboard.scss";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">
                {collapsed ? '' : projectName}
            </div>

            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    nav 1
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default Sidebar;