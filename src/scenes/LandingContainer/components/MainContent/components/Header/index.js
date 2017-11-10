import React from 'react';
import NavigationButton from 'components/NavigationButton';
//import SearchBar from './components/SearchBar';
import Button from 'components/Button';
import Profile from './components/Profile';
//import Menu from './components/Menu';

import './style.css';

class Header extends React.Component{

    render(){
        const matchPath=this.props.pathname;
        return(
          <div className="ui padded grid header">
          <div className="column">
          <NavigationButton icon="large angle left icon"></NavigationButton>
          </div>
          <div className="column">
          <NavigationButton icon="large angle right icon"></NavigationButton>
          </div>
          <div className="four wide column">
          <div className="ui fluid search">
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search"
              value="Search"
              onChange=""
            />
            <i className="search icon" />
          </div>
          </div>
          </div>
          <div className="three wide column"></div>
          <div className="two wide column">
          <Button btnStyle="header__btn--upgrade">upgrade</Button>
          </div>
          <div className="three wide column">
          <Profile></Profile>
          </div>
          <div className="column">
          <i className="large down angle icon"></i>
          </div>
          </div>
        )
    }
}

export default Header