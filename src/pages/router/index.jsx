import React, { useContext, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { GlobalStyles } from '@mui/material';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import BlogPage from '../BlogPage/BlogPage';
import ContactPage from '../ContactPage/ContactPage';
import Header from '../../components/organisms/Header/Header';
import CreatePostPage from '../CreatePostPage/CreatePostPage';
import { BlogContext } from '../../BlogContext';

const AppRouter = () => {
    const [searchResults, setSearchResults] = useState(null);
    const { posts } = useContext(BlogContext);

    const onSearch = (searchValue) => {
        const lowerCaseSearchValue = searchValue.toLowerCase();
        const filteredResults = posts.filter(
            (post) =>
                post.title.toLowerCase().includes(lowerCaseSearchValue) ||
                post.content.toLowerCase().includes(lowerCaseSearchValue)
        );
        setSearchResults(filteredResults);
    };

    return (
        <Router>
            <GlobalStyles
                styles={{
                    '*': {
                        margin: 0,
                        padding: 0,
                        boxSizing: 'border-box',
                    },
                }}
            />
            <Header onSearch={onSearch} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route
                    path="/blog/*"
                    element={<BlogPage searchResults={searchResults} />}
                />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog/create" element={<CreatePostPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
