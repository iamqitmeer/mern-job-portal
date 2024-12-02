# MERN Job Portal

Welcome to the **MERN Job Portal**! This full-stack application is a comprehensive solution for job seekers and employers, built using the **MERN** stack — **MongoDB**, **Express.js**, **React.js**, and **Node.js**. The goal of this project is to create a dynamic platform where job seekers can find job opportunities, apply for jobs, and manage their profiles. Employers can post job listings, track applicants, and handle job applications efficiently.

In this repository, you will find the complete source code for building a job portal from scratch, with detailed instructions on how to run the application on your local machine. This project serves as a fantastic example of integrating a front-end and back-end with modern web development technologies and best practices.

Whether you are a beginner looking to learn more about full-stack development or an advanced developer aiming to enhance your skills, this job portal is an excellent addition to your portfolio. 

---

## **Features**

### **1. User Authentication and Authorization**
- **User Signup/Login**: Users can register and log in with a secure password. After successful login, users receive a JWT (JSON Web Token) for authenticated sessions.
- **Role-based Access Control**: There are two primary roles — *User* and *Admin*. Job seekers can create profiles, apply for jobs, and view their job applications. Admins have additional privileges, such as managing job postings, applicants, and companies.

### **2. Job Postings Management**
- **Post Jobs**: Employers can post new jobs by providing essential details, such as job title, company name, job description, location, and type (full-time/part-time).
- **Edit/Update/Delete Jobs**: Employers can modify their existing job postings or delete them from the platform.
- **Job Details**: Job seekers can browse through job listings, view detailed job descriptions, and apply to the ones that match their skills and interests.

### **3. Job Applications**
- **Apply for Jobs**: Registered users can apply for any listed job. Once applied, the user’s profile is linked to the job application.
- **Track Application Status**: Users can view the status of their job applications, whether pending, accepted, or rejected.
- **Admin Control**: Admins can view and manage all applications, change the application status, and see which applicants have applied for which jobs.

### **4. Admin Dashboard**
- **Manage Companies**: Admins have the ability to view, add, edit, and delete companies on the platform.
- **Manage Jobs**: Admins can also approve or reject jobs posted by employers. They have full control over the job listings.
- **Manage Applications**: Admins can filter and manage all job applications. They can change the status of applications and view detailed reports.

### **5. Profile Management**
- **User Profiles**: Job seekers can manage their profiles by uploading their resumes and updating their personal information.
- **Employer Profiles**: Employers can add their company details, such as company name, logo, and job listings.

### **6. Search and Filtering**
- **Job Search**: Job seekers can search for jobs by title, company, location, and other parameters.
- **Filtering**: Advanced filters allow users to refine job search results based on job type (full-time, part-time, etc.), location, salary, and more.

### **7. File Uploads**
- **Resume Upload**: Job seekers can upload their resumes when applying for jobs. The application uses **Multer** to handle file uploads securely and efficiently.
- **Profile Image Upload**: Users can upload their profile pictures as part of their profile setup.

### **8. State Management**
- **Redux Toolkit**: The application uses **Redux Toolkit** for managing global application state. This enables smooth data flow and efficient management of the job portal’s state across different components.
- **Persisting State**: Redux Persist is used to persist the user's session and preferences across browser reloads.

### **9. Dynamic and Responsive User Interface**
- **UI/UX**: The interface is built using modern React components with a focus on simplicity and usability. The app is designed to be responsive, adapting to various screen sizes and devices.
- **ShadCN-UI**: A component library built on top of Radix UI is used for modern, accessible, and customizable UI elements, including forms, buttons, modals, and more.

### **10. Animations**
- **Framer Motion**: Smooth animations are implemented throughout the app using **Framer Motion**. The animations enhance the user experience and provide a more interactive feel to the app.

---

## **Technologies Used**

### **Frontend**
- **React.js**: A JavaScript library for building user interfaces, used to create reusable UI components and manage the application’s front-end logic.
- **Vite**: A build tool that significantly improves the speed of development and performance, especially in React-based applications.
- **ShadCN-UI**: A component library based on Radix UI, providing a set of accessible and customizable UI components.
- **Redux Toolkit**: A toolset for managing global state in a React application, providing a simpler and more predictable state management approach.
- **Framer Motion**: A library for animations, offering smooth transitions and interaction animations in the UI.
  
### **Backend**
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building the server-side of the application.
- **Express.js**: A fast and minimalist web framework for Node.js, used to build the API routes and handle HTTP requests.
- **MongoDB**: A NoSQL database used to store the application’s data, such as job listings, user profiles, and applications.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, providing a more structured way to interact with the database.
- **JWT (JSON Web Tokens)**: Used for secure user authentication and authorization, ensuring only authenticated users can access certain resources.
- **Multer**: A middleware for handling file uploads, used to upload resumes and profile images securely.

---

## **Installation and Setup**

### **Prerequisites**

To run this project, ensure that you have the following installed on your machine:
- **Node.js** and **npm** (or Yarn)
- **MongoDB** instance (either locally or via a cloud service like MongoDB Atlas)
- A code editor like **VSCode**

### **Steps to Run Locally**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/mern-job-portal.git
   cd mern-job-portal
   ```

2. **Install Backend Dependencies**
   Navigate to the `backend` directory and install the dependencies:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   Navigate to the `frontend` directory and install the dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set Up Environment Variables**
   In the `backend` folder, create a `.env` file and add your environment variables:
   ```env
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

5. **Run the Development Servers**
   - Start the backend server:
     ```bash
     cd backend
     npm run dev
     ```
   - Start the frontend server:
     ```bash
     cd ../frontend
     npm run dev
     ```

6. **Access the Application**
   Once both servers are running, you can access the job portal at [http://localhost:3000](http://localhost:3000).

---

## **App Structure**

### Backend (`/backend`)
- **Controllers**: Contains the logic for handling user requests.
  - `UserController.js`
  - `JobController.js`
  - `CompanyController.js`
  - `ApplicationController.js`
- **Models**: Mongoose models that define the structure of data.
  - `User.js`
  - `Job.js`
  - `Company.js`
  - `Application.js`
- **Routes**: Defines the API endpoints.
  - `users.js`
  - `jobs.js`
  - `companies.js`
  - `applications.js`
- **Middlewares**: Functions that handle requests before reaching the controllers.
  - `authMiddleware.js`
  - `adminMiddleware.js`

### Frontend (`/frontend`)
- **Components**: Reusable UI components like `Navbar`, `JobCard`, `ProfileForm`, etc.
- **Pages**: Different views for the app.
  - `HomePage.js`
  - `LoginPage.js`
  - `SignupPage.js`
  - `JobDetailsPage.js`
  - `AdminDashboard.js`
- **State Management**: Includes Redux slices and hooks for managing global states like authentication, job listings, and user profiles.

---

## **Contributing**

We welcome contributions to the project! If you'd like to help improve this job portal, follow the steps below to get started:

1. **Fork the Repository**: Click the "Fork" button on the top right of the repository page.
2. **Clone Your Fork**: 
   ```bash
   git clone https://github.com/your-username/mern-job-portal.git
   ```
3. **Create a Feature Branch**:
   ```bash
   git checkout -b feature-name
   ```
4. **Make Changes and Commit**:
   ```bash
   git commit -am "Add new feature"
   ```
5. **Push to Your Fork**:
   ```bash
   git push origin feature-name
   ```
6. **Submit a Pull

 Request**: Go to the original repository and submit a pull request.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

This project was built with a lot of inspiration from the open-source community. Special thanks to everyone contributing to the development of useful libraries and frameworks used in this app.
