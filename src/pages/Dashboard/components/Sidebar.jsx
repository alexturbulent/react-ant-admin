import React from 'react';
import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    BarChartOutlined,
    MailOutlined,
    UserOutlined,
    BarcodeOutlined,
    WechatOutlined,
    ContainerOutlined,
    CalendarOutlined,
    SettingOutlined,
    InfoCircleOutlined,
} from '@ant-design/icons';

import { projectName } from "../../../constants";

import "../dashboard.scss";

const { Sider } = Layout;

const menu = [
    {
        label: "Home",
        icon: <HomeOutlined className="sidebar-icon" />,
        link: '/'
    },
    {
        label: "Dashboard",
        icon: <BarChartOutlined className="sidebar-icon" />,
        link: '/'
    },
    {
        label: "Inbox",
        icon: <MailOutlined className="sidebar-icon" />,
        link: '/'
    },
    {
        label: "Products",
        icon: <BarcodeOutlined className="sidebar-icon" />,
        link: '/'
    },
    {
        label: "Invoices",
        icon: <ContainerOutlined className="sidebar-icon" />,
        link: '/'
    },
    {
        label: "Customers",
        icon: <UserOutlined className="sidebar-icon" />,
        link: '/'
    },
    {
        label: "Chat rooms",
        icon: <WechatOutlined className="sidebar-icon" />,
        link: '/'
    },
    {
        label: "Calendar",
        icon: <CalendarOutlined className="sidebar-icon" />,
        link: '/'
    },
    {
        label: "Help center",
        icon: <InfoCircleOutlined className="sidebar-icon" />,
        link: '/'
    },
    {
        label: "Settings",
        icon: <SettingOutlined className="sidebar-icon" />,
        link: '/'
    },
]

const Sidebar = ({ collapsed }) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">
                {collapsed ? '' : projectName}
            </div>

            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                {
                    menu.map((item, index) => (
                        <Menu.Item key={index} icon={item.icon}>
                            {item.label}
                        </Menu.Item>
                    ))
                }
            </Menu>
        </Sider>
    );
}

export default Sidebar;