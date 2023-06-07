import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AnimatedTyper } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const styles = [
  { backgroundColor: "green"},
  { backgroundColor: "orange"}
];

root.render(
  <React.StrictMode>
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <AnimatedTyper 
        text={["Hello World!", "Foo Bar Baz"]}
        contributors={["Samantha Jones", "Jonathan"]}
        cursorBoxStyles={(i => styles[i])}
        cursorLineStyles={(i => styles[i])}
      />
    </div>
  </React.StrictMode>
);

export { AnimatedTyper };