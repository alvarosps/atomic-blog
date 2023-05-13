import React, { createContext, useReducer } from 'react';
import mockPosts from './mocks/posts';

const BlogContext = createContext();

const blogReducer = (state, action) => {
    let payloadId;
    switch (action.type) {
        case 'CREATE_POST':
            return [...state, action.payload];
        case 'EDIT_POST':
            payloadId = parseInt(action.payload.id, 10);
            return state.map((post) =>
                post.id === payloadId ? action.payload : post
            );
        case 'DELETE_POST':
            payloadId = parseInt(action.payload, 10);
            return state.filter((post) => post.id !== payloadId);
        default:
            return state;
    }
};

const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(blogReducer, mockPosts);

    return (
        <BlogContext.Provider value={{ posts: state, dispatch }}>
            {children}
        </BlogContext.Provider>
    );
};

export { BlogContext, BlogProvider };
