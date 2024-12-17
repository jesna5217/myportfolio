import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
function Aboutme() {
      useEffect(() => {
            AOS.init({
              duration: 1000,  // Animation duration in ms
              easing: 'ease-in-out',  // Easing function
              once: true,  // Animation runs once
            });
          }, []);
  return (
  <div className="aboutme-row">
    <h2  className='text-center skills ' style={{  color:' rgb(115, 189, 111)',fontWeight:"700",fontFamily: "Oswald, sans-serif"}}>ABOUT ME</h2>
<div className="row mt-5">
<div className="col-md-4 bio" data-aos="fade-right">

<img src="../assets/rb_386.png" alt="" height="400px"/>
</div>
<div className="col-md-1"></div>
<div className="col-md-6 para"data-aos="fade-left">
I am a highly motivated and detail-oriented individual with a strong academic foundation in Mathematics, holding a Master’s degree from St. Albert’s College. My passion for technology and problem-solving led me to pursue expertise in full-stack web development through a comprehensive MEARN Stack Development course at Luminar Technolab.

I have hands-on experience creating dynamic and responsive web applications using React, Redux, MongoDB, Express.js, and Node.js. I am eager to apply my skills to solve real-world challenges and contribute to impactful projects.
</div>
</div>
  </div>
  )
}

export default Aboutme