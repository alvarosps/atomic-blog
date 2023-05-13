const posts = [
    {
        id: 1,
        title: 'Post 1: Introduction to React',
        content:
            'React is a popular JavaScript library for building user interfaces. Developed by Facebook, it enables developers to create reusable components and manage their state. Components are the building blocks of a React application, and they can be composed together to create complex user interfaces. React utilizes a virtual DOM to efficiently update the UI, making it performant and responsive.',
        imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
        id: 2,
        title: 'Post 2: Understanding Redux',
        content:
            "Redux is a predictable state container for JavaScript apps. It's commonly used with React to manage the application state in a centralized store. Redux enforces a unidirectional data flow, which helps in managing the state of the application and simplifies debugging. Actions describe what happened, and reducers determine how the state should change in response to those actions. Middleware can be used to handle side effects.",
        imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
        id: 3,
        title: 'Post 3: React Hooks',
        content:
            "React Hooks were introduced in React 16.8 and allow developers to use state and other React features without writing a class component. Hooks are functions that let you 'hook into' React state and lifecycle features from function components. Some of the most commonly used hooks are useState, useEffect, and useContext. Custom hooks can be created to share stateful logic between components.",
        imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
        id: 4,
        title: 'Post 4: Working with React Router',
        content:
            "React Router is a popular library for handling navigation in React applications. It allows developers to create Single Page Applications (SPAs) with ease. React Router provides a declarative way to define the application's routes, handling both client-side and server-side rendering. The library provides various components such as BrowserRouter, Route, Link, and NavLink to create and manage the application's routes.",
        imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
        id: 5,
        title: 'Post 5: Optimizing React Performance',
        content:
            'Performance is an essential aspect of web development, and React provides various techniques and tools to optimize the performance of your application. Some performance optimization techniques include memoization, using PureComponent, and implementing lazy loading for components. React DevTools can be used to identify performance bottlenecks, and the built-in React Profiler can help in analyzing the component rendering performance.',
        imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
        id: 6,
        title: 'Post 6: Advanced React Patterns',
        content:
            "As you gain experience with React, you'll come across advanced patterns that can help you build more complex and maintainable applications. Some of these patterns include the Compound Components pattern, the Render Props pattern, and the Higher-Order Components pattern. These patterns allow for better code organization, improved reusability, and increased flexibility when building React applications.",
        imageUrl: 'https://via.placeholder.com/300x200',
    },
];

export default posts;
