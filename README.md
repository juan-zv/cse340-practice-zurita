# CSE 340 Practice Project (Zurita)

A practice web application built for CSE 340, demonstrating a full-stack Node.js and Express architecture with server-side rendering using EJS and a PostgreSQL database.

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (`pg`), `connect-pg-simple` for session storage
- **Templating:** EJS (Embedded JavaScript)
- **Authentication/Security:** `bcrypt`, `express-session`, `express-validator`
- **Package Manager:** `pnpm`

## 📁 Project Structure

This project follows an MVC (Model-View-Controller) pattern:

- `server.js`: Entry point of the application.
- `src/routes.js`: Main router mapping endpoints to controllers.
- `src/controllers/`: Request handlers logic (Catalog, Faculty, Forms).
- `src/models/`: Database interaction and queries.
- `src/views/`: EJS templates for server-side rendering.
- `src/middleware/`: Custom middleware (auth, validation, global utilities).
- `public/`: Static assets (CSS, Images, Client-side JS).

## 🛠️ Setup Instructions

### Prerequisites
- Node.js installed
- `pnpm` package manager
- PostgreSQL server running

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up the environment variables:
   Create a `.env` file in the root directory (matching the expectations of the `--env-file=.env` flag) and provide necessary database credentials and session secrets.
4. Set up the database:
   Run the SQL scripts located in `src/models/sql/` to structure and seed your database.

### Running the App

**Development Mode (auto-reloads):**
```bash
pnpm run dev
```

**Production Mode:**
```bash
pnpm start
```
