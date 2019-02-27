import React, { PureComponent } from 'react';
import store from '../../store';
import Editor from '../markdown/Editor';
import Preview from '../markdown/Preview';
import styles from '../markdown/Document.css';
import { createDocument } from '../actions/documentAction';
import { getDocument } from '../selectors/documentSelectors';

export default class Document extends PureComponent {
  state = {
    markdown: ''
  };

  updateMarkdown = ({ target }) => {
    store.dispatch(createDocument(target.value));
  };

  componentDidMount() {
    const reduxState = store.getState();
    const markdown = getDocument(reduxState);
    this.setState({ markdown });
  }

  render() {
    return (
      <>
      <button> Document 1 </button> 
      <button> Document 2 </button> 
      <button> Document 3 </button> 
        <div className={styles.Document}>
          <Editor updateMarkdown={this.updateMarkdown} markdown={this.state.markdown} />
          <Preview markdown={this.state.markdown}/>
        </div>
          <button>Delete Document</button> 
      </>
    );
  }
}
