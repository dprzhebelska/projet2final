import React from "react";
import { Image } from 'antd';
import { Layout } from 'antd';
import { Button, Space, Typography } from 'antd'
import { Link } from "react-router-dom";
import './style2.css';


const { Content } = Layout;

function Home(props) {
    return (
        <Layout>
            <div className="background">
            <Content style={{ height: '1000px' }}>
                    <Space direction="vertical" align="center" style={{ marginTop: '300px', width: '100%', zIndex: '1000' }}>
                        <Typography.Title level={1} style={{ color:"#fff", fontSize: "100px"}}>{props.lang ? "Everything Classical" : "Tout Classique"}</Typography.Title>
                        <Typography.Paragraph style={{ color:"#fff", fontSize: "20px" }}>{props.lang ? "Where musicians can find resources and talk to other musicians about classical music" : "Une place pour les musiciens de trouver ceux qu'ils veulent de sujet de musique classique"}</Typography.Paragraph>
                        <Button ghost style={{ color:"#fff", fontSize: "30px", height:"60px" }} ><Link to="/Search">{props.lang ? "Find a Piece" : "Trouver un morceau"}</Link></Button>
                        
                    </Space>
            </Content>
            </div>
        </Layout>
    );
}

export default Home