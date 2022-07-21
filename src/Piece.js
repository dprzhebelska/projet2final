import React from "react";
import { Card, Rate } from 'antd';
import Icon, { ConsoleSqlOutlined, StarFilled } from '@ant-design/icons';
import piece from "./data/pieces.json";


function Piece(props) {

    var id = props.id;
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

    var difficulty = "Henle " + h + "/RCM " + r + "/ABRSM " + a;


    return (
        <div>
            <Card
                title= {name}
                extra={<span><Rate allowHalf disabled defaultValue={rating} /></span>}
                // style={{
                //     width: 100%,
                // }}
            >
                <p>Composer: {composer}</p>
                <p>Difficulty: {difficulty}</p>
            </Card>
        </div>
    )
}

export default Piece