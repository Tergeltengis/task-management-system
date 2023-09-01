# Task management system

This Task Management System (TMS) backend is built using Express.js and MongoDB. It provides a robust API for managing tasks, users, and task assignments.

## Features

✅ YES

- Task CRUD
- Task assignment to users
- Task status management (e.g., "todo," "in progress," "done")
- Task comments and discussions

❌ NO

- Authentication/Authorization
- Middleware
- Unit test (jest)
- Some fields doesn't include (`task.created_by`, `user.email` ... etc)

## Documentation

- High level architecture
- Database diagram
- Technical design document
  
[LINK](/docs/plan.md)

## Toolchain

| Tool                                     |
| ---------------------------------------- |
| Node JS                                  |
| MongoDB database (local or cloud-hosted) |
| Git (optional)                           |

## Setup

1. Run `yarn` to install dependencies

2. Create `.env` file with your database URI or NOT

3. Run `yarn start` to run.

4. Ready to check endpoints.

## API Documentation

### Routes

```
http://localhost:3000/api/task                (POST)
http://localhost:3000/api/task                (GET)
http://localhost:3000/api/task/:id            (PATCH)
http://localhost:3000/api/task/:id            (DELETE)
http://localhost:3000/api/task/own-tasks      (GET)
http://localhost:3000/api/task/assign/:taskId (PATCH)
```

### Models

```js
Task;
User;
Comment;
```
