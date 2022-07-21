import React from "react";
import { Card, Rate } from 'antd';
import YoutubeEmbed from "./YoutubeEmbed";
import Icon, { StarFilled, YoutubeFilled } from '@ant-design/icons';


function Recording(props) {

    

    var rating = "<span>";

    for (var i=0; i<parseInt(props.rating); i++) {
        rating += "<StarFilled />";
    }

    rating += "</span>"

    return (
        <div>
            <Card
                title= {props.name}
                extra={<span><Rate allowHalf defaultValue={Math.floor(Math.random()*5)} /></span>}
                // style={{
                //     width: 100%,
                // }}
            >
                <div>
                    <p>Year: {props.date}</p>
                    <YoutubeFilled style={{fontSize:'40px', position:"absolute", right:"10px", top:"60%"}} />
                </div>
            </Card>
        </div>
    )
}

export default Recording