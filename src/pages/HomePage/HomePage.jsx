import React, { useContext } from 'react';
import { BlogContext } from '../../BlogContext';
import HomeTemplate from '../../components/templates/HomeTemplate/HomeTemplate';

const HomePage = () => {
    const { posts } = useContext(BlogContext);

    return <HomeTemplate posts={posts} />;
};

export default HomePage;
