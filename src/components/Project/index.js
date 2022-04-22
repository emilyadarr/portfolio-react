import React from 'react';

const Project = (props) => {

  // const projects = [
  //   {
  //     name: 'Budget Tracker',
  //     description: 'PWA, IndexedDB',
  //     github: 'https://github.com/emilyadarr/budget-tracker-19',
  //     deployed: 'https://safe-mountain-13532.herokuapp.com/'
  //   },
  //   {
  //     name: 'Social Network API',
  //     description: 'NoSQL, Express.js, MongoDB, Mongoose ODM',
  //     github: 'https://github.com/emilyadarr/social-network-api-18',
  //     deployed: 'https://drive.google.com/file/d/177Lx3y-ssqsY2ExOMkXufa35ebcK6viF/view'
  //   },
  //   {
  //     name: 'Plant Pal',
  //     description: 'Handlebars.js, Node.js, Express.js, MySQL',
  //     github: 'https://github.com/emilyadarr/plant_pal',
  //     deployed: 'https://plant-pal-project.herokuapp.com/'
  //   },
  //   {
  //     name: 'Tech Blog',
  //     description: 'MVC, Handlebars.js, Sequelize',
  //     github: 'https://github.com/emilyadarr/tech-blog-14',
  //     deployed: 'https://murmuring-cove-46557.herokuapp.com/'
  //   },
  
  // ];

  return (
    <div>
      <div className='card'>
        <div className='image-container'>
          <img alt={props.name} src={require(`../../assets${props.image}.jpg`).default}/>

        </div>
        <div className='content'>
          <p className='card-title'>{props.name}</p>
          <p class=''>
            LINKS
          </p>
        </div>
      </div>
    </div>
  )
}


