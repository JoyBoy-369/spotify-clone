import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './style.css';

class NavigationButton extends React.Component{
    state={
        path:""
    }

    clickHandle=(evt)=>{
        evt.preventDefault();
        console.log("hello");
        this.props.clickHandle(); 
    }

    render(){
        return(
            <Link to={this.state.path}>
            <button className="ui button navigation__btn" onClick={this.clickHandle}>
            <i className={`${this.props.icon}`}></i>
            </button>
            </Link>
        )
    }
}
NavigationButton.propTypes = {
    icon:PropTypes.string.isRequired,
    pathname:PropTypes.string,
    routing:PropTypes.object
  };

export default NavigationButton