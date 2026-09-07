# Notes API

A RESTful Notes API built with **Node.js, Express.js, MongoDB, Mongoose, JWT, and bcryptjs**.

The API provides user authentication and protected CRUD operations for personal notes.

---

## Features

* User registration
* User login
* JWT authentication
* HTTP-only cookie authentication
* Authentication middleware
* Get current authenticated user
* Create notes
* Get user's notes
* Update notes
* Delete notes
* Password hashing with bcrypt
* MongoDB database integration
* CORS support

---

## Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT**
* **bcryptjs**
* **cookie-parser**
* **cors**
* **dotenv**
* **nodemon**

---

# API Base URL

For local development:

```text
http://localhost:PORT
```

All API endpoints are grouped into:

```text
/api/auth
/api/notes
```

---

# API Endpoints

## Health Check

### `GET /`

Returns a welcome message from the API.

**Authentication:** Not required

---

### `GET /api/auth/health`

Checks whether the API is running correctly.

**Authentication:** Not required

**Purpose:**
Useful for checking API/server health.

---

# Authentication Endpoints

Base path:

```text
/api/auth
```

## 1. Register User

### `POST /api/auth/register`

Creates a new user account.

**Authentication:** Not required

**Purpose:**

* Create a new user
* Hash the password
* Generate JWT
* Set authentication cookie
* Return user information

---

## 2. Login User

### `POST /api/auth/login`

Authenticates an existing user.

**Authentication:** Not required

**Purpose:**

* Verify email
* Verify password
* Generate JWT
* Set authentication cookie
* Return authenticated user information

---

## 3. Get Current User

### `GET /api/auth/me`

Returns information about the currently authenticated user.

**Authentication:** Required

**Middleware:**

```text
authMiddleware
```

**Route flow:**

```text
GET /api/auth/me
        ↓
authMiddleware
        ↓
authControllerMe
```

The `authMiddleware` verifies the JWT and adds the authenticated user's information to:

```text
req.user
```

The controller then uses the authenticated user's ID to retrieve the user.

---

## 4. Logout User

### `POST /api/auth/logout`

Logs the user out.

**Authentication:** Not required

**Purpose:**

* Clear the authentication cookie
* End the current login session

---

# Authentication API Summary

| Method | Endpoint             | Auth | Description      |
| ------ | -------------------- | ---- | ---------------- |
| `POST` | `/api/auth/register` | ❌    | Register user    |
| `POST` | `/api/auth/login`    | ❌    | Login user       |
| `GET`  | `/api/auth/me`       | ✅    | Get current user |
| `POST` | `/api/auth/logout`   | ❌    | Logout user      |
| `GET`  | `/api/auth/health`   | ❌    | Check API health |

---

# Notes Endpoints

Base path:

```text
/api/notes
```

Notes are associated with the authenticated user.

Protected endpoints use:

```text
authMiddleware
```

---

## 1. Get All Notes

### `GET /api/notes/allNotes`

Returns all notes belonging to the currently authenticated user.

**Authentication:** Required

**Middleware:**

```text
authMiddleware
```

**Purpose:**

* Verify the user
* Get the authenticated user's ID
* Retrieve that user's notes

---

## 2. Create Note

### `POST /api/notes/create`

Creates a new note for the authenticated user.

**Authentication:** Required

**Middleware:**

```text
authMiddleware
```

**Purpose:**

* Verify the user
* Validate note data
* Create the note
* Associate the note with the logged-in user

---

## 3. Update Note

### `PUT /api/notes/update`

Updates an existing note.

**Authentication:** Required

**Middleware:**

```text
authMiddleware
```

**Purpose:**

* Verify the authenticated user
* Find the note
* Update the note
* Ensure the note belongs to the authenticated user

---

## 4. Delete Note

### `DELETE /api/notes/delete/:id`

Deletes a specific note using its ID.

**Authentication:** Required

**Middleware:**

```text
authMiddleware
```

Example:

```text
DELETE /api/notes/delete/NOTE_ID
```

**Purpose:**

* Verify the authenticated user
* Find the note
* Verify note ownership
* Delete the note

---

# Notes API Summary

| Method   | Endpoint                | Auth | Description      |
| -------- | ----------------------- | ---- | ---------------- |
| `GET`    | `/api/notes/allNotes`   | ✅    | Get user's notes |
| `POST`   | `/api/notes/create`     | ✅    | Create a note    |
| `PUT`    | `/api/notes/update`     | ✅    | Update a note    |
| `DELETE` | `/api/notes/delete/:id` | ✅    | Delete a note    |

---

# Authentication Middleware

Protected routes use the `authMiddleware`.

Example:

```text
authRoutes.get(
    "/me",
    authMiddleware,
    authControllerMe
);
```

The middleware runs **before** the controller.

### Request Flow

```text
Client
  │
  ▼
API Request
  │
  ▼
authMiddleware
  │
  ├── Token exists?
  │
  ├── Token valid?
  │
  └── Get user ID
  │
  ▼
req.user
  │
  ▼
Controller
  │
  ▼
Database
  │
  ▼
Response
```

This keeps authentication logic separate from the controllers.

---

# Authentication Flow

```text
Register / Login
       │
       ▼
Generate JWT
       │
       ▼
Set HTTP-only Cookie
       │
       ▼
Client
       │
       ▼
Protected API Request
       │
       ▼
authMiddleware
       │
       ▼
Verify JWT
       │
       ▼
req.user
       │
       ▼
Protected Controller
```

---

# User Model

A user contains:

| Field       | Description           |
| ----------- | --------------------- |
| `username`  | Unique username       |
| `name`      | User's name           |
| `email`     | Unique email          |
| `password`  | Hashed password       |
| `createdAt` | Account creation date |

Passwords are hashed before being stored in the database.

---

# Note Model

A note contains:

| Field         | Description             |
| ------------- | ----------------------- |
| `title`       | Note title              |
| `description` | Note content            |
| `user`        | Reference to note owner |
| `createdAt`   | Creation date           |
| `updatedAt`   | Last update date        |

Each note is connected to a user through the `user` field.

```text
User
 │
 ├── Note
 ├── Note
 └── Note
```

---

# Complete Endpoint List

| Method   | Endpoint                | Auth | Purpose          |
| -------- | ----------------------- | ---- | ---------------- |
| `GET`    | `/`                     | ❌    | API welcome      |
| `GET`    | `/api/auth/health`      | ❌    | API health check |
| `POST`   | `/api/auth/register`    | ❌    | Register         |
| `POST`   | `/api/auth/login`       | ❌    | Login            |
| `GET`    | `/api/auth/me`          | ✅    | Current user     |
| `POST`   | `/api/auth/logout`      | ❌    | Logout           |
| `GET`    | `/api/notes/allNotes`   | ✅    | Get all notes    |
| `POST`   | `/api/notes/create`     | ✅    | Create note      |
| `PUT`    | `/api/notes/update`     | ✅    | Update note      |
| `DELETE` | `/api/notes/delete/:id` | ✅    | Delete note      |

---

# Environment Variables

The application uses environment variables for configuration.

```text
PORT
MONGO_URI
JWT_SECRET
CLIENT_URL
NODE_ENV
```

Keep sensitive values inside `.env` and never commit them to GitHub.

---

# Installation

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

# Project Flow

```text
Frontend
   │
   ▼
Express API
   │
   ├── Auth Routes
   │      │
   │      └── authMiddleware
   │
   └── Notes Routes
          │
          └── authMiddleware
                  │
                  ▼
               MongoDB
```

---

# Security

The API uses:

* JWT authentication
* HTTP-only cookies
* Password hashing
* Authentication middleware
* User-specific note access
* Environment variables for secrets
* CORS configuration

---

# Future Improvements

* [ ] Add refresh token authentication
* [ ] Add centralized error handling
* [ ] Add request validation
* [ ] Add note ownership validation
* [ ] Add pagination
* [ ] Add note search
* [ ] Add note categories/tags
* [ ] Add Swagger/OpenAPI documentation
* [ ] Add automated tests
* [ ] Add rate limiting

---

## License

This project is licensed under the **MIT License**.
