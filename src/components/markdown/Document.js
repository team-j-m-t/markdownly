import React, { PureComponent } from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';

export default class Document extends PureComponent {
  state = {
    markdown: '# Hi there'
  };

  updateMarkdown = ({ target }) => {
    this.setState({ markdown: target.value });
  };

  render() {
    const { markdown } = this.state;
    return (
      <>
      <button> Document 1 </button> 
      <button> Document 2 </button> 
      <button> Document 3 </button> 
        <div className={styles.Document}>
          <Editor markdown={markdown} updateMarkdown={this.updateMarkdown} />
          <Preview markdown={markdown} />
        </div>
          <button>Delete Document</button> 
      </>
    );
  }
}
