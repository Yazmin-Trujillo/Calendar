import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {

  it('when the page loads', () => {
   
    render(<App />);
    const buttonBack = screen.getByTestId('buttonBack')
    expect(buttonBack).toBeInTheDocument()
   
  });

})
// test('renders learn ', () => {
//   render(<App />);
//   const buttonBack = screen.getByTestId('buttonBack')
//   expect(buttonBack).toBeInTheDocument()
// });
