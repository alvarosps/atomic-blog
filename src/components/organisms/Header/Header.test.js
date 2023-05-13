import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('triggers onSearch when search button is clicked', () => {
    const onSearch = jest.fn();

    render(
        <BrowserRouter>
            <Header onSearch={onSearch} />
        </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText('Enter keyword');
    const searchButton = screen.getByRole('button', { name: 'Search' });

    fireEvent.change(searchInput, { target: { value: 'React' } });
    fireEvent.click(searchButton);

    expect(onSearch).toHaveBeenCalledWith('React');
});
