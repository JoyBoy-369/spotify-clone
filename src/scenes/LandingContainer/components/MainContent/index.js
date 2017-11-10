import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';

import './style.css';

class MainContent extends React.Component{

    render(){
        const matchPath=this.props.pathname;
        return(
        <section>
        <Header pathname={matchPath}></Header>
        <Route path={`${matchPath}/browse`} component={Content}></Route>
        <Route path={`${matchPath}/radio`} ></Route>
        <Route path={`${matchPath}/:libraryItem`} ></Route>
        <Route path={`${matchPath}/:playlistItem`} ></Route>
        <Route path={`${matchPath}/:search`} ></Route>
        </section>
        )
    }

}

export default MainContent