import TooltipContent from 'features/TooltipContent';
import useHover from 'Hooks/useHover';
import React, { useState } from 'react';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io5';
import Astro from 'assets/images/astro.png';
import './footer.scss';
function Footer(props) {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleHover = (event) => {
    setCoords(event.target.getBoundingClientRect());
  };
  return (
    <footer>
      <img src={Astro} alt="" className="astro" />
      <a href="#" className="footer__logo">
        {hovered && <TooltipContent coords={coords} />}
        <h1 ref={nodeRef} onMouseOver={handleHover}>
          {' '}
          Thanh's Portfolio
        </h1>
      </a>

      <ul className="permalinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#road">Roadmap</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com " target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com " target="_blank" rel="noreferrer">
          <FiInstagram />
        </a>
        <a href="https://github.com " target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com " target="_blank" rel="noreferrer">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          A portfolio website coded by ReactJS by Nguyen Xuan Thanh &copy; 2022. Reference: Egator.
        </small>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
