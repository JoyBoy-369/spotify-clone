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
                   <li> <NavLink activeClassName="active" className="sidebar__link" to="/landing">browse</NavLink></li>
                   <li> <NavLink className="sidebar__link" to="/landing">radio</NavLink></li>
               </ul>
               <Library></Library>
               <PlayList></PlayList>
           </aside>
        )
    }
}

export default Sidebar