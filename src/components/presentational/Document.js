import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import styles from './Document.css';
import PropTypes from 'prop-types';

function Document({ markdown, onChange }){
  return (
      <>
        <div className={styles.Document}>
          <Editor markdown={markdown} onChange={onChange} value={markdown} />
          <Preview markdown={markdown}/>
        </div>
      </>
  );
}

Document.propTypes = {
  markdown: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Document;
