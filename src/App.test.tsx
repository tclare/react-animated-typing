import React from 'react';
import { render, screen } from '@testing-library/react';
import { AnimatedTyper } from './App';

test('renders learn react link', () => {
  render(<AnimatedTyper text={["Hello World"]}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
