import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';

import './style.css';

class MainContent extends React.Component{

    render(){
        const {match,location,history}=this.props.paths;
        return(
        <section>
        <Header paths={{match,location,history}}></Header>
        <Switch>
        <Route path={`${match}/browse`} component={Content}></Route>
        <Route path={`${match}/radio`} ></Route>
        <Route path={`${match}/:libraryItem`} ></Route>
        <Route path={`${match}/:playlistItem`} ></Route>
        <Route path={`${match}/:search`} ></Route>
        </Switch>
        </section>
        )
    }

}

export default MainContent