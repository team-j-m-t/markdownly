import { ADD_MARKDOWN, createMarkdown } from './listAction';

describe('listAction test', () => {
  it('creates a list', () => {
    const action = createMarkdown('Congrats KEVIN');
    
    expect(action).toEqual({
      type: ADD_MARKDOWN,
      payload: 'Congrats KEVIN'
    });
  });
});
