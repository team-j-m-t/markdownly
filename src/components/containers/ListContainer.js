import { connect } from 'react-redux';
import List from '../presentational/List';
import { getList } from '../selectors/listSelector';
// import { createMarkdown } from '../actions/listAction';

const mapStateProps = state => ({
  list: getList(state)
});

const ListContainer = connect(
  mapStateProps
)(List);

export default ListContainer;
