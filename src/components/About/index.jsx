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
            My full name is Nguyen Xuan Thanh. I'm a 4th year student at University of Technology
            and Educations - The University of Danang. I registered and accomplished many online
            codding-course in Udemy and F8, this make my codding-skill better. During this time, I
            learnt some programming languages as C/C++, C#, Python, Java...basically.<br></br>
            <br></br>
            Specially, I really interested in front-end aspect. At university, I and my friends has
            gathered together and created a team and we have finished some app project ourselves.
            This help me a lot because I have learnt many things include codding-skill,
            teamwork-skill, handle progress smoothly. All of our project are written in HTML, CSS,
            SCSS, JS, Bootstrap 5, MUI 5, Redux tookit, ReactJS, e...
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
