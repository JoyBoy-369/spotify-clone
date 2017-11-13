import React from 'react';
import NavigationButton from 'components/NavigationButton';
import SearchBar from './components/SearchBar';
import Button from 'components/Button';
import Profile from './components/Profile';
import Menu from './components/Menu';

import './style.css';

class Header extends React.Component{

    render(){
        const { match, location, history } = this.props.paths;
        console.log(match,location,history);

        return(
          <div className="ui padded middle aligned grid">
          <div className="two wide left aligned column">
          <NavigationButton icon="big angle left icon navigation__icon" clickHandle={history.goBack}></NavigationButton>
          <NavigationButton icon="big angle right icon navigation__icon" clickHandle={history.goForward}></NavigationButton>
          </div>
          <div className="four wide column">
          <SearchBar></SearchBar>
          </div>
          <div className="three wide column"></div>
          <div className="three wide column">
          <Button btnStyle="tiny btn header__btn--upgrade">upgrade</Button>
          </div>
          <div className="three wide column">
          <Profile></Profile>
          </div>
          <div className="column">
            <Menu icon="big down angle icon "></Menu>
          </div>
          </div>
        )
    }
}

export default Header