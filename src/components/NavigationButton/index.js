import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'components/Button';

class NavigationButton extends React.Component{

    render(){
        return(
            <Link to="/login">
            <button class="circular ui  basic icon button">
            <i class={`${this.props.icon}`}></i>
            </button>
            </Link>
        )
    }
}

export default NavigationButton