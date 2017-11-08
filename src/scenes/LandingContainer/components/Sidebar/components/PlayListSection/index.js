import React from 'react';
import {NavLink} from 'react-router-dom';
import data from 'data.json';

const PlayListSection=({})=>
<section>
<h2>playlists</h2>
{data.map(dataItem=>
dataItem.PlayList.titles.map(item=>
<ul>
<li><NavLink to="/landing" key={item.id}>{item}</NavLink></li>
</ul>
))}
</section>

export default PlayListSection