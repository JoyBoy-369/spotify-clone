import React from 'react';
import {NavLink} from 'react-router-dom';
import data from 'data.json';

const LibrarySection=({})=>
    <section>
        <h2>your library</h2>
        {data.map(dataItem=>
        dataItem.Library.titles.map(item=>
        <ul>
        <li><NavLink to="/landing" key={item.id}>{item}</NavLink></li>
        </ul>
        ))}
    </section>


export default LibrarySection