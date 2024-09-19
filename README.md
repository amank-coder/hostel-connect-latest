**HostelConnect**
HostelConnect is a web-based platform designed to streamline the process for hostel students to manage complaints and service requests. Students can easily raise complaints, track their status, and provide feedback, while admins have the ability to view and update complaint statuses. The platform ensures efficient communication by sending email notifications to students for status updates.

**Features
**
Student Portal:

Raise and submit complaints or service requests.
Track the status of ongoing complaints.
Provide general feedback on hostel.

Admin Portal:

View all complaints and their current statuses.
Update complaint statuses, which transitions to a pending state.
Automatic email notifications sent to students for status updates.
Students must confirm the status update via email to finalize the change.

**Technologies Used**
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Email Service: Nodemailer

**Running the Project
**
Setup
Clone the repository:

git clone https://github.com/your-username/hostel-connect.git
cd hostel-connect

Setup the frontend:

cd client
npm install
npm run dev

Setup the backend:

Copy code
cd api
npm install
npm start

Configure Environment Variables for frontend:

VITE_BASE_URI=

Configure Environment Variables for backend:

MONGO_URI=
PORT=
EMAIL_PASSWORD=
DEV_MODE=


