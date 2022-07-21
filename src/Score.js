import React from "react";
import { Rate, Card } from 'antd';
import YoutubeEmbed from "./YoutubeEmbed";
import Icon, { StarFilled,DownloadOutlined, YoutubeFilled } from '@ant-design/icons';


function Score(props) {

    return (
        <div>
            <Card
                title= {props.publisher}
                extra={<span><a href={require("./assets/example.pdf")}><DownloadOutlined style={{fontSize:"20px"}}/></a>&nbsp;&nbsp;&nbsp;<Rate allowHalf defaultValue={Math.floor(Math.random()*5)} /></span>}
            >
                <p>Editor: {props.editor}</p>
                <p>Year: {props.date} </p>
                <p>urtext: {props.urtext} </p>
            </Card>
        </div>
    )
}

export default Score