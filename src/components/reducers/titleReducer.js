import {
  UPDATE_TITLE
} from '../actions/documentAction';

const initialState = {
  title: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_TITLE:
      return {
        title: action.payload
      };
    
    default: 
      return state;
  }
}
