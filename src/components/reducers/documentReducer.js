const initialState = {
  document: [{ name: 'document', markdown: 'Sup there' }]
};

const CREATE_DOCUMENT = 'CREATE_DOCUMENT';

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

