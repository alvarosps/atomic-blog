import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

test('renders input and handles user input', () => {
    const mockOnChange = jest.fn();
    render(<SearchInput onChange={mockOnChange} />);
    const searchInput = screen.getByRole('textbox');

    fireEvent.change(searchInput, { target: { value: 'React' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
});
