export const getList = state => {
  console.log('stateSelector', state.markdownList.markdowns);
  return state.markdownList.markdowns;
};
