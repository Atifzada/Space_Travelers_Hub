import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbarmenu from '../components/Navigation';

it('renders correctly', () => {
  const container = render(
    <BrowserRouter>
      <Navbarmenu />
    </BrowserRouter>,
  );

  expect(container).toMatchSnapshot();
});
