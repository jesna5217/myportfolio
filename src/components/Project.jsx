import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import './home.css'
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

function Project() {
    useEffect(() => {
            AOS.init({
              duration: 1000,  // Animation duration in ms
              easing: 'ease-in-out',  // Easing function
              once: true,  // Animation runs once
            });
          }, []);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const projects=[{
        id:0,

    title:"VegBox",
    image:"../assets/Screenshot 2024-12-16 113207.png",
    desc:"A React and Redux-based app for managing and displaying fresh vegetables efficiently.",
    link:"https://vegbox-gkrh.vercel.app/"
    },
{id:1,
    title:"Netflix Clone",
    image:"../assets/Screenshot 2024-08-20 185555.png",
    desc:"A React app featuring API integration to fetch and display movies dynamically with seamless user interface.",
    link:"https://chic-kashata-f889bc.netlify.app/"
},
{id:2,
    title:"Purple Clone",
    image:"../assets/Screenshot 2024-09-14 114130.png",
    desc:"A React-based application replicating the design and functionality of the Purple website.",
    link:'https://purplle-app.vercel.app/'
},
{
    id:3,
    title:"dayOut",
    image:"../assets/Screenshot 2024-12-16 115638.png",
    desc:"A full-stack project built with React, having seamless and engaging user experience for travel or event planning.",
    link:"https://travelwebsite-inky.vercel.app/"
},
{id:4,
    title:"Calculator",
    image:"../assets/Screenshot 2024-12-16 223627.png",
    desc:"Created a functional calculator using HTML, CSS, and JS, featuring a clean user interface and arithmetic operations.",
    link:'https://jesna5217.github.io/Digital-calculator/'
},
{
    id:5,
    title:"To Do List",
    image:"../assets/Screenshot 2024-12-16 223914.png",
    desc:"An application using Redux, efficient state management , seamless task addition, removal, and updates.",
    link:"https://todoapp-sepia-eight.vercel.app/"
}

]
  return (
   <div className="row ">
    <h2  className='text-center skills ' style={{  color:' rgb(115, 189, 111)',fontWeight:"700",fontFamily: "Oswald, sans-serif"}}>PROJECTS</h2>

    
{
        projects?.map((data)=>(<>
          <div className="col-md-3 mt-5 pro"  data-aos="flip-left">
          <Card style={{ width: '19rem',backgroundColor:"black",color:"white" }} className='project-card'>
      <Card.Img variant="top" src={data.image} height="150px" />
      <Card.Body>
        <Card.Title className='title'>{data.title}</Card.Title>
        <Card.Text>
      <p className='desc'>   {data.desc}</p>
        </Card.Text>
    <a href={data.link}>   <button className='button' onClick={handleShow}>CLICK HERE</button></a>
      </Card.Body>
    </Card>

          </div>


</>
        ))
    }

</div>
    

  )
}

export default Project