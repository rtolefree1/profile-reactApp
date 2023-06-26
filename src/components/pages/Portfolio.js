import React from 'react';
import image_6 from '../../Assets/image_6.jpg';
import image_7 from '../../Assets/image_7.jpg';
import homework1_screenshot from '../../Assets/homework1_screenshot.jpg';
import '../../styles/portfolio.css';


export default function Portfolio() {
    return (
      <div className='pageTitle'>
        <h1>Home Page</h1>
          <section className="bannerClass">
            <div>
              <img src={image_7} alt="Computer circuit board"/>
            </div>
            <div class="bannerClassPara"> 
            <p >Georgia Tech Coding Projects</p>
            </div>
        </section>
        <body>
    <header className="headerClass">

       
            {/* <h1 className="h1_class">Ricky's Portfolio</h1> */}
        
    
         {/* <div class="headerNav">  */}
          {/* direct child of nav is ul and use li  */}
            {/* <nav> 
                <ul>
                    <li><a href="#section-1">About Me</a></li>
                    <li><a href="#section-2">Work</a></li>
                    <li><a href="#section-3">Contact</a></li>
                    <li><a href="./Assets/RickyTolefreeResume.pdf">Resume</a></li>
                </ul>
            </nav> */}
    </header>

    <section className="bannerClass">
        <div>
        {/* <img src="./Assets/image_5.jpg" alt="Computer circuit board"/> */}
         </div> 
        {/* <div className="bannerClassPara"> 
        <p >Chicago Skyline Coding Projects</p>
        </div> */}
    </section>
    
    <main>

        
        {/* <img class="profilePic" src="./Assets/profilePicture.JPG" alt="Profile picture" /> */}
    
        <section className="sectionContainer1">
            <aside>
                <h2 id="section-1">About Me!</h2>
                
            </aside>
            <article className="aboutMeSection">
                    <p>Currently I am a Environment Analyst which is closely related to the title Configuration Analyst<br/>
                    I am a bootcamp student at Georgia Tech and also I take courses at DePaul for my Masters, which I take<br/>
                    a couple a classes a year. I am pursuing a career as a Software Engineer and wanting to continue to learn<br/>
                    to be a better asset to the field of Computer Science. Outside of education, I spend my time with friends, <br/>
                    family and the gym. I travel when I can and I look to be the best version of myself daily.</p>
            </article>
            
        </section>

        

        <section className="WorkContainerParent"> 
            <aside>
                <h2 id="section-2">Work!</h2> 
            </aside>
            <section>
            <article className="workClass1">
                <div >
                    <a href="https://rtolefree1.github.io/Horiseon_Search_Marketing/"><img src={homework1_screenshot}  alt="Group of people at the table solving problem" />
                    </a>      
                </div>
                <div className="projectBoxContainer1"> 
                <p ><b>Horiseon Search <br/>
                 Marketing</b></p>
                </div>
            </article>
        <section className='bottomSectionContainer'>
            <div>
            <article className="workClass2">
                <div >
                    <a href="https://rtolefree1.github.io/WebAPI_Quiz/"><img src={image_6} alt="Computer circuit board" /></a>      
                </div>
                <div className="projectBoxContainer1">
                <p ><b>WebQuiz</b><br/><small>JavaScript</small></p>
                </div>
            </article>

            <article className="workClass2">
                <div >
                    <img src={image_6} alt="Computer circuit board" />      
                </div>
                <div className="projectBoxContainer1">
                <p ><b>Calculator</b><br/><small>React/JavaScript/CSS</small></p>
                </div>
            </article>
            </div>


            <div>
            <article className="workClass2">
                <div >
                    <img src={image_7} alt="Multiple Monitors; color blue" />      
                </div>
                <div className="projectBoxContainer1">
                <p ><b>Surf Report</b><br/><small>Mern Stack</small></p>
                </div>
            </article>

            <article className="workClass2">
                <div >
                    <img src={image_7} alt="Multiple Monitors; color blue" />      
                </div>
                <div className="projectBoxContainer1">
                <p ><b>Run Bubby</b><br/><small>HTML CSS</small></p>
                </div>
            </article>
        </div>
        </section> {/** closing class bottomSectionContainer */}
        </section>
        </section>
            
            
    </main>
    <section className="contactAreaParent">
        
        <aside>
            <h2 id="section-3">Contact Me!</h2>   
        </aside>

        <section className="contactArea">
            <nav>
                <a href="#">Moble Number: (123) 456-7890</a>
                <a id="section-4" href="./Assets/RickyTolefreeResume.pdf">Resume</a>
                <a href="https://github.com/rtolefree1/">GitHub</a>
                <a href="www.linkedin.com/in/rryde2000">LinkedIn</a>
            </nav>
        </section>
    </section>
</body>

      </div>
    );
  }
  