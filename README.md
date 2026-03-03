
# React Router App

This project is a demonstration of a React app built with React Router, including nested routes, private routes, Context API for state management, and fetching data using useEffect and the axios. The app fetches data from a followers API and displays it accordingly.

## Installation

Install my-project with npm

```bash
  yarn install my-project
  cd my-project
```
    
## Features

React Router
✍🏼 The app utilizes React Router for declarative routing. It enables navigation between different components while maintaining a single-page application experience.

Nested Routes
✍🏼 Nested routes allow for a hierarchical structure in the application's URL. This enables components to be nested within each other, providing better organization and control over the routing behavior.

Private Routes
✍🏼 Private routes restrict access to certain routes based on authentication or authorization. In this project, private routes are implemented to protect sensitive content that should only be accessible to authenticated users.

Context API
✍🏼 The Context API is used for state management, providing a way to pass data through the component tree without having to pass props manually at every level. It's particularly useful for sharing global data such as user authentication status or theme preferences.

useEffect Fetch API and Axios
✍🏼 The useEffect hook is used to perform side effects in functional components. In this project, it's utilized for fetching data from an external API asynchronously. The Fetch API is used for making HTTP requests to the followers API and updating the component state with the retrieved data.