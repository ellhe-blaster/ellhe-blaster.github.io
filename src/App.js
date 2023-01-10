import React, { useState } from 'react';
import './App.css'; 

const options = [
  { value: "https://wkq8y7xzk.github.io", label: "intro" },
  { value: "https://github.com/wkq8y7xzk", label: "github" },
  { value: "https://discord.gg/3R4G2y3b", label: "discord" }
];

export default function App() { 
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = url;
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  
  return ( 
    <>
	<div className="lines"></div>
	
 <div className="main">
  <div className="noise"></div>
  <div className="header">
   ✧ wkq8y7xzk site (or Something) ✧
  </div>
  <div className="row">
   <div className="column side">
    <div className="icon"></div>
	<div className="text">✧ About Me ✧<br/> I am a developer enthusiast who like video games.</div>

    <div className="text">
     <center>
	     <form onSubmit={handleSubmit}>
      <select required onChange={handleChange} defaultValue="">
        <option disabled hidden value="">
          intro
        </option>
        {options.map(({ value, label }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </select>
      <button type="submit">Go!</button>
    </form> 
	</center>
    </div>
   </div>
   <div className="column middle">
   <div className="heading">wkq8y7xzk</div>
    <div className="inner">Welcome to my personal site ^^
     <div className="tags">#Enjoy</div>
    </div>

    <div className="heading">INTRO</div>
    <div className="inner">
     <h1>INTRO</h1> 
     <p> Developing programs related to backend platforms or microservices</p>
	 <p>I currently work with programs related to database, user interface design, in conjunction with algebraic animations, algorithms and competitive programming...</p> 
	 <hr/>
	 <a href="https://stackoverflow.com/users/11717481/ellhe-blaster"><img className="imgembed" src="https://stackoverflow.com/users/flair/11717481.png" style={{width:"300px", height:"77px"}} alt="profile for ellhe-blaster at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for ellhe-blaster at Stack Overflow, Q&amp;A for professional and enthusiast programmers"/></a>
     <br/>
	 <br/>
     <img style={{width:"300px"}} className="imgembed" alt="media-source" src="https://www.codewars.com/users/hexorhex/badges/micro"/>
     <br/>
	 <br/> 
	 <hr/>
     <p></p>
     <ul>
      <li>YouTube <a href="https://www.youtube.com/channel/UCGYdqT2iXAQb7hsgJdK5TUQ" target="blank">channel</a></li>
     </ul>

     <blockquote cite="http://www.worldwildlife.org/who/index.html">
      Do not forget to suscribe!<br/> 
	  please leave any feedback.
     </blockquote>

     <div className="tags"> this site is available thanks to <a href="https://es.squarespace.com/" target="blank">@squarespace </a> them and their team have been very helpful </div>
    </div>

   </div>

  </div> 
  </div> 
  </>

) 
}
