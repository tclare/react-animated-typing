import React from "react";
import { render } from '@testing-library/react';
import { AnimatedTyper } from '../AnimatedTyper';

test('calling top level animated typer component renders text and cursor', () => {
  const { container } = render(<AnimatedTyper text={["Hello World", "Foo Bar Baz"]}/>);
  
  // Cursor line
  const cursorLineElements = container.getElementsByClassName("animated-typer__cursor-line");
  expect(cursorLineElements.length).toBe(1);

  // Cursor Box
  const cursorBoxElements = container.getElementsByClassName("animated-typer__cursor-box");
  expect(cursorBoxElements.length).toBe(1);
  
});
