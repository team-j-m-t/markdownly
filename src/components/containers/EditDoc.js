import React, { PureComponent } from 'react';
import store from '../../store';
import Editor from '../presentational/Editor';
import Preview from '../presentational/Preview';
import styles from './EditDoc.css';
import { updateDocument } from '../actions/documentAction';
import { getDocument } from '../selectors/documentSelectors';

export default class Document extends PureComponent {
  state = {
    markdown: ''
  };

  handleChange = ({ target }) => {
    const factoryCreate = {
      markdown: updateDocument
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

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { markdown } = this.state;
    return (
      <>
        <div className={styles.Document}>
          <Editor markdown={markdown} onChange={this.handleChange} value={markdown} />
          <Preview markdown={markdown}/>
        </div>
      </>
    );
  }
}
