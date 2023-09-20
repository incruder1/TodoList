# TodoList
# Full Stack Todo List Project (MERN)
 

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is a full-stack Todo List web application built using the MERN stack (MongoDB, Express, React, Node.js). It provides a simple and intuitive way to manage your tasks and to-do lists. You can create, update, delete, and mark tasks as completed.

## ScreenShots
Preview.
![Screenshot from 2023-09-20 16-28-02](https://github.com/incruder1/TodoList/assets/56020041/60c4d079-c605-42c7-b4cb-1849dd83a759)

![Screenshot from 2023-09-20 16-27-53](https://github.com/incruder1/TodoList/assets/56020041/9e6e68a2-56b2-4b12-8b6c-bd75f6736d8e)


## Features

- User authentication (Register and Login)
- Create, Read, Update, and Delete tasks
- Mark tasks as completed
- Filter tasks by status (completed/incomplete)
- Sort tasks by date or priority
- Responsive design for mobile and desktop

## Technologies

- **Frontend**:
  - React
  - Axios (for HTTP requests)
  - Material-UI (for UI components)
  
- **Backend**:
  - Node.js
  - Express.js (for API)
  - MongoDB (for database)
  - Mongoose (for MongoDB object modeling)
  - JWT (JSON Web Tokens) for authentication
  
 ## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/full-stack-todolist.git
   ```

2. Change directory to the project folder:
   ```bash
   cd full-stack-todolist
   ```

3. Install dependencies for the frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Create a `.env` file in the `server` directory and configure the following environment variables:
   ```dotenv
   MONGODB_URI=your-mongodb-uri
 
   ```

5. Start the backend server:
   ```bash
   cd ../backend
   npm start
   ```

6. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```

7. Access the application in your web browser at `http://localhost:3000`

## Usage
 
- Create tasks by clicking the "Add Task" button and filling in the details.
- Update tasks by clicking on them and editing the information.
- Mark tasks as completed by clicking the checkbox.
- Delete tasks by clicking the trash icon.
- Filter tasks by completed or incomplete using the toggle button.
- Sort tasks by date or priority using the dropdown menu.

## API Endpoints

- **GET /api/tasks**: Get all tasks.
- **GET /api/tasks/:id**: Get a task by ID.
- **POST /api/tasks**: Create a new task.
- **PUT /api/tasks/:id**: Update a task by ID.
- **DELETE /api/tasks/:id**: Delete a task by ID.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Create a new Pull Request

 

**Happy task managing!** 🚀📝
