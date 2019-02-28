import React from 'react';
import DocumentContainer from './containers/DocumentContainer';
import ListContainer from './containers/ListContainer';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <DocumentContainer /> 
      <ListContainer />
    </>
  );
}
