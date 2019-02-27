import { 
  CREATE_DOCUMENT,
} from '../actions/documentAction';

const initialState = {
  document: [{ name: 'document', markdown: 'Sup there' }]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_DOCUMENT:
      return {
        document: [
          ...state.document,
          { ...action.payload  }
        ]
      };
  }
}

