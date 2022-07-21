import React from "react";
import { Layout, Menu, Space, Typography } from "antd";
import Icon, { UserOutlined } from '@ant-design/icons';

import { Link } from "react-router-dom";
import './style2.css';


const {Header} = Layout;

function Nav(props) {

    // console.log(props.lang);
    var l = props.lang ? "en" : "fr";

    console.log(l);
    
    return (
        <Layout >
            <Header>
                <Menu theme="dark" mode="horizontal" style={{position: 'fixed', left: '20px', width:'100%', zIndex:"1000"}}>
                    <Menu.Item><Link to="/">{props.lang ? "Home" : "Accueil"}</Link></Menu.Item>
                    <Menu.Item><Link to="/Search">{props.lang ? "Search" : "Recherche"}</Link></Menu.Item>
                    <Menu.Item><Link to="/Articles">{props.lang ? "Articles" : "Articles"}</Link></Menu.Item>
                    <Menu.Item><Link to="/Help">{props.lang ? "Help" : "Aide"}</Link></Menu.Item>
                    <Menu.Item><Link to="/Contact">{props.lang ? "Contact Us" : "Contacter"}</Link></Menu.Item>
                </Menu>
            </Header>
            <Header style = {{position: 'fixed', right: '90px', zIndex:"1000"}}>
                <Typography.Paragraph idname="lang" onClick={props.click} style={{color: 'white', cursor:'pointer'}}>{props.lang ? "en" : "fr"}</Typography.Paragraph>
            </Header>
            <Header style = {{position: 'fixed', right: '15px', zIndex:"1000"}}>
                <UserOutlined style={{color: 'grey', fontSize: "20px"}}/>
            </Header>
        </Layout>
    );
}

export default Nav