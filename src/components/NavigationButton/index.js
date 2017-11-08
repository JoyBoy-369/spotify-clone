import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'components/Button';

class NavigationButton extends React.Component{

    render(){
        return(
            <Link to="/login">
            <Button btnStyle={`navigation__btn navigation__btn--${this.props.btnModifier}`}></Button>
            </Link>
        )
    }
}

export default NavigationButton