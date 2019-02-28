import { MARKDOWN_ADD } from '../actions/markdownAction';

const initialState = {
  markdownList: []
};

export default function reducers(state = initialState, action) {
  switch(action.type) {
    case MARKDOWN_ADD:
      return {
        markdownList: [...state.markdownList, action.payload]
      };
    default:
      return state;
  }
}
