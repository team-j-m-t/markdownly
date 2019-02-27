export const UPDATE_DOCUMENT = 'UPDATE_DOCUMENT';
export const UPDATE_TITLE = 'UPDATE_TITLE';

export const updateDocument = markdown => ({
  type: UPDATE_DOCUMENT,
  payload:  markdown 
});

export const updateTitle = title => ({
  type: UPDATE_TITLE,
  payload: title
});
