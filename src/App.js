import React, { useEffect, useState } from 'react';
import './App.css';
import './style2.css';
import 'antd/dist/antd.less';
import './styles.less';

import Search from './Search';
import Nav from './Nav';
import {Routes, Route, Link} from 'react-router-dom'
import Overview from './Overview';
import Home from './Home';
import Articles from './Articles';
import Help from './Help';
import Contact from './Contact';

import 'antd/dist/antd.css';

import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;


const App = () => {
  
  
  const [isEng, setIsEng] = useState(true);
  const toggleLanguage = () => {
        setIsEng(isEng => !isEng);
    }


  return (
    <div className='App'>
      <Nav lang={isEng} click={toggleLanguage}/>
      <Routes>
        <Route exact path="/" element={<Home lang={isEng}/>} />
        <Route exact path="/Search" element={<Search lang={isEng}/>} />
        <Route exact path="/Overview" element={<Overview lang={isEng}/>} />
        <Route exact path="/Articles" element={<Articles lang={isEng}/>} />
        <Route exact path="/Help" element={<Help lang={isEng}/>} />
        <Route exact path="/Contact" element={<Contact lang={isEng}/>} />
      
      </Routes>
    </div>
  );
}

export default App;
