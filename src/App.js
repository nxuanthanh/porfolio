import {
  About,
  Contact,
  Experience,
  Header,
  Navbar,
  Portfolio,
  Services,
  RoadMap,
  Testimonials,
  Footer,
} from 'components';
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
      <Footer />
    </>
  );
}

App.propTypes = {};

export default App;
