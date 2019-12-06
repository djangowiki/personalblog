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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur amet dignissimos odit voluptatibus quaerat aliquid quam
            saepe est soluta nostrum.
          </p>
        </div>
        <div className="stack">
          <FaJsSquare size="50" />
          <h4>JavaScript</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur amet dignissimos odit voluptatibus quaerat aliquid quam
            saepe est soluta nostrum.
          </p>
        </div>
        <div className="stack">
          <FaReact size="50" />
          <h4>React</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur amet dignissimos odit voluptatibus quaerat aliquid quam
            saepe est soluta nostrum.
          </p>
        </div>
        <div className="stack">
          <FaNodeJs size="50" />
          <h4>NodeJS</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur amet dignissimos odit voluptatibus quaerat aliquid quam
            saepe est soluta nostrum.
          </p>
        </div>
      </div>
    </Fragment>
    //   End Stacks
  );
};

export default Stacks;
