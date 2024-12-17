import React from 'react'

function Contact() {
  return (
   <div className='row skill-row'>
      <h2  className='text-center skills ' style={{  color:' rgb(115, 189, 111)',fontWeight:"700",fontFamily: "Oswald, sans-serif"}}>CONTACT ME</h2>
<div className='contact'>
   <div>
   <div className='phone d-flex'>
    <i class="fa-solid fa-phone icon"></i>
    <p>8075369887</p>
    </div>
    <div className='d-flex'>
    <i class="fa-solid fa-envelope icon"></i>
    <p>jesnajose1970@gmail.com</p>
    </div>
  <div className='d-flex'>
  <i class="fa-brands fa-github icon"></i>
  <p><a href="https://github.com/jesna5217" style={{textDecoration:"none",color:"white"}}>https://www.linkedin.com/in/jesnajose2000</a></p>
  </div>
<div className='d-flex'>
<i class="fa-brands fa-linkedin icon"></i>
    <p><a href="https://www.linkedin.com/in/jesnajose2000" style={{textDecoration:"none",color:"white"}}>https://www.linkedin.com/in/jesnajose2000</a>/</p></div>
   </div>
</div>

<div className='download'>
<a  href="../assets/cv.jpg" download="../assets/cv.jpg">
<button className='dwnld'>
DOWNLOAD CV</button></a></div>
   </div>
  )
}

export default Contact