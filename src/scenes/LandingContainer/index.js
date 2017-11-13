import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

import './style.css';

const Landing=(props)=>{
 const {match,history,location}=props;
return (
    <section >
<div className="top-content clearfix">
 <Sidebar pathname={match.path}></Sidebar>
 <MainContent paths={{match,history,location}}></MainContent>
</div>
<footer>
<p>FOOTER</p>
</footer>
</section>)
}
export default Landing;