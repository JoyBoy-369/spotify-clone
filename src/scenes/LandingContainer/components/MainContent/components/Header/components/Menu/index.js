import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'components/Button';

class Menu extends React.Component{

    render(){
        return(
            <button class="circular ui  basic icon button">
            <i class={`${this.props.icon}`}></i>
            </button>
        )
    }
}

export default Menu