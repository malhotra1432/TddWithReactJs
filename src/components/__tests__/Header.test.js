import React from 'react';
import { render } from '@testing-library/react';
import Header from '../header/Header';

test('renders learn react link', () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/header/i);
    expect(linkElement).toBeInTheDocument();
});