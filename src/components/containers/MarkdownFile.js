import React, { PureComponent } from 'react';
import store from '../../store';
import { addMarkdown } from '../actions/markdownAction';
import { getMarkdownFiles } from '../selectors/markdownAddSelectors';

export default class MarkdownFiles extends PureComponent {
  state = {
    markdownList: ['markdown']
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      const markdownList = getMarkdownFiles(state);
      this.setState({ markdownList });
    });
  }

  componentWillUnmount() {
    if(this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleChange = ({ target }) => {
    store.dispatch(addMarkdown[target.name](target.value));
  }
  render() {
    const { markdownList } = this.state;
    return (
      <h1>{markdownList}</h1>
    );
  }
}

