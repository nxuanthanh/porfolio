import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { IoCodeSlashSharp } from 'react-icons/io5';
import { RiRoadMapLine, RiServiceLine } from 'react-icons/ri';
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
        onClick={() => handleOnNavClick('#about')}
        className={active === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => handleOnNavClick('#experience')}
        className={active === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => handleOnNavClick('#services')}
        className={active === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => handleOnNavClick('#portfolio')}
        className={active === '#portfolio' ? 'active' : ''}
      >
        <IoCodeSlashSharp />
      </a>

      <a
        href="#road"
        onClick={() => handleOnNavClick('#road')}
        className={active === '#road' ? 'active' : ''}
      >
        <RiRoadMapLine />
      </a>

      <a
        href="#contact"
        onClick={() => handleOnNavClick('#contact')}
        className={active === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
