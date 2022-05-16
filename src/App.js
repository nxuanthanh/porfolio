import {
  About,
  Contact,
  Experience,
  Header,
  Navbar,
  Portfolio,
  Services,
  Testimonials,
} from 'components';
import RoadMap from 'components/Roadmap';
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
      <Portfolio />
      <RoadMap />
      <Testimonials />
      <Contact />
    </>
  );
}

App.propTypes = {};

export default App;
