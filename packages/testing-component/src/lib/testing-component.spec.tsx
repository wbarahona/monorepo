import { render } from '@testing-library/react';

import TestingComponent from './testing-component';

describe('TestingComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestingComponent />);
    expect(baseElement).toBeTruthy();
  });
});
