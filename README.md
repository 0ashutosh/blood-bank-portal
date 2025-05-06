==================================================
 BLOOD DONATION WEBSITE - SETUP GUIDE (README)
==================================================

📁 FILES INCLUDED:
------------------
- index.html       -> Blood donation form
- submit.php       -> Handles form submission and stores data in MySQL
- admin.php        -> Displays list of submitted donors
- README.txt       -> This setup instruction file

🖥 REQUIREMENTS:
------------------
- XAMPP installed (includes Apache + MySQL)
- Browser (Chrome, Firefox, etc.)

🔧 SETUP STEPS:
------------------

1. INSTALL XAMPP
   - Download from: https://www.apachefriends.org/index.html
   - Install and run the XAMPP Control Panel.
   - Start both "Apache" and "MySQL".

2. CREATE DATABASE
   - Open your browser and go to: http://localhost/phpmyadmin
   - Click the "Databases" tab.
   - Create a new database: blood_donation
   - After creating it, click the "SQL" tab and paste the following:

     CREATE TABLE donors (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(100),
         email VARCHAR(100),
         phone VARCHAR(20),
         blood_group VARCHAR(5),
         address TEXT
     );

   - Click "Go" to execute and create the table.

3. ADD WEBSITE FILES
   - Go to the folder: C:\xampp\htdocs
   - Create a new folder: blood_donation
   - Copy all files (index.html, submit.php, admin.php, README.txt) into this folder.

4. RUN THE WEBSITE
   - Open your browser:
     Form Page:     http://localhost/blood_donation/index.html
     Admin View:    http://localhost/blood_donation/admin.php

   - Use the form to submit a donor.
   - Visit admin.php to view all submitted donor records.

📌 NOTES:
---------
- No authentication is used.
- Database access is open via default MySQL credentials (username: root, no password).
- This setup is for local development only. Do NOT use in production without securing the backend.

✅ DONE!

For help or questions, open the admin.php or submit.php file and check for any error messages.
