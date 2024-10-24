 Advertisement Management Platform

Overview
This project aims to develop a complete advertisement management platform that allows vendors to post, manage, and showcase their adverts while enabling users to search and view these adverts seamlessly. The platform consists of a user-friendly front end and a robust back end.

 Features

 Frontend
1. User Interface (UI) for Vendors:
   - Form for vendors to post an advert including:
     - Title
     - Description
     - Image
     - Price
     - Category
   - Display success or error messages after posting.
   - Vendor dashboard to manage (view, edit, delete) their adverts.

2. UI for Users:
   - Homepage displaying all adverts in a grid or list view.
   - Search and filter options to find specific adverts by:
     - Category
     - Price
     - Keywords
   - Ad detail page for full advert details including:
     - Description
     - Image
     - Price

3. Authentication:
   - Login/Signup functionality for both vendors and users.
   - Ensure vendors can only post/manage their adverts while users can view and search.

4. Responsive Design:
   - The platform will be designed to work on both desktop and mobile devices.

 Backend
1. Authentication & Authorization:
   - Implement user roles (vendors and regular users).
   - Vendors will have permissions to create, edit, and delete their adverts.
   - Regular users will only have permission to view adverts.

2. API Endpoints:
   - POST /adverts: Create a new advert for vendors.
   - GET /adverts: Retrieve a list of all adverts for users.
   - GET /adverts/:id: Retrieve details of a specific advert.
   - PUT /adverts/:id:Update an advert for vendors.
   - DELETE /adverts/:id: Remove an advert for vendors.
   - POST /auth/signup: Signup endpoint for users.
   - POST /auth/login: Login endpoint for users.

3. Search and Filtering Logic:
   - Implement server-side search and filter logic based on advert title, category, or price.

4. Image Upload:
   - Handle image file uploads when vendors post adverts and store images in the backend.

Tech Stack
- Frontend:
  - HTML, CSS, JavaScript (and optionally a framework like React or Vue.js)
  
- Backend: 
  - Node.js with Express.js
  - Database (e.g., MongoDB, PostgreSQL, etc.)
  - Authentication (e.g., JWT, Passport.js)
  
- Additional Tools:
  - Multer for handling image uploads
  - Any necessary CSS frameworks (Bootstrap, Tailwind, etc.) for responsive design

 Installation
1. Clone the repository:
   bash
   git clone https://github.com/Code-collectives/eshop-api.git
   cd advertisement-management-platform

