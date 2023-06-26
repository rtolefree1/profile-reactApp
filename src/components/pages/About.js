import React from 'react';
import image_7 from '../../Assets/image_7.jpg';
import '../../styles/portfolio.css';

export default function About() {
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
        <h1 >About Page</h1>
        <p>
        Currently I am a Environment Analyst which is closely related to the title Configuration Analyst<br></br>
        I am a bootcamp student at Georgia Tech and also I take courses at DePaul for my Masters, which I take<br></br>
        a couple a classes a year. I am pursuing a career as a Software Engineer and wanting to continue to learn<br></br>
        to be a better asset to the field of Computer Science. Outside of education, I spend my time with friends, <br></br>
        family and the gym. I travel when I can and I look to be the best version of myself daily.
      </p>
      </div>
    );
  }