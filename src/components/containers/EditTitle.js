import React, { PureComponent } from 'react';
import store from '../../store';
import { updateTitle } from '../actions/documentAction';
import { getTitle } from '../selectors/titleSelector';
import Title from '../presentational/Title';

export default class EditTitle extends PureComponent {
  state = {
    title: ''
  };

  handleChange = ({ target }) => {
    const factoryTitle = {
      title: updateTitle
    };

    store.dispatch(factoryTitle[target.name](target.value));
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const reduxState = store.getState();
      const title = getTitle(reduxState);
      console.log(title, 'title');
      this.setState({ title });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { title } = this.state;
    return (
      <>
        <Title title={title} onChange={this.handleChange} />
      </>
    );
  }
}


