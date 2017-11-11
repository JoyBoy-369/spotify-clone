import React from 'react';

import './style.css';

class SearchBar extends React.Component{

    render(){
        return(
            <div className="ui fluid search">
            <div className="ui left icon mini input">
            <i className="search icon" />
              <input
                className="prompt search-bar"
                type="text"
                placeholder="Search"
                value="Search"
                onChange=""
              />
            </div>
            </div>
        )
    }
}

export default SearchBar