import React from 'react';
import PropTypes from 'prop-types';

function Title({ title, onChange, onSubmit }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label> Add Document Title </label>
        <input type="text" name="title" value={title} onChange={onChange} />
        <button>Submit</button>
      </form>
    </>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Title;
