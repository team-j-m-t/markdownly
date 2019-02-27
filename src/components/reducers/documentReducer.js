import { 
  CREATE_DOCUMENT
} from '../actions/documentAction';

const initialState = {
  document: 'Sup there' 
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_DOCUMENT:
      return {
        document: action.payload
      };
    default: 
      return state;
  }
}

