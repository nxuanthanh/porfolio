import React from 'react';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io5';
import './footer.scss';
function Footer(props) {
  return (
    <footer>
      <a href="#egator" className="footer__logo">
        Thanh's Portfolio
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
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
          <a href="#testimonials">testimonials</a>
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
          A portfolio website coded by ReactJS by Hoang Dung &copy; 2022. Reference: Egator.
        </small>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
