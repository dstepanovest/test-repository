# test-repository
This test repository was created to test AI tools

## Applications Directory

This repository contains two applications in the `applications` directory:

1. **Backend**: An Express.js application that provides a simple API
2. **Frontend**: A Next.js application that interacts with the backend API

### Backend Application

The backend is built with Express.js and provides a simple REST API.

#### Setup Instructions

```bash
# Navigate to the backend directory
cd applications/backend

# Install dependencies
npm install

# Start the server
npm start
```

The server will start on port 3001 by default.

#### API Endpoints

- `GET /ping`: Returns a simple "pong" response to verify the server is running

### Frontend Application

The frontend is built with Next.js and provides a simple UI to interact with the backend API.

#### Setup Instructions

```bash
# Navigate to the frontend directory
cd applications/frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:3000`.

### How It Works

The frontend application includes a button that, when clicked, sends a request to the backend's `/ping` endpoint. The backend responds with "pong", and the frontend displays this response.

This simple interaction demonstrates the communication between the frontend and backend applications.

### Development

To work on both applications simultaneously:

1. Start the backend server in one terminal
2. Start the frontend development server in another terminal
3. Make changes to either application as needed