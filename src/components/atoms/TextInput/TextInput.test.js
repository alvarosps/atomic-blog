import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

test('renders input and handles user input', () => {
    const mockOnChange = jest.fn();
    render(<TextInput label="Title" onChange={mockOnChange} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Sample title' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
});
