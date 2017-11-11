import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

class NavigationButton extends React.Component{

    render(){
        return(
            <Link to="/login">
            <button class="ui button navigation__btn">
            <i class={`${this.props.icon}`}></i>
            </button>
            </Link>
        )
    }
}

export default NavigationButton