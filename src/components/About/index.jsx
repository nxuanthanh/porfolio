import me from 'assets/images/me-about.jpg';
import React from 'react';
import { BsCode } from 'react-icons/bs';
import { CgWorkAlt } from 'react-icons/cg';
import { VscProject } from 'react-icons/vsc';
import './about.scss';
function About(props) {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>ABOUT ME</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={me} alt="me-about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <CgWorkAlt className="about__icon" />
              <h5>Experience</h5>
              <small>
                Completing the Build Responsive Real-World Websites with HTML and CSS course, The
                Complete JavaScript Course 2022: From Zero to Expert course, ReactJS cho người mới
                bắt đầu 2020 course on udemy...
              </small>
            </article>

            <article className="about__card">
              <BsCode className="about__icon" />
              <h5>Programming languages and libraries</h5>
              <small>
                Programming languages: HTML, CSS, Javascript, TypeScript, Java, C/C++,
                <br /> Framework and libraries: React, Bootstrap, Redux/Redux toolkit,
                TailwindCSS...
              </small>
            </article>

            <article className="about__card">
              <VscProject className="about__icon" />
              <h5>Demo Projects</h5>
              <small>
                T-store, PreviewMovie Website, Ecommercet-store, My Portfolio, Post App, Photo
                App,Pic game,Bankist,Color Matching Game, Tic-tac-toe Game...
              </small>
            </article>
          </div>
          <p>
            My full name is Nguyen Xuan Thanh. I'm a frontend developer with 6 months of experience
            working with real-life projects at company. I have a great love for information
            technology and the spirit of working hard, always learning, determined to pursue the
            goal until the end. This help me a lot because I have learnt many things include
            codding-skill, teamwork-skill, handle progress smoothly<br></br>
            <br></br>
            In addition, I also have knowledge about some programming languages as C/C++, C#,
            Python, Java...basically.
          </p>
          <a className="btn btn-primary" href="#contact">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {};

export default About;
