import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index'

test('Add +1', () => {
  render(<Provider store={store}>
    <App />
  </Provider>);

  const buttonElement = screen.getByText(/Increment/);
  buttonElement.click(buttonElement);

  const outputElement = screen.getByText(1);
  expect(outputElement.textContent).toBe("1")
});

test('Decrease -1', () => {
  render(<Provider store={store}>
    <App />
  </Provider>);

  const buttonElement = screen.getByText(/Decrement/);
  buttonElement.click(buttonElement);

  const outputElement = screen.getByText(0);
  expect(outputElement.textContent).toBe("0")
});
