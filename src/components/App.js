import React from 'react';
import DocumentContainer from './containers/DocumentContainer';
// import EditTitle from './containers/EditTitle';
// import MarkdownFile from './containers/MarkdownFile';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      {/* <MarkdownFile />
      <EditTitle /> */}
      <DocumentContainer /> 
    </>
  );
}
