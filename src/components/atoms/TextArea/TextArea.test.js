import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextArea from './TextArea';

test('renders textarea and handles user input', () => {
    const mockOnChange = jest.fn();
    render(<TextArea label="Content" onChange={mockOnChange} />);
    const textArea = screen.getByRole('textbox');

    fireEvent.change(textArea, { target: { value: 'Sample content' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
});
