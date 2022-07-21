// import React from "react";
import Collapsible from "react-collapsible";
import Filters from "./Filters";
import Piece from "./Piece";
import 'antd/dist/antd.css';
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import piece from "./data/pieces.json";

import { Layout, Space } from 'antd';
import { useEffect } from "react";
const { Header, Sider, Content } = Layout;

const Search = (props) => {

    
    var tmp = [];
    piece.map((p, key) => tmp.push(p.id));
    
    const [toPost, setToPost] = useState (tmp);
    
    const reload = () => {
        console.log(piece);
        var tmp = [];
        piece.map((p, key) => tmp.push(p.id));
        setToPost(tmp);
    }


    const addCompFilter = (comp) => {
        console.log(comp);
        if (comp.length === 0){
            reload()
        } else if(comp) {
            var tmp = [];
            piece.filter((p, key) => (comp.includes(p.composer))).map (
                f => tmp.push(f.id)
            );
            setToPost([...tmp])
        } 
    }

    const addEraFilter = (era) => {
        if (era.length === 0){
            reload()
        } else if(era) {
            var tmp = [];
            piece.filter((p, key) => (era.includes(p.era))).map (
                f => tmp.push(f.id)
            );
            setToPost([...tmp])
        } 
    }

    const addInstFilter = (inst) => {

        if (inst.length === 0){
            reload()
        } else if(inst) {
            var tmp = [];
            piece.filter((p, key) => (inst.includes(p.instrument))).map (
                f => tmp.push(f.id)
            );
            setToPost([...tmp]) 
        }
    }

    const addrcmFilter = (l) => {

        if (l.length === 0){
            reload()
        } else if(l) {
            var tmp = [];
            piece.filter((p, key) => (l.includes(p.rcm))).map (
                f => tmp.push(f.id)
            );
            setToPost([...tmp]) 
        }
    }

    const addabrsmFilter = (l) => {

        if (l.length === 0){
            reload()
        } else if(l) {
            var tmp = [];
            piece.filter((p, key) => (l.includes(p.abrsm))).map (
                f => tmp.push(f.id)
            );
            setToPost([...tmp]) 
        }
    }

    const addhenFilter = (l) => {

        if (l.length === 0){
            reload()
        } else if(l) {
            var tmp = [];
            piece.filter((p, key) => (l.includes(p.henle))).map (
                f => tmp.push(f.id)
            );
            setToPost([...tmp]) 
        }
    }





        return (
            <Layout style={{height:"1000px"}}>
                <Sider width={250}><Filters lang={props.lang} addCompF={addCompFilter} addEraF={addEraFilter} addInstF = {addInstFilter} addRF = {addrcmFilter} addAF = {addabrsmFilter} addHF={addhenFilter}/></Sider>

            <Content>
                <Space direction="vertical" size="middle" style={{ marginLeft: '100px', marginRight: '100px', marginTop: '100px', display: 'flex' }}>
                    {toPost.map(id => (
                        <Link to="/Overview" state={{id: {id}}}><Piece id={id} /></Link>
                    ))}
                    {/* {toPost} */}
                    {/* <Link to="/projet2/Overview">
                    <Piece id="A2"/></Link>
                    <Piece id="A1"/>
                    <Piece id="A3"/> */}
                </Space>
            </Content>

            </Layout>
        );
}

export default Search