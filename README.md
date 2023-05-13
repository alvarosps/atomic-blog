# Atomic Blog

Atomic Blog is a simple React-based blogging platform that uses Atomic Design principles to create a clean, maintainable, and scalable codebase. The project aims to demonstrate best practices in React application development, state management, and component architecture.
It uses the following technologies: React, React Router, React Hooks, Material UI, WebPack, Babel, Prettier, ESLint, Jest (for unit testing).

Created by @alvarosps

## Project Goals

1. Implement a clean and organized project structure using Atomic Design principles.
2. Demonstrate best practices in React application development, such as using functional components and hooks.
3. Showcase effective state management with React context.
4. Use Material-UI for a consistent and responsive user interface.
5. Employ Webpack, Babel, Prettier, and ESLint for a modern build process and code quality.
6. Write unit tests for all components using Jest.

## Atomic Design Structure

The project is organized following the Atomic Design methodology, which consists of five levels of components:

1. Atoms: Basic building blocks of the application, such as buttons, inputs, and typography.

-   Button,Logo, ImageHero, MenuLink,SearchInput,TextArea, TextInput

2. Molecules: Groups of atoms working together to form functional units, such as forms or cards.

-   ImageLink, MainMenu, PostForm, PostNotFound, PostsList, PostSummary, SearchBar, VideoEmbed

3. Organisms: Complex UI components composed of multiple molecules and/or atoms, such as navigation bars or post editor.

-   Header, PostDetails, PostEditor, SearchPosts

4. Templates: Page-level components that serve as placeholders for organisms and other components, defining the structure of a page.

-   AboutTemplate, BlogTemplate, ContactTemplate, HomeTemplate

5. Pages: The actual pages of the application, which combine templates and components to render the final UI.

-   AboutPage, BlogPage, ContactPage, CreatePostPage, HomePage, PostDetailsPage, PostEditorPage

The Atomic Design structure allows for better separation of concerns, easier maintenance, and increased reusability of components.

## Getting Started

To get started with the project, follow these steps:

1. Install the dependencies:
   `npm install`

2. Start the development server:
   `npm start`

### Testing

`npm run test`

### ESLint checks and ESLint Fixes

-   `npm run lint`
-   `npm run lint:fix`

### Prettier checks and Prettier Fixes

-   `npm run prettier`
-   `npm run prettier:fix`

## Deployment

-   This will be specific to the project and where it is being deployed.
-   For now, we have a build script, and a webpack suited for production.
-   Might need to add more scripts and files for deployment and hot-reloading in deployment (depends on the platform)
    `npm run build`
