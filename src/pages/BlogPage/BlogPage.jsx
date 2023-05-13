import React, { useContext } from 'react';
import BlogTemplate from '../../components/templates/BlogTemplate/BlogTemplate';
import { Outlet } from 'react-router-dom';
import { BlogContext } from '../../BlogContext';

const BlogPage = ({ searchResults }) => {
    const { posts } = useContext(BlogContext);

    return (
        <BlogTemplate posts={searchResults || posts}>
            <Outlet />
        </BlogTemplate>
    );
};

export default BlogPage;
