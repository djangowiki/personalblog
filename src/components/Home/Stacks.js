import React, { Fragment } from 'react';
import { FaPython } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';

const Stacks = () => {
  return (
    //    Stacks
    <Fragment>
      <h2 className="title">Stacks</h2>
      <div className="stacks">
        <div className="stack">
          <FaPython size="50" />
          <h4>Python</h4>
          <p>
            Python is a very powerful language with very simple syntax to
            understand. If you are really interested in Python, and you want to
            be a web developer, may be you should try Django. I started with
            Python, then build some projects with Django before deciding to
            stick with JavaScript.
          </p>
        </div>
        <div className="stack">
          <FaJsSquare size="50" />
          <h4>JavaScript</h4>
          <p>
            JavaScript is a very powerful language and I don't think you will
            ever escape it if you hope to be a good web developer. Let's learn
            JavaScript fundamentals and fasten our seat belts for the powerful
            frameworks. We will focus more on modern JavaScript and ES6
            features.
          </p>
        </div>
        <div className="stack">
          <FaReact size="50" />
          <h4>React</h4>
          <p>
            React is a very powerful JavaScript library and if you have ever
            seen yourself complaining on why there is no separation of concerns
            and framework feel in React, may be you should checkout Gatsby.
            Let's learn React together and develop faster and scalable websites
            using Gatsby.
          </p>
        </div>
        <div className="stack">
          <FaNodeJs size="50" />
          <h4>NodeJS</h4>
          <p>
            If you have some backgrounds in JavaScript, you can easily become a
            fullstack developer by learning how to work with NodeJS. NodeJS
            allows you to run JavaScript codes in a server environment. Let's
            learn NodeJS, Express and MongoDB together and build powerful MERN
            apps.
          </p>
        </div>
      </div>
    </Fragment>
    //   End Stacks
  );
};

export default Stacks;
