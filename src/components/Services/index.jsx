import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './services.scss';
function Services(props) {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__header">
            <h3>Front-end Web Developer</h3>
          </div>

          <ul className="service__list">
            <li className="service__item">
              <BiCheck className="service__icon" />
              <p className="service__text">Working environment is professional, sociable.</p>
            </li>
            <li className="service__item">
              <BiCheck className="service__icon" />
              <p className="service__text">
                The basic regimes such as insurance, salary and bonus are clear.
              </p>
            </li>
            <li className="service__item">
              <BiCheck className="service__icon" />
              <p className="service__text">
                Official salary (after internship) from 8 million VND.
              </p>
            </li>
            <li className="service__item">
              <BiCheck className="service__icon" />
              <p className="service__text">Job advancement route clear and easonable.</p>
            </li>
            <li className="service__item">
              <BiCheck className="service__icon" />
              <p className="service__text">Guidance and help for development.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__header">
            <h3>Fullstack Web Developer (in the future)</h3>
          </div>

          <ul className="service__list">
            <li className="service__item">
              <BiCheck className="service__icon" />
              <p className="service__text">Same with Front-end role.</p>
            </li>
            <li className="service__item">
              <BiCheck className="service__icon" />
              <p className="service__text">Better salary.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

Services.propTypes = {};

export default Services;
