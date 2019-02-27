export const CREATE_DOCUMENT = 'CREATE_DOCUMENT';

export const createDocument = markdown => ({
  type: CREATE_DOCUMENT,
  payload: { markdown }
});

