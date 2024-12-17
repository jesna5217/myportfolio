import React, { useEffect } from 'react'
import './home.css'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import About from './About'
import Aboutme from './Aboutme'
import'./header.css'
function Home() {
    useEffect(() => {
        AOS.init({
          duration: 1000,  // Animation duration in ms
          easing: 'ease-in-out',  // Easing function
          once: true,  // Animation runs once
        });
      }, []);
  return (
 <>
   <header>
<div>
<p><span style={{  color:' rgb(115, 189, 111)'}}>JESNA </span>JOSE</p>
<nav>
    <ul className='lists'>
        <li><a href="#home">HOME</a></li>
        <li><a href="#aboutme">ABOUT</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
    </ul>
</nav>
</div>
  </header>
 <div className="container ">
   <section id='home'>
   <div className="row about-row">
        <div className="col-md-6 about " data-aos="fade-right">
            <h3>Hi,</h3>
            <p className='name-line'>I am <span className='name'><span style={{  color:' rgb(115, 189, 111)'}}>JESNA </span>JOSE</span></p>
            <p className='developer'>FULL <span style={{color:"white"}}>STACK</span> DEVELOPER</p>
            <div>
            

            </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 pic" data-aos="fade-left">
          <img src="../assets/jesna.jpg" alt="" height="400px" className='profile'  style={{borderRadius:"50%"}}/>
        </div>

    </div>
   </section>
<section id='aboutme'>
<Aboutme/>
</section>
<section id='education'>
<About/>
</section>

<section id='skills'>
<Skills/>
</section>
  <section id='projects'>
    < Project/>
  </section>
  <section id='contact'>
    <Contact/>
  </section>
 </div>
 </>
  )
}

export default Home