import React from 'react';
import { ImgOverlay } from 'image-overlay-react';
import 'image-overlay-react/dist/index.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub } from 'react-icons/fa'
//import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Project = (props) => {

  return (
    <div className='my-2 mx-2'>
        <ImgOverlay 
          alt={props.name} 
          imgSrc={require(`../../assets/images/${props.image}.jpg`)}
          bgColor='#e3eada'
          position='right'
          width='375px'
          height='250px'
          fSize='10px'
          fColor='#4A7C59'
        >
          <div>
            {<h4 className='cardText'><a href={props.deployed}>{props.name}</a></h4>}
            {<p>{props.description}</p>}
            <a className='icon' href={props.github}><FaGithub style={{ fontSize: '50px'}} /></a>

          </div>
        </ImgOverlay>
    </div>
  )
}

export default Project;

{/* <div className='content'>
  <p className='card-title'>{props.name}</p>
  <p class=''>
    LINKS
  </p>
</div>
</div> */}