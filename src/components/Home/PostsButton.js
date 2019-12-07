import React, { Fragment } from 'react';
import { Link } from 'gatsby';

const PostsButton = () => {
  return (
    <Fragment>
      <br />
      <p className="pbtn">
        <Link to="/notes">All Notes</Link>
      </p>
    </Fragment>
  );
};
export default PostsButton;
