export const getDocument = state => {
  console.log(state, 'state');
  return state.markdown.markdown;
};
