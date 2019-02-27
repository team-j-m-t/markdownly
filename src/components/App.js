import React from 'react';
import Document from './containers/CreateDoc';

export default function App() {
  return (
    <>
      <div>
        <label> Title of Document</label>
        <input type="text"></input>
        <button> Add Document </button>
      </div>
      <h1>Markdown Editor</h1>
      <Document />
    </>
  );
}
