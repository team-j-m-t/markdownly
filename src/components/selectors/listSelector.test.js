import { getList } from './listSelector';

describe('list selector', () => {
  it('can test a document', () => {
    const state = {
      markdownList: {
        markdowns: [
          'help'
        ]
      }
    };
    const selectedMarkdown = getList(state);
    expect(selectedMarkdown).toEqual(['help']);
  });
});
