
# Sports Club Website

A modern, responsive website for a sports club built with React, TypeScript, Tailwind CSS, and Express.js backend.

## Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Works perfectly on all device sizes
- **Sports Sections**: Dedicated sections for Football, Basketball, and Cricket
- **Registration System**: Complete registration form with backend validation
- **Professional Images**: High-quality, relevant sports imagery
- **Color Coordination**: Consistent, accessible color palette

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons

### Backend
- Express.js server
- MongoDB Atlas with Mongoose ODM
- Password hashing with bcryptjs
- Input validation with express-validator
- CORS enabled
- RESTful API design
- Environment variables for configuration

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas cloud)

### MongoDB Setup

**Option 1: MongoDB Atlas (Cloud - Recommended for beginners)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string from the "Connect" section
4. Update `.env` file:
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   ```

**Option 2: Local MongoDB Installation**
1. Download MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Install and start MongoDB service
3. Use default connection string in `.env`:
   ```
   MONGODB_URI=mongodb://localhost:27017/sports_club
   ```

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   - Copy `.env` file and update MongoDB URI if needed

3. **Start the development servers**

   **Option 1: Run both frontend and backend together**
   ```bash
   npm run dev:full
   ```
   This will start:
   - Backend server on http://localhost:3001
   - Frontend dev server on http://localhost:5173

   **Option 2: Run servers separately**

   Terminal 1 - Start the backend:
   ```bash
   npm run server
   ```

   Terminal 2 - Start the frontend:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend health check: http://localhost:3001/api/health

## API Endpoints

### Registration
- **POST** `/api/register` - Create a new user account
  - **Request Body:**
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```
  - **Success Response (201):**
    ```json
    {
      "success": true,
      "message": "Registration successful! Your account has been created.",
      "user": {
        "id": "user_id",
        "name": "John Doe",
        "email": "john@example.com",
        "createdAt": "2024-01-15T10:30:00.000Z"
      }
    }
    ```
  - **Error Response (400/409/500):**
    ```json
    {
      "success": false,
      "message": "Error message",
      "errors": [{"param": "email", "msg": "Email is required"}]
    }
    ```

- **GET** `/api/users` - Get all users (admin - excludes passwords)
- **GET** `/api/health` - Health check and database status

### User Model
- **name** (String, required, 2-100 characters)
- **email** (String, required, unique, validated)
- **password** (String, required, min 6 characters, hashed with bcrypt)
- **createdAt** (Date, auto-generated)

## Available Scripts

- `npm run dev` - Start frontend development server (Vite)
- `npm run server` - Start backend server (Express + MongoDB)
- `npm run dev:full` - Start both frontend and backend servers concurrently
- `npm run build` - Build frontend for production

## Running the Application

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Environment Variables
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/sports_club?retryWrites=true&w=majority
NODE_ENV=development
PORT=3001
```

### Step 3: Start the Application

**Option 1: Run Both Servers Together (Recommended)**
```bash
npm run dev:full
```

This will start:
- **Backend**: http://localhost:3001
- **Frontend**: http://localhost:5173 (or next available port)

**Option 2: Run Servers Separately**

Terminal 1 - Backend:
```bash
npm run server
```

Terminal 2 - Frontend:
```bash
npm run dev
```

### Step 4: Test Registration
1. Open the frontend URL (usually http://localhost:5173)
2. Navigate to `/register`
3. Fill out the form:
   - **Name**: Your full name
   - **Email**: Your email address
   - **Password**: At least 6 characters
4. Click "Create Account"
5. Check MongoDB Atlas to verify the user was created

## MongoDB Atlas Setup (Required)

Since MongoDB is not installed locally, we'll use **MongoDB Atlas** (free cloud database):

### Step 1: Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Click "Try Free" and create an account
3. Choose the "Free" tier when prompted

### Step 2: Create a Cluster
1. Click "Build a Cluster" (choose the free tier)
2. Select your cloud provider and region (any works)
3. Click "Create Cluster" (takes ~5-10 minutes)

### Step 3: Set up Database Access
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Enter a username and strong password
5. Click "Add User"

### Step 4: Configure Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (or add your IP)
4. Click "Confirm"

### Step 5: Get Connection String
1. Go to "Clusters" and click "Connect"
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database user password
5. Replace `<dbname>` with `sports_club`

### Step 6: Update .env File
Update your `.env` file with the connection string:
```
MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/sports_club?retryWrites=true&w=majority
```

### Step 7: Test Connection
```bash
npm run server
```
You should see: "🍃 MongoDB Connected: cluster0.xxxxx.mongodb.net"

## Features Implemented

✅ **Image Updates**
- Removed yoga-related images
- Replaced with high-quality basketball images
- Added professional cricket images
- All images are well-cropped and relevant

✅ **Color & UI Polish**
- Improved color coordination throughout
- Fixed clashing colors between elements
- Enhanced contrast for better accessibility
- Consistent color palette usage

✅ **Complete User Registration System**
- **Frontend**: React form with name, email, and password fields
- **Backend**: Express.js API with MongoDB Atlas integration
- **Password Security**: Bcrypt hashing (passwords never stored in plain text)
- **Validation**: Client-side and server-side validation
- **Error Handling**: Clear error messages for all scenarios
- **Loading States**: Visual feedback during registration
- **Success States**: Confirmation screen after successful registration

✅ **MongoDB Database Integration**
- **User Model**: Schema with name, email (unique), password (hashed), createdAt
- **Mongoose ODM**: Professional data modeling and validation
- **Connection Management**: Automatic reconnection and error handling
- **Environment Variables**: Secure configuration management
- **Indexes**: Optimized queries for email lookups
  