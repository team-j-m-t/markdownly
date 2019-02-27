import { 
  CREATE_DOCUMENT
} from '../actions/documentAction';

const initialState = {
  markdown: '' 
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_DOCUMENT:
      return {
        markdown: action.payload
      };
    default: 
      return state;
  }
}

