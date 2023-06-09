import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AnimatedTyper } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cursorStyles: React.CSSProperties[] = [
  { backgroundColor: "green"},
  { backgroundColor: "orange"},
  { backgroundColor: "dodgerblue"},
  { backgroundColor: "purple"}
];


root.render(
  <React.StrictMode>
    <div className="background-image-overlay"></div>
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100vh", margin: "0 10%", rowGap: 10 }}>
      <div className="surrounding-div">
        <div className="demo-div">
          <span className="surrounding-div-text">Create </span>
          <AnimatedTyper 
            text={["product", "design", "development", "customer service"]}
            contributors={["Tony", "Rachel", "Jesse", "Dillon"]}
            cursorBoxStyles={(i => cursorStyles[i])}
            cursorLineStyles={(i => cursorStyles[i])}
            textStyles={{ color: 'white', fontFamily: "Georgia"}}
          />
          <span className="surrounding-div-text">experiences</span>
        </div>
      </div>
      <span style={{ color: "white", zIndex: 5, fontSize: 24, fontFamily: "sans-serif", fontWeight: "lighter" }}> 
        that are sure to delight and amaze your users.
      </span>
    </div>
  </React.StrictMode>
);

export { AnimatedTyper };