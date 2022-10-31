import React from 'react';
import './roadmap.scss';

function RoadMap(props) {
  return (
    <section id="road">
      <h5>My efforts</h5>
      <h2>Future Roadmap</h2>
      <div className="container road__container">
        <div className="road__item third">
          <div className="road__item__image">
            <img
              src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt="road_img"
            />
          </div>
          <div className="road__item__content">
            <div className="road__item__info">
              <h3>Javascript expert</h3>
              <p>
                First of all, I want to master Javascript, Typescript and Libraries, one of the best
                languages ​​now
              </p>
            </div>
          </div>
        </div>
        <div className="road__item first">
          <div className="road__item__image">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="road_img"
            />
          </div>
          <div className="road__item__content ">
            <div className="road__item__info">
              <h3>Web fullstack expert</h3>
              <p>
                Next, I will become a professional full stack web developer with many programming
                languages, many quality products
              </p>
            </div>
          </div>
        </div>

        <div className="road__item second">
          <div className="road__item__image">
            <img
              src="https://images.unsplash.com/photo-1621551509931-6a66c6e5d6d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="road_img"
            />
          </div>
          <div className="road__item__content">
            <div className="road__item__info">
              <h3>Good promotion</h3>
              <p>Project manager, financial freedom, this could take a long time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

RoadMap.propTypes = {};

export default RoadMap;
