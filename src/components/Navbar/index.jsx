import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import './navbar.scss';
function Navbar(props) {
  const [active, setActive] = useState('#');
  const handleOnNavClick = (item) => {
    setActive(item);
  };
  return (
    <nav>
      <a href="#" onClick={() => handleOnNavClick('#')} className={active === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleOnNavClick('#')}
        className={active === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => handleOnNavClick('#')}
        className={active === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => handleOnNavClick('#')}
        className={active === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => handleOnNavClick('#')}
        className={active === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
