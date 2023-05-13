import React, { useContext } from 'react';
import PostEditor from '../../components/organisms/PostEditor/PostEditor';
import { useParams, useNavigate } from 'react-router-dom';
import PostNotFound from '../../components/molecules/PostNotFound/PostNotFound';
import { BlogContext } from '../../BlogContext';

const PostEditorPage = () => {
    const { posts, dispatch } = useContext(BlogContext);
    const { postId } = useParams();
    const post = posts.find((p) => p.id === parseInt(postId, 10));
    const navigate = useNavigate();

    if (!post) {
        return <PostNotFound />;
    }

    const onSubmit = (values) => {
        dispatch({
            type: 'EDIT_POST',
            payload: { ...post, ...values },
        });
        navigate(`/blog/${postId}`);
    };

    const onDelete = () => {
        dispatch({
            type: 'DELETE_POST',
            payload: parseInt(postId, 10),
        });
        navigate('/blog');
    };

    return (
        <PostEditor
            onSubmit={onSubmit}
            onDelete={onDelete}
            initialValues={post}
            aria-label="post-editor-page"
        />
    );
};

export default PostEditorPage;
