import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';

export default class Preview extends Component {
  static propTypes = {
    markdown: PropTypes.string.isRequired
  };
  render() {
    const __html = marked(this.props.markdown);
    return (
      <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>

    );
  }
}
