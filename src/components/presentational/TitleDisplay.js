import React from 'react';
import PropTypes from 'prop-types';

function TitleDisplay({ title }) {
  return (
    <h1>{title}</h1>
  );
}

TitleDisplay.propTypes = {
  title: PropTypes.string.isRequired
};

export default TitleDisplay;
