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

  handleChange = ({ target }) => {
    const factoryCreate = {
      markdown: createDocument
    };
  
    store.dispatch(factoryCreate[target.name](target.value));
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const reduxState = store.getState();
      const markdown = getDocument(reduxState);
      this.setState({ markdown });
    });
  }

  render() {
    const { markdown } = this.state;
    return (
      <>
      <button> Document 1 </button> 
      <button> Document 2 </button> 
      <button> Document 3 </button> 
        <div className={styles.Document}>
          <Editor markdown={markdown} onChange={this.handleChange} value={markdown} />
          <Preview markdown={markdown}/>
        </div>
          <button>Delete Document</button> 
      </>
    );
  }
}
