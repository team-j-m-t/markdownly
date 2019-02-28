import React from 'react';
import PropTypes from 'prop-types';

function List({ list }) {

  console.log(list, 'List.js');
  const listOfDocs = list.map(doc=> {
    return <li key={list}>{doc}</li>;
  });
  return (
    <ul>
      {listOfDocs}
    </ul>
  );
}

List.propTypes = {
  list: PropTypes.array
};

export default List;
