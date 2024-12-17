import React from 'react'

function About() {
  return (
    <div className='row education'>
      <h2  className='text-center ' style={{  color:' rgb(115, 189, 111)',fontWeight:"700",fontFamily: "Oswald, sans-serif"}}>EDUCATION</h2>
<div className="timeline-items">
  <div className="timeline-item">
    <div className="timeline-dot"></div>
      <div className="timeline-date">2018</div>
      <div className="timeline-content">
        <h3>Bachelor's Degree </h3>
        <p>Graduated with a Bachelor's degree in Mathematics from St. Teresa's College, where I developed a solid foundation in analytical thinking, problem-solving, and quantitative techniques,
           preparing me to tackle complex challenges with precision and logic.</p>
      </div>
    
  </div>


  <div className="timeline-item">
    <div className="timeline-dot">   </div>
      <div className="timeline-date">2021</div>
      <div className="timeline-content">
        <h3>Master's Degree </h3>
        <p>Completed a Master’s degree in Mathematics from St. Albert’s College, gaining advanced knowledge in mathematical theories, analytical techniques, and research methodologies, enhancing my ability to solve complex problems with precision and critical thinking</p>
      </div>
 
  </div>


  <div className="timeline-item">
    <div className="timeline-dot">   </div>
      <div className="timeline-date">2024</div>
      <div className="timeline-content">
        <h3>MEARN STACK Course</h3>
        <p>Completed a comprehensive MEARN Stack Development course from Luminar Technolab, acquiring expertise in building dynamic web applications using MongoDB, Express.js, React, and Node.js, along with hands-on experience in front-end and back-end development.</p>
      </div>
    </div>
 
</div>
    

    </div>
  )
}

export default About