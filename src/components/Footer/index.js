import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <div className='container flex-row footer'>
        <p className='mx-1'>Created by Emily Darr</p>
        <a className='icon' href='https://github.com/emilyadarr'><FaGithub style={{ fontSize: '50px'}} /></a>
        <a className='icon' href='https://www.linkedin.com/in/emily-darr-0b837a58/'><FaLinkedin style={{ fontSize: '50px'}} /></a>
        <a className='icon' href='https://stackoverflow.com/users/17265286/emily'><FaStackOverflow style={{ fontSize: '50px'}} /></a>
      </div>
      <div>
      </div>
    </footer>
  );
};

export default Footer;