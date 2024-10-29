import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import ViewDashboard from './view-dashboard';
import 'element-internals-polyfill';

test('renders ViewDashboard component', () => {
  const wrapper = render(<ViewDashboard />);
  expect(wrapper).toBeTruthy();
});