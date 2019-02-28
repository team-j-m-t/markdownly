import React, { PureComponent } from 'react';
import store from '../../store';
import { updateTitle } from '../actions/documentAction';
import { getTitle } from '../selectors/titleSelector';
import Title from '../presentational/Title';
import TitleDisplay from '../presentational/TitleDisplay';

export default class EditTitle extends PureComponent {
  state = {
    title: ''
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
    if(this.unsubscribe) {
      this.unsubscribe();
    }
  }
  
  handleChange = ({ target }) => {
    //need to create reduce for displaytextstate
    // this.setState({ [target.name]: target.value });
    const factoryTitle = {
      title: updateTitle
    };

    store.dispatch(factoryTitle[target.name](target.value));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title } = this.state;
    store.dispatch(updateTitle(title));
    this.setState({ title });
  };

  render() {
    const { title } = this.state;
    return (
      <>
        <Title title={title} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        <TitleDisplay title={title} />
      </>
    );
  }
}
