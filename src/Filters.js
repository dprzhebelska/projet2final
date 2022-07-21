import React, { useState } from 'react';
import { Menu, Layout, Radio, Space, Checkbox } from 'antd';
import './App.css';
import composers from "./data/composers.json";
import eras from "./data/eras.json";
import insts from "./data/instruments.json";



const {Sider} = Layout;

function Filters({lang, addCompF, addEraF, addInstF, addRF, addAF, addHF}) {
    const [collapsed, setCollapsed] = useState(false);

    var compOptions = []

    composers.map((comp) =>
        compOptions.push(
            {label: comp.name, value: comp.name}
        )
    );

    var erOptions = []

    eras.map((era) =>
        erOptions.push(
            {label: era.name, value: era.name}
        )
    );

    var keyOptions = []

    insts.filter((inst) => inst.type === "keyboard").map((inst) =>
        keyOptions.push(
            {label: inst.name, value: inst.name}
        )
    );

    var windOptions = []

    insts.filter((inst) => inst.type === "wind").map((inst) =>
        windOptions.push(
            {label: inst.name, value: inst.name}
        )
    );

    var strOptions = []

    insts.filter((inst) => inst.type === "string").map((inst) =>
        strOptions.push(
            {label: inst.name, value: inst.name}
        )
    );

    var orchOptions = []

    insts.filter((inst) => inst.type === "orchestra").map((inst) =>
        orchOptions.push(
            {label: inst.name, value: inst.name}
        )
    );

    var hOptions = [{label:1, value:1}, 
                    {label:2, value:2}, 
                    {label:3, value:3}, 
                    
                    {label:4, value:4}, 
                    {label:5, value:5}, 
                    {label:6, value:6}, 
                    
                    {label:7, value:7}, 
                    {label:8, value:8}, 
                    {label:9, value:9}];

    var rOptions = [{label:1, value:1}, 
        {label:2, value:2}, 
        {label:3, value:3}, 
        
        {label:4, value:4}, 
        {label:5, value:5}, 
        {label:6, value:6}, 
        
        {label:7, value:7}, 
        {label:8, value:8}, 
        {label:9, value:9},
        {label:10, value:10},
        {label:"DIP", value:"DIP"},
    ]

    var aOptions = [{label:1, value:1}, 
        {label:2, value:2}, 
        {label:3, value:3}, 
        
        {label:4, value:4}, 
        {label:5, value:5}, 
        {label:6, value:6}, 
        
        {label:7, value:7}, 
        {label:8, value:8}, 
        {label:"DIP", value:"DIP"},
    ]

    return (
        <div>
            <Layout>

                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu

                        mode="inline"
                        style={{
                            height: '100%', 
                            width: '250px',                       
                          }}
                        
                    > 

                    
                        <Menu.SubMenu key="1" title={lang ? "Sort by" : "Trier par"}>
                            <Radio.Group style = {{marginLeft: '45px'}}>
                                <Space direction="vertical">
                                    <Radio value={1}>Popularity</Radio>
                                    <Radio value={2}>Difficulty</Radio>
                                    <Radio value={3}>Publication date</Radio>
                                </Space>
                            </Radio.Group>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="2" title={lang ? "Composer" : "Compositeur"}>
                            <Checkbox.Group options = {compOptions} style = {{marginLeft: '45px'}} onChange = {addCompF}>
                            </Checkbox.Group>
                        </Menu.SubMenu>

                        <Menu.SubMenu key="6" title={lang ? "Musical Era" : "Epoque Musicale"}>
                            <Checkbox.Group options = {erOptions} style = {{marginLeft: '45px', paddingRight: '20px'}} onChange = {addEraF}>
                            </Checkbox.Group>
                        </Menu.SubMenu>

                        <Menu.SubMenu key="8" title="Instrumentation">
                            <Menu.SubMenu key="7" title={lang ? "Keyboard instruments" : "Instruments de clavier"}>
                                <Checkbox.Group options = {keyOptions} style = {{marginLeft: '80px', paddingRight: '20px'}} onChange = {addInstF}>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="9" title={lang ? "String instruments" : "Instrument de corde"}>
                                <Checkbox.Group options = {strOptions} style = {{marginLeft: '80px', paddingRight: '40px'}} onChange = {addInstF}>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="10" title={lang ? "Wind instruments" : "Instrument de vent"}>
                                <Checkbox.Group options = {windOptions} style = {{marginLeft: '80px', paddingRight: '4s0px'}} onChange = {addInstF}>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="11" title={lang ? "Orchestral works" : "Orchestra"}>
                                <Checkbox.Group options = {orchOptions} style = {{marginLeft: '80px', paddingRight: '20px'}} onChange = {addInstF}>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                        </Menu.SubMenu>

                        <Menu.SubMenu key="12" title={lang ? "Level" : "Niveau"}>
                            <Menu.SubMenu key="13" title="RCM">
                                <Checkbox.Group options={rOptions} style = {{marginLeft: '80px', paddingRight: "80px"}} onChange = {addRF}>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="14" title="ABRSM">
                                <Checkbox.Group options={aOptions} style = {{marginLeft: '80px', paddingRight: "80px"}} onChange = {addAF}>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="15" title="Henle">
                                <Checkbox.Group options={hOptions} style = {{marginLeft: '80px', paddingRight: "90px"}} onChange = {addHF}>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="16" title={lang ? "Nationality" : "Nationalite"}>
                            <Menu.SubMenu key="3" title="A">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={1}>American</Checkbox>
                                        <Checkbox value={1}>Austrian</Checkbox>

                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="4" title="G">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={1}>German</Checkbox>
                                        <Checkbox value={3}>Greek</Checkbox>
                                        <Checkbox value={2}>Georgian</Checkbox>
                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="5" title="R">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={1}>Russian</Checkbox>
                                        <Checkbox value={2}>Romanian</Checkbox>
                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>

                        </Menu.SubMenu>
                    </Menu>
                </Sider>

            {/* <Radio.Group>
                <Space direction="vertical">
                    <Radio value={1}>Popularity</Radio>
                    <Radio value={2}>Option B</Radio>
                    <Radio value={3}>Option C</Radio>
                </Space>
            </Radio.Group>

            <Collapsible trigger="Composers">
                <ul>
                    Types of search
                    <li><input type="radio" value="Popularity" name="sort"/>Popularity</li>
                    <li><input type="radio" value="Difficulty" name="sort"/>Difficulty</li>
                    <li><input type="radio" value="Publication date" name="sort"/>Publication date</li>
                </ul>
            </Collapsible>

            <Collapsible trigger="Musical Era">
                <ul>
                    Types of search
                    <li><input type="radio" value="Popularity" name="sort"/>Popularity</li>
                    <li><input type="radio" value="Difficulty" name="sort"/>Difficulty</li>
                    <li><input type="radio" value="Publication date" name="sort"/>Publication date</li>
                </ul>
            </Collapsible>
            <Collapsible trigger="Instrumentation">
                <ul>
                    Types of search
                    <li><input type="radio" value="Popularity" name="sort"/>Popularity</li>
                    <li><input type="radio" value="Difficulty" name="sort"/>Difficulty</li>
                    <li><input type="radio" value="Publication date" name="sort"/>Publication date</li>
                </ul>
            </Collapsible>
            <Collapsible trigger="Level">
                <ul>
                    Types of search
                    <li><input type="radio" value="Popularity" name="sort"/>Popularity</li>
                    <li><input type="radio" value="Difficulty" name="sort"/>Difficulty</li>
                    <li><input type="radio" value="Publication date" name="sort"/>Publication date</li>
                </ul>
            </Collapsible>
            <Collapsible trigger="Nationality">
                <ul>
                    Types of search
                    <li><input type="radio" value="Popularity" name="sort"/>Popularity</li>
                    <li><input type="radio" value="Difficulty" name="sort"/>Difficulty</li>
                    <li><input type="radio" value="Publication date" name="sort"/>Publication date</li>
                </ul>
            </Collapsible> */}

            </Layout>

        </div>
    );
}

export default Filters