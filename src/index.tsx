import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AnimatedTyper } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <AnimatedTyper text={["Hello World!"]}/>
    </div>
  </React.StrictMode>
);

export { AnimatedTyper };