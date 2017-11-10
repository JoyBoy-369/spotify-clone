import React from 'react';
import {NavLink} from 'react-router-dom';
import Library from './components/LibrarySection';
import PlayList from './components/PlayListSection';

import './style.css';

class Sidebar extends React.Component{

    render(){
        return(
           <aside className="sidebar">
               <ul>
                   <li> <NavLink activeClassName="active" className="sidebar__link" to={`${this.props.pathname}/browse`}>browse</NavLink></li>
                   <li> <NavLink className="sidebar__link" to={`${this.props.pathname}/radio`}>radio</NavLink></li>
               </ul>
               <Library></Library>
               <PlayList></PlayList>
               <div>
                <span>Add icon</span>
                <span>New Playlist</span>
               </div>
           </aside>
        )
    }
}

export default Sidebar