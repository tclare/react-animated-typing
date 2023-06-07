import React from 'react';
import { render, screen } from '@testing-library/react';
import { AnimatedTyper } from './App';

test('renders learn react link', () => {
  render(<AnimatedTyper text={["Hello World", "Foo Bar Baz"]}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
