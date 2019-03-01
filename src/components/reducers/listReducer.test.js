import reducer from './listReducer';

describe('list reducer', () => {
  it('can update a list', () => {
    const state = {
      markdowns: []
    };
    const updatedState = reducer(state, {
      type: 'ADD_MARKDOWN',
      payload: 'hello'
    });

    expect(updatedState).toEqual({
      markdowns: ['hello']
    });
  });
});
