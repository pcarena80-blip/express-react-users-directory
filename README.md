# Users Directory Interview Assignment

## Project Overview

This project implements a small full-stack interview assignment using an Express.js REST API and a Vite React frontend. The backend exposes health and users endpoints, while the frontend fetches and displays users with loading, error, search, and empty-result states.

## Problem Statement

Build a Node.js and React application that demonstrates the ability to:

- Create clean REST API endpoints.
- Fetch backend data from a frontend application.
- Search users through the backend API.
- Handle loading, error, not-found, and empty-result states.
- Keep the code modular, readable, and easy to explain in an interview.

## Features

- `GET /health` endpoint for server status.
- `GET /users` endpoint that returns all users.
- `GET /users/:id` endpoint that returns one user or a `404` error.
- `GET /users?search=value` endpoint for case-insensitive name search.
- React UI built with Vite.
- Responsive large-card layout.
- Search input that fetches filtered results from the backend as the user types.
- Clear loading, error, and empty-result states.

## Technologies Used

- Node.js
- Express.js
- React
- Vite
- JavaScript
- CSS
- Fetch API

## Project Structure

```text
.
|-- client
|   |-- index.html
|   |-- vite.config.mjs
|   `-- src
|       |-- api
|       |   `-- usersApi.js
|       |-- components
|       |   |-- HealthStatus.jsx
|       |   |-- SearchInput.jsx
|       |   |-- StatusMessage.jsx
|       |   |-- UserCard.jsx
|       |   `-- UserList.jsx
|       |-- App.jsx
|       |-- main.jsx
|       `-- styles.css
|-- server
|   |-- controllers
|   |   |-- healthController.js
|   |   `-- userController.js
|   |-- data
|   |   `-- users.js
|   |-- middleware
|   |   |-- errorHandler.js
|   |   `-- notFoundHandler.js
|   |-- routes
|   |   |-- healthRoutes.js
|   |   `-- userRoutes.js
|   |-- utils
|   |   `-- HttpError.js
|   |-- app.js
|   |-- config.js
|   `-- index.js
|-- package.json
`-- README.md
```

## Installation

Install dependencies from the project root:

```bash
npm install
```

On Windows PowerShell, use:

```powershell
npm.cmd install
```

## Running the Backend

```bash
npm run backend
```

The backend runs on:

```text
http://localhost:3000
```

## Running the Frontend

Open a second terminal and run:

```bash
npm run frontend
```

The frontend runs on:

```text
http://127.0.0.1:5173
```

## Building the Frontend

```bash
npm run build
```

## API Endpoints

### Health Check

```http
GET /health
```

Response:

```json
{
  "status": "ok"
}
```

### Get All Users

```http
GET /users
```

Response:

```json
[
  {
    "id": "1",
    "fullName": "Steven"
  },
  {
    "id": "2",
    "fullName": "Hassan"
  },
  {
    "id": "3",
    "fullName": "Suham"
  }
]
```

### Get User by ID

```http
GET /users/1
```

Success response:

```json
{
  "id": "1",
  "fullName": "Steven"
}
```

Not found response:

```json
{
  "error": {
    "message": "User with id 99 was not found.",
    "statusCode": 404
  }
}
```

### Search Users

```http
GET /users?search=su
```

Response:

```json
[
  {
    "id": "3",
    "fullName": "Suham"
  }
]
```

## Search Functionality

The search input is controlled by React state. Whenever the user types, the frontend calls:

```text
GET /users?search=<typed-value>
```

The backend trims the search value and compares it against `fullName` in a case-insensitive way. If the search box is empty, the backend returns all users.

## Error Handling

- Invalid user IDs return `400`.
- Missing users return `404`.
- Unknown routes return `404`.
- Unexpected errors return `500`.
- The frontend shows an error message if an API request fails.
- Empty search results show a friendly empty state instead of a blank screen.

## Assumptions

- Users are stored in memory because the assignment does not require a database.
- User IDs are numeric strings.
- Search is performed by full name only, as requested.
- The frontend runs separately from the backend during development.

## Future Improvements

- Add automated API route tests and React component tests.
- Add request logging for backend observability.
- Move users into a database if persistence is required.
- Add pagination if the users list becomes large.
- Add a production build flow that serves the compiled frontend from Express.
