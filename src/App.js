import { About, Contact, Experience, Header, Navbar, Services } from 'components';
import React from 'react';
import './App.scss';

function App(props) {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Contact />
    </>
  );
}

App.propTypes = {};

export default App;
