import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

import './style.css';

const Landing=(props)=>{
 const matchPath=props.match.path;
return (<section >
<div className="top-content clearfix">
 <Sidebar pathname={matchPath}></Sidebar>
 <MainContent pathname={matchPath}></MainContent>
</div>
<footer>
<p>FOOTER</p>
</footer>
</section>)
}
export default Landing;