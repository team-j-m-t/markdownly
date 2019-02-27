import React from 'react';
import EditDoc from './containers/EditDoc';
import EditTitle from './containers/EditTitle';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <EditTitle />
      <EditDoc /> 
    </>
  );
}
