// import of images, react, css file and pdf file
import React from 'react';
import image_6 from '../../Assets/image_6.jpg';
import image_7 from '../../Assets/image_7.jpg';
import homework1_screenshot from '../../Assets/homework1_screenshot.jpg';
import pdfFile from '../../Assets/RickyTolefreeResume.pdf'
import '../../styles/portfolio.css';


export default function Portfolio() {
    return (
        // banner and image for the header
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

       
    </header>

    <section className="bannerClass">
        <div>
        
         </div> 
       
    </section>
    
    <main>

        
        {/* About me section */}
    
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

        
        {/* links to projects and assignments */}
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
                    <a href="https://www.youtube.com/watch?v=Yy6OrGRBayk"><img src={image_6} alt="Computer circuit board" /></a>      
                </div>
                <div className="projectBoxContainer1">
                <p ><b>EmployeeTracker</b><br/><small>React/JavaScript/CSS</small></p>
                </div>
            </article>
            </div>


            <div>
            <article className="workClass2">
                <div >
                    <a href='https://www.youtube.com/watch?v=gveNXqKiNGg'><img src={image_7} alt="Multiple Monitors; color blue" /></a>      
                </div>
                <div className="projectBoxContainer1">
                <p ><b>LogoMaker</b><br/><small>Mern Stack</small></p>
                </div>
            </article>

            <article className="workClass2">
                <div >
                    <a href='https://github.com/rtolefree1/WeatherDashboard'><img src={image_7} alt="Multiple Monitors; color blue" /></a>      
                </div>
                <div className="projectBoxContainer1">
                <p ><b>WeatherDashboard</b><br/><small>HTML CSS</small></p>
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

{/* footer section for the profile page */}
        <section className="contactArea">
            <nav>
                <a href="#">Moble Number: (123) 456-7890</a>
                <a id="section-4" href={pdfFile}>Resume</a>
                <a href="https://github.com/rtolefree1/">GitHub</a>
                <a href="https://www.linkedin.com/in/rryde2000">LinkedIn</a>
            </nav>
        </section>
    </section>
</body>

      </div>
    );
  }
  