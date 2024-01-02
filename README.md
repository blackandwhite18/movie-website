# Movie Website

This project is a movie website built with React, TypeScript, and Vite. It uses Redux for state management and Axios for API calls. The website displays a list of movies, which can be filtered by genre and year.

## Features

- Fetches and displays a list of movies from an API
- Allows filtering of movies by genre and year
- Infinite scrolling feature to load more movies as the user scrolls down
- Uses Redux for state management
- Uses Axios for API calls

## How to Run

1. Clone the repository to your local machine.
2. Install the dependencies by running npm install in the project root directory.
3. Start the development server by running npm run dev.
4. Click on the link provided in the terminal (example -> http://localhost:5173/) and open it in the browser to view the application.

## Scripts

- npm run dev: Starts the development server.
- npm run build: Builds the application for production.
- npm run lint: Runs the linter to check for code style issues.
- npm run preview: Serves the production build of the application for preview.

## Dependencies

The project's dependencies are listed in the `package.json` file. The main dependencies include React, Redux, Axios, and Vite. The project also uses several development dependencies for linting and TypeScript support.

## Styling

The project uses CSS modules for styling. Each React component has an associated CSS module file in the same directory.

## Redux State Management

The project uses Redux for state management. The Redux slices are located in the `src/components/movies/movieSlice.ts` and `src/components/genres/genreSlice.ts` files.

## API Calls

The project uses Axios for API calls. The API calls are made in the Redux slices.

## Project Structure

The main application code is located in the src directory. This includes React components, Redux slices, and CSS modules. The vite.config.ts file contains configuration for the Vite build tool. The tsconfig.json and tsconfig.node.json files contain TypeScript configuration.
