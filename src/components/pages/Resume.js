import React from 'react';
import image_7 from '../../Assets/image_7.jpg';
// import '../../styles/portfolio.css';
 import '../../styles/Resume.css';

export default function Resume() {
    return (
      <div className='pageTitle'>
         <section className="bannerClass">
            <div>
              <img src={image_7} alt="Computer circuit board"/>
            </div>
            <div class="bannerClassPara"> 
            <p >Georgia Tech Coding Projects</p>
            </div>
        </section>
        <h1 className='resumeHeader'><a href='file:///C:/Resume/update/RickyTolefreeResume.pdf'><b>Resume - GITHUB</b></a></h1>
        <p>
        <section className='sectionContainer'>
          <div className='.divClass1'>
          <h2>FrontEnd Technologies</h2>
          <ul>
            <li>
              HTML/CSS
            </li>
            <li>
              JavaScript
            </li>
            <li>
              NODEJS
            </li>
            <li>
              etc..
            </li>
          </ul>
          </div>
          
          <div className='.divClass2'>
          <h2>BackEnd Technologies</h2>
          <ul>
            <li>
              APIs
            </li>
            <li>
              SQL
            </li>
            <li>
              ORM
            </li>
            <li>
              etc...
            </li>
          </ul>
        </div>
        </section>
        <div className='divPic'>
              <img src={image_7} alt="Computer circuit board"/>
        </div>
        </p>
      </div>
    );
  }