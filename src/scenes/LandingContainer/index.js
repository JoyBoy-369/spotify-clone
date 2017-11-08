import React from 'react';

import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

import './style.css';

const Landing=()=>
<section >
<div className="top-content clearfix">
 <Sidebar></Sidebar>
<MainContent></MainContent>
</div>
<footer>
<p>FOOTER</p>
</footer>
</section>

export default Landing;