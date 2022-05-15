import React from 'react';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

function HeaderSocials(props) {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <BsFacebook />
      </a>
    </div>
  );
}

HeaderSocials.propTypes = {};

export default HeaderSocials;
