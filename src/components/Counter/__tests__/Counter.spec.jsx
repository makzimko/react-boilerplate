import React from 'react';

import { Counter } from '../Counter';

describe('Counter component', () => {
  it('should do something', () => {
    const component = shallow(<Counter />);

    expect(component).toMatchSnapshot();
  });
});
