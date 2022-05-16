import { portfolios } from 'constants';
import React from 'react';
import './portfolio.scss';
function Portfolio(props) {
  return (
    <section id="portfolio">
      <h5>My Recent Practical Projects</h5>
      <h2 style={{ marginBottom: '0.5rem' }}>Portfolio</h2>
      <h5 style={{ marginBottom: '3rem', fontSize: '1rem' }}>
        -- Sorry about some non-responsive projects --
      </h5>
      <div className="container portfolio__container">
        {portfolios.map((item) => (
          <article className="portfolio__item" key={item.id}>
            <div className="portfolio__item__img">
              <img src={item.image} alt="ecommercet" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.github} className="btn" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a
                href={item.dem}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

Portfolio.propTypes = {};

export default Portfolio;
