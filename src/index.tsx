import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AnimatedTyper } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cursorStyles: React.CSSProperties[] = [
  { backgroundColor: "green"},
  { backgroundColor: "orange"}
];

const textStyles: React.CSSProperties[] = [
  { fontFamily: "Times New Roman"},
  { fontFamily: "Georgia"}
];

root.render(
  <React.StrictMode>
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <AnimatedTyper 
        text={["Hello World!", "Foo Bar Baz"]}
        contributors={["Samantha", "Jonathan"]}
        cursorBoxStyles={(i => cursorStyles[i])}
        cursorLineStyles={(i => cursorStyles[i])}
        textStyles={i => textStyles[i]}
      />
    </div>
  </React.StrictMode>
);

export { AnimatedTyper };