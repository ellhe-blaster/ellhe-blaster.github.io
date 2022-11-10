import React from 'react';
import './App.css'; 

export default function App() {  
  return ( 
    <>
	<div className="lines"></div>
	
 <div className="main">
  <div className="noise"></div>
  <div className="header">
   ✧ ellhe-blaster site (or Something) ✧
  </div>
  <div className="row">
   <div className="column side">
    <div className="icon"></div>
	<div className="text">✧ About Me ✧<br/> Hi hello i am ellhe-blaster (<a href="https://twitter.com/NyuhtHzagok">NyuhtHzagok</a> on @twitter) i am a full-stack developer enthusiast who like video games.</div>

    <div className="text">
     <center>
	   <form action="http://www.myspacegens.com/handler.php?gen=redirect" method="post"><select name="url" style={{width: "150px", height: "20px", backgroundColor: "#ffffff", color:"#000", border: "none"}}>
        <option value="/">home</option>
        <option value="https://github.com/ellhe-blaster">github</option>
        <option value="https://discord.gg/3R4G2y3b">discord</option>
        <option value="email">linkity 2</option>
		
       </select><input type="submit" style={{backgroundColor: "#ffffff", color: "#000", border: "none"}} value="Go!"/></form>
     </center>
    </div>
   </div>
   <div className="column middle">
   <div className="heading">ellhe-blaster</div>
    <div className="inner">Welcome to my personal site. Credit is very much appreciated ^^
     <div className="tags">#Enjoy</div>
    </div>

    <div className="heading">INTRO</div>
    <div className="inner">
     <h1>INTRO</h1> 
     <p> Developing programs related to backend platforms or microservices</p>
	 <p>I currently work with programs related to databases, user interface design, in conjunction with algebraic animations, algorithms and competitive programming...</p> 
	 <hr/>
	 <a href="https://stackoverflow.com/users/11717481/ellhe-blaster"><img src="https://stackoverflow.com/users/flair/11717481.png" style={{width:"300px", height:"77px"}} alt="profile for ellhe-blaster at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for ellhe-blaster at Stack Overflow, Q&amp;A for professional and enthusiast programmers"/></a>
     <br/>
	 <br/>
     <img style={{width:"300px"}} alt="media-source" src="https://www.codewars.com/users/hexorhex/badges/micro"/>
     <br/>
	 <br/> 
	 <hr/>
     <p></p>
     <ul>
      <li>StackOverflow </li>
      <li>CodeWars </li>
      <li>YouTube <a href="https://www.youtube.com/channel/UCGYdqT2iXAQb7hsgJdK5TUQ" target="blank">channel</a></li>
     </ul>

     <blockquote cite="http://www.worldwildlife.org/who/index.html">
      Do not forget to suscribe!<br/> 
	  please leave any feedback.
     </blockquote>

     <div className="tags"> this site is available thanks to ©<a href="https://es.squarespace.com/" target="blank">squarespace </a> them and their team have been very helpful </div>
    </div>

   </div>

  </div> 
  </div> 
  </>

) 
}
