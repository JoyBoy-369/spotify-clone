import React from 'react';
import NavigationButton from 'components/NavigationButton';
//import SearchBar from './components/SearchBar';
import Button from 'components/Button';
//import Profile from './components/Profile';
//import Menu from './components/Menu';

import './style.css';

class Header extends React.Component{

    render(){
        return(
            <header>
            <ul className="main-nav">
            <li><NavigationButton btnModifier="back"></NavigationButton></li>
            <li><NavigationButton btnModifier="forward"></NavigationButton></li>
            <li><Button btnStyle="header__btn--upgrade">upgrade</Button></li>
            </ul>
            </header>
        )
    }
}

export default Header