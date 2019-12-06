import React, { Fragment } from 'react';
import Note from './Note';

const NoteList = ({ notes }) => {
  return (
    <Fragment>
      <h2 className="title">Notes</h2>
      <div className="content">
        {notes.map(({ node }, index) => {
          return <Note note={node} key={index} />;
        })}
      </div>
    </Fragment>
  );
};

export default NoteList;
