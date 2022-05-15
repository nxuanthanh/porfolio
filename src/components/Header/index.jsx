import Me from 'assets/images/me.png';
import DownloadCV from 'features/DownloadCV';
import React from 'react';
import HeaderSocials from './components/HeaderSocials';
import './header.scss';
function Header(props) {
  return (
    <header className="header">
      <div className="container header__container">
        <h5>Hello I'm Thanh</h5>
        <h1>Welcome to my portfolio</h1>
        <h5 className="text-light">Front-End Developer (main) / Fullstack Developer</h5>
        <DownloadCV />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
