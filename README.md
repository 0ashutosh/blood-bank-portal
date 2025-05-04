# Blood Bank Portal

**Blood Bank Portal** is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that connects blood donors with recipients. It allows users to register, manage their donor profiles, and post or fulfill blood donation requests. The project demonstrates user authentication, data handling, and deployment of a modern web app.

## Features

- **User Authentication:** Secure sign-up and login (with JWT or similar) to protect user data.
- **Donor Profiles:** Users can create/edit profiles containing blood type, contact info, and location.
- **Blood Requests:** Donors and recipients can post and browse blood donation requests.
- **Search & Filtering:** Ability to search for donors by blood type or region.
- **Responsive UI:** Clean, responsive design (e.g. using Tailwind CSS or Material-UI) for desktop and mobile.
- **Dashboard (Optional):** Admin or organizational views for managing requests and approvals.

## Technologies Used

- **Front-End:** React.js with React Router for SPA navigation; Axios for API calls.
- **Back-End:** Node.js and Express.js serving a RESTful API.
- **Database:** MongoDB (hosted on MongoDB Atlas) using Mongoose for data modeling.
- **Authentication:** JSON Web Tokens (JWT) for stateless auth (passwords hashed).
- **Styling:** Tailwind CSS / Bootstrap / Material-UI for rapid UI development.
- **Deployment:** Vercel for the front-end and Render (or Heroku/Railway) for the back-end.

## Installation (Local Setup)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Blood-Bank-Portal.git
   cd Blood-Bank-Portal
   ```
2. **Set up the back-end:**

   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the root directory with your configuration:

     ```
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-secret-key
     ```

3. **Set up the front-end:**

   - Navigate to the client folder and install dependencies:

     ```bash
     cd client
     npm install
     ```

   - (If used) Create `client/.env` with any needed variables, e.g.:

     ```
     REACT_APP_API_URL=http://localhost:5000
     ```

4. **Run the application locally:**

   - In one terminal, start the server: `npm start` (or `npm run dev` for auto-reload).
   - In another terminal (inside `client/`), start the React app: `npm start`.
   - The app will open in your browser (typically at `http://localhost:3000`) and communicate with the local API server.

## Deployment

### Backend (Render)

Deploy the Node.js/Express server using Render (or an equivalent service):

- Log in to **Render** and create a **New Web Service**. Connect your GitHub repo containing the project.
- In the setup form:

  - Select **Node** as the runtime.
  - Set the **Build Command** to `npm install` and the **Start Command** to `node server.js` (or your server’s entry file).
  - Add environment variables (e.g. `MONGO_URI`, `JWT_SECRET`, etc.) in the Environment section.

- Deploy the service. Once live, Render will provide a URL (e.g. `https://your-backend.onrender.com`); copy this for the front-end.

### Frontend (Vercel)

Deploy the React front-end using Vercel:

- In the `client/` directory, add a `vercel.json` file to ensure SPA routing (fallback to index).
- Log in to **Vercel** and create a **New Project**. Import your GitHub repository.
- In Vercel’s configuration:

  - Choose the **React** framework preset.
  - Set the **Root Directory** to `client` (so Vercel builds the React app).
  - Define any environment variables under **Environment** (for example, `REACT_APP_API_URL = https://your-backend.onrender.com`).

- Deploy the project. Vercel will build your app and give you a live URL for the front-end.

### Deployed Application

- **Frontend (Live Site):** [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)
- **Backend API:** `https://your-backend-url.onrender.com` (or your chosen domain)
  _(Replace with actual URLs after deployment.)_

## Motivation

I built this Blood Bank Portal to apply my MERN stack skills to a meaningful problem. It was a college project and personal learning exercise, inspired by the idea of bridging donors and patients in need. Deploying a full-stack app online is a great way to demonstrate real-world skills. This project helped me practice secure authentication, REST API design, and full-stack deployment while contributing to a socially helpful application.

**References:** This project follows best practices shown in MERN tutorials and deployment guides. These resources highlight building a MERN blood donation app with user auth and deploying on Vercel/Render.
