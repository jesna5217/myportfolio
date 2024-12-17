import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

function Skills() {
     useEffect(() => {
                AOS.init({
                  duration: 1000,  // Animation duration in ms
                  easing: 'ease-in-out',  // Easing function
                  once: true,  // Animation runs once
                });
              }, []);
    const skills=[{
        id:0,
        image:"../assets/html-5.png"
    },
    {
        id:1,
        image:"../assets/css-3.png"
    },
    {
        id:2,
        image:"../assets/java-script.png"
    },
    {
        id:3,
        image:"../assets/react.png"
    },
{
    id:4,
    image:"../assets/nodejs.png"
},
{
    id:5,
    image:"../assets/express-js.png"
},{
    id:6,
    image:"../assets/MongoDB.png"
}]
  return (
  <>
   <div className="row skill-row">
    <h2 className='text-center skills' style={{  color:' rgb(115, 189, 111)',fontWeight:"700",fontFamily: "Oswald, sans-serif"}}>SKILLS</h2>
    <div className='row d-flex justify-content-center mt-5'>
       {
        skills.map((data)=>(
            <div className="col-md-1 col-xs-6 java" data-aos="zoom-in">
                <img src={data.image} alt=""  height="70px" />
            </div>
        ))
       }
    </div>
    </div></>
  )
}

export default Skills