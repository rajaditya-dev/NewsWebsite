# Daily News

A full-stack bilingual news publishing website built with Node.js, Express, MongoDB, and vanilla HTML/CSS/JavaScript. The project includes a bold magazine-style public homepage, a detailed article reading page, and a modern admin studio for publishing and deleting news articles.

## Features

- Magazine-style news homepage with a cinematic masthead, featured lead story, editor's picks, and responsive news cards.
- Live date and time display that updates automatically.
- Category filtering for India, Politics, Technology, World, Sports, and Entertainment.
- Language filtering for English and Hindi articles.
- Search support across article title and content.
- Full article detail page with hero image, metadata, story body, and story file summary.
- Admin studio for publishing articles with title, author, image URL, content, language, category, and date/time.
- Admin publish date/time auto-fills with the current local date and time.
- Admin archive list with article preview links and delete workflow.
- REST API for listing, filtering, creating, reading, and deleting news articles.
- Static frontend served directly by the Express backend.

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Styling: Custom responsive CSS with editorial typography
- Runtime: Node.js

## Project Structure

```text
liveNewswebsite/
  backend/
    models/
      newsModel.js
    routes/
      newsRoutes.js
    server.js
  frontend/
    assets/
      original-a678c52db910438d85ecfca032fb7cb4.jpg
    admin.html
    article.html
    index.html
  .env.example
  .gitignore
  package-lock.json
  package.json
  README.md
```

## Pages

- Homepage: `http://localhost:5050/`
- Admin Studio: `http://localhost:5050/admin.html`
- Article Page: `http://localhost:5050/article.html?id=<article_id>`
- API Base URL: `http://localhost:5050/api/news`

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rajaditya-dev/NewsWebsite.git
cd NewsWebsite
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string_here
PORT=5050
```

You can use `.env.example` as a template.

Important: never commit your real `.env` file. It contains private credentials and is already ignored by `.gitignore`.

### 4. Start the server

```bash
npm start
```

If PowerShell blocks `npm` on Windows, use:

```powershell
npm.cmd start
```

You can also run the backend directly:

```bash
node backend/server.js
```

The app should start at:

```text
http://localhost:5050
```

## API Documentation

### Get all news

```http
GET /api/news
```

Example:

```text
http://localhost:5050/api/news
```

### Filter news

Supported query parameters:

- `language`: `en` or `hi`
- `category`: `India`, `Politics`, `Technology`, `World`, `Sports`, or `Entertainment`
- `query`: text search across title and content

Examples:

```text
http://localhost:5050/api/news?category=India
http://localhost:5050/api/news?language=en
http://localhost:5050/api/news?query=modi
http://localhost:5050/api/news?category=Technology&language=en
```

### Get one article

```http
GET /api/news/:id
```

Example:

```text
http://localhost:5050/api/news/ARTICLE_ID_HERE
```

### Create an article

```http
POST /api/news
```

Headers:

```http
Content-Type: application/json
```

Example request body:

```json
{
  "title": "India Test News",
  "author": "Daily News Desk",
  "image": "https://example.com/image.jpg",
  "content": "This is a test article for the Daily News website.",
  "date": "2026-04-08T15:30",
  "language": "en",
  "category": "India"
}
```

### Delete an article

```http
DELETE /api/news/:id
```

Example:

```text
http://localhost:5050/api/news/ARTICLE_ID_HERE
```

## MongoDB Schema

Each article uses this structure:

```js
{
  title: String,
  content: String,
  author: String,
  image: String,
  date: Date,
  language: "en" | "hi",
  category: String
}
```

## Admin Workflow

1. Open `http://localhost:5050/admin.html`.
2. Fill the story headline, author, image URL, language, category, and story body.
3. The publish date/time field is filled automatically with the current local time.
4. Click `Publish Story`.
5. Use the archive panel to preview or select article IDs.
6. Paste or select an article ID and click `Delete Article` to remove a story.

## Deployment Notes

- The server uses `process.env.PORT || 5050`, so deployment platforms can inject their own port automatically.
- Add `MONGODB_URI` as an environment variable in your hosting platform.
- Do not upload the real `.env` file to GitHub.
- The frontend is served by Express from the `frontend` folder, so a separate frontend build step is not required.
- Recommended Node command for deployment:

```bash
npm start
```

## Important Security Notes

This project is suitable for learning, portfolio work, and local demos, but before a real public production deployment you should add:

- Admin authentication and authorization.
- Protection for article creation and delete routes.
- Input validation and rate limiting.
- Safer image URL validation.
- Stronger error handling and production logging.
- Secret rotation if any database credentials were ever exposed.

The current admin page and API routes allow publishing and deleting articles without login protection, so do not expose the admin route publicly until authentication is added.

## GitHub Notes

Recommended files to commit:

- `backend/`
- `frontend/`
- `package.json`
- `package-lock.json`
- `.gitignore`
- `.env.example`
- `README.md`

Do not commit:

- `.env`
- `node_modules/`

## Useful Commands

```bash
npm install
npm start
node backend/server.js
git status
git add .
git commit -m "Update project"
git push
```

## License

This project currently uses the `ISC` license from `package.json`.
