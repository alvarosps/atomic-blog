import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('triggers onSearch when search button is clicked', () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);

    const searchInput = screen.getByPlaceholderText('Enter keyword');
    const searchButton = screen.getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'React' } });
    fireEvent.click(searchButton);

    expect(onSearch).toHaveBeenCalledWith('React');
});
