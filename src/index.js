import React from 'react';
import { createRoot } from 'react-dom/client';
import { BlogProvider } from './BlogContext';
import App from './App';

const root = document.getElementById('root');

if (root) {
    const container = createRoot(root);
    container.render(
        <BlogProvider>
            <App />
        </BlogProvider>
    );
}
