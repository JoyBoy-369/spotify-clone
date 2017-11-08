import React from 'react';
import Header from './components/Header';
import Content from './components/Content';

import './style.css';

class MainContent extends React.Component{

    render(){
        return(
        <section className="main-content">
        <Header></Header>
        <Content></Content>
        </section>
        )
    }

}

export default MainContent