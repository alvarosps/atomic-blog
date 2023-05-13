import React, { useContext } from 'react';
import PostDetails from '../../components/organisms/PostDetails/PostDetails';
import { useParams } from 'react-router-dom';
import PostNotFound from '../../components/molecules/PostNotFound/PostNotFound';
import { BlogContext } from '../../BlogContext';

const PostDetailsPage = () => {
    const { postId } = useParams();
    const { posts } = useContext(BlogContext);
    const post = posts.find((p) => p.id === parseInt(postId, 10));

    if (!post) {
        return <PostNotFound />;
    }

    return <PostDetails post={post} />;
};

export default PostDetailsPage;
