import React from "react";
import Recording from "./Recording"
import { Form, Input, Collapse, Space, Typography, Button, Descriptions} from 'antd';
import YoutubeEmbed from "./YoutubeEmbed";
import Score from "./Score";
import SampleComment from "./Comment";
import piece from "./data/pieces.json";
import { useLocation } from "react-router-dom";

const onRecClick = () => {
    document.getElementById("youtube").innerHTML = '<YoutubeEmbed />'
}

function Overview(props) {
    const loc = useLocation();
    const {id} = loc.state;

    const onChange = (key) => {
        console.log(key);
      };

    var name, composer, h, r, a, rating;
    // var pieces = require("./data/pieces.json");
    piece.map((data, key) => {
        if (data.id === id) {
            name = data.name;
            composer = data.composer;;
            h = data.henle;
            r = data.rcm;
            a = data.abrsm;
            rating = data.rating.reduce((a,b)=> a+b,0)/data.rating.length;
        }
    })

    console.log(name);


    const {Panel} = Collapse;
    const { TextArea } = Input;

    const text1 = `The sonatas and partitas for solo violin (BWV 1001–1006) are a set of six works composed by Johann Sebastian Bach. They are sometimes referred to in English as the sonatas and partias for solo violin in accordance with Bach's headings in the autograph manuscript: "Partia" (plural "Partien") was commonly used in German-speaking regions during Bach's time, whereas the Italian "partita" was introduced to this set in the 1879 Bach Gesellschaft edition, having become standard by that time. The set consists of three sonatas da chiesa in four movements and three partitas (or partias) in dance-form movements. The 2nd Partita is widely known for its Chaconne, considered one of the most masterly and expressive works ever written for solo violin...`

    const text2 = 'The sonatas each consist of four movements, in the typical slow-fast-slow-fast pattern of the sonata da chiesa. The first two movements of each sonata are a prelude and a fugue. The third (slow) movement is lyrical, while the final movement shares the similar musical structure as a typical binary suite movement. Unlike the sonatas, the partitas are of more unorthodox design. Although still making use of the usual baroque style of allemande, courante, sarabande, and gigue, with some omissions and the addition of galanteries, new elements were introduced into each partita to provide variety. '
    return (
        <div>
            <Space direction="vertical" align="center" style={{ marginTop: '70px', width: '100%', zIndex: '1000' }}>
                <Typography.Title level={1}>{name}</Typography.Title>
                <Typography.Paragraph style={{ fontSize: "20px" }}></Typography.Paragraph>
            {/* <Space direction="horzontal" style={{marginLeft:'100px'}}> */}

                <Descriptions style={{width:'600px', marginRight:'50px'}}>
                    <Descriptions.Item label="Composer" span={2}>Johann Sebastian Bach</Descriptions.Item>
                    <Descriptions.Item label="Muscial Era" span={2}>Baroque</Descriptions.Item>
                    <Descriptions.Item label="Music Type" span={2}>Sonata</Descriptions.Item>
                    <Descriptions.Item label="Instrumentation" span={2}>Solo Violin</Descriptions.Item>
                    <Descriptions.Item label="Tempo" span={2}>Presto (138bpm)</Descriptions.Item>  
                </Descriptions>
                <Descriptions title="Difficulty" bordered style={{width:'300px', marginBottom:'100px'}}>
                    <Descriptions.Item label="RCM" span={3}>ARCT</Descriptions.Item>
                    <Descriptions.Item label="Henle" span={3}>7</Descriptions.Item>
                    <Descriptions.Item label="ABRSM" span={3}>ABRSMDip/LRSM</Descriptions.Item>
                </Descriptions>
            {/* </Space> */}

            </Space>

            <Collapse defaultActiveKey={['1']} onChange={onChange} style={{marginLeft:'100px', marginBottom:'100px', marginRight:'100px'}}>
                <Panel header="Description" key="1">
                    <p>{text1}</p>
                </Panel>
                <Panel header="Theoretical analysis" key="2">
                    <p>{text2}</p>
                </Panel>
                <Panel header="Recordings" key="3">
                    <Space direction="vertical" size="middle" style={{ marginBotton: '50px', display: 'flex' }}>
                        <Recording name="Grumiaux" date="1956" onClick={onRecClick}/>
                        <Recording name="Menuhin" date="1974" />
                        <Recording name="Hilary Hahn" date="2018" />
                    </Space>

                    {/* <div id="youtube"></div> */}

                    <YoutubeEmbed  />
                </Panel>
                <Panel header="Scores" key="4">
                <Space direction="vertical" size="middle" style={{ marginBotton: '50px', display: 'flex' }}>
                        <Score publisher="Bach-Gesellschaft Ausgabe" editor= "Alfred Dörffel" date="1879" urtext="no"/>
                        <Score publisher="London: Joseph Williams" editor= "Hans Wessely" date="1923" urtext="no"/>
                        <Score publisher="Neue Bach-Ausgabe" editor= " 	Günter Haußwald" date="1908-1974" urtext="yes"/>

                    </Space>
                </Panel>
            </Collapse>

            <Space direction="vertical" style={{ marginLeft:'15%', marginRight:'15%', marginBottom: '100px', width: '70%', zIndex: '1000' }}>

                <SampleComment> 
                    <SampleComment />
                </SampleComment>
                <SampleComment />

                <Form.Item style={{display: 'flex',}}>
                    <TextArea value="Leave comment..." />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">
                        Add Comment
                    </Button>
                </Form.Item>
            </Space>
        </div>
    );
}

export default Overview

