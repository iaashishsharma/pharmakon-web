# Pharmakon Site Admin

The public website is served through the Next.js App Router while retaining the existing HTML, CSS, images, and browser scripts so the design stays unchanged. Original source pages remain in `../conztra`; deployable copies are in `frontend/public/pages` and `frontend/public/assets`.

## Requirements

- Node.js LTS and npm
- MongoDB Atlas database (recommended for persistent changes)
- VS Code Live Server extension is optional for previewing the original source pages

## Configure the backend

From `pharmakon-app` in PowerShell:

```powershell
Copy-Item backend/.env.example backend/.env
```

Edit `backend/.env` and set:

- `MONGODB_URI`: MongoDB Atlas connection string
- `ADMIN_USERNAME`: the admin login name
- `ADMIN_PASSWORD`: a unique password
- `ADMIN_SESSION_SECRET`: a long random secret used to sign the secure session cookie
- `CLIENT_URL`: the Next admin origin and the Live Server origin, normally `http://localhost:3000,http://localhost:5500,http://127.0.0.1:5500`

Never commit `backend/.env` or share its secrets.

On the first backend start, the importer reads product records from the existing eight category HTML pages and inserts missing records into MongoDB. Existing records are not overwritten. Product images stay in `conztra/assets/img/products`.

## Run locally

Terminal 1, API and MongoDB connection:

```powershell
cd D:\pharmakon\pharmakon-app\backend
npm install
npm run dev
```

Terminal 2, Next.js public site and admin panel:

```powershell
cd D:\pharmakon\pharmakon-app\frontend
npm install
npm run dev
```

Open the public site at `http://localhost:3000/`. The original HTML pages are also available through Next routes such as `/about`, `/dental-care.html`, and `/news-grid.html`.

Open the admin panel at `http://localhost:3000/admin` and sign in with the credentials from `backend/.env`. Product pages and the blog grid request current records from the backend. Contact forms save enquiries through the API.

## Admin features

- Add, edit, and remove products
- Set the care area, product filter group, composition, packing, and existing-site image path
- Write, edit, draft, publish, and delete articles shown in the existing `news-grid.html` blog layout
- Update company/contact details, social URLs, homepage hero copy, About copy, and Vision/Mission copy in **Site content**
- View contact-form enquiries and update their status
- Public category pages use MongoDB-managed products while preserving their existing HTML/CSS; if the API is unavailable, their original embedded catalogue remains visible
- The existing home, About, Vision/Mission, Contact, PCD, manufacturing, and product-category pages load the editable site settings without changing their layouts

Without a valid `MONGODB_URI`, the API uses temporary in-memory data. Changes are lost when the backend stops.

## Production

Deploy the backend and Next.js app, then set `MONGODB_URI`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, and an exact production `CLIENT_URL`. Set `API_SERVER_URL` for the Next.js rewrite and define `window.PHARMAKON_API_URL` before the legacy browser integration scripts to point to the deployed API. Use HTTPS in production.
