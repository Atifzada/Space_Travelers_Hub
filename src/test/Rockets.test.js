import React from 'react';
import { it, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets';
import store from '../redux/store';

it('renders correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Rockets />
      </BrowserRouter>
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
