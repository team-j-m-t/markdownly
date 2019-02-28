import React from 'react';
import EditDocContainer from './containers/EditDocContainer';
// import EditTitle from './containers/EditTitle';
// import MarkdownFile from './containers/MarkdownFile';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      {/* <MarkdownFile />
      <EditTitle /> */}
      <EditDocContainer /> 
    </>
  );
}
