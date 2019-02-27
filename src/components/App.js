import React from 'react';
import EditDoc from './containers/EditDoc';

export default function App() {
  return (
    <>
      <div>
        <label> Title of Document</label>
        <input type="text"></input>
      </div>
      <h1>Markdown Editor</h1>
      <EditDoc />
    </>
  );
}
