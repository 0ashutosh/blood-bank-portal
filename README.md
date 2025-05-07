```markdown
# 🩸 Blood Donation Web App

A simple web application for collecting and managing blood donor submissions using HTML, PHP, and MySQL.

---

## 📁 Files Included

| File         | Description                                     |
|--------------|-------------------------------------------------|
| `index.html` | Blood donation form UI                          |
| `submit.php` | Handles form submission and stores data in MySQL|
| `admin.php`  | Displays a list of submitted donors             |
| `welcome.html` | Welcome page with navigation to the form      |

---

## 🛠 Requirements

- XAMPP (Apache + MySQL)
- Modern browser (Chrome, Firefox, etc.)

---

## ⚙️ Setup Instructions

### 1️⃣ Install XAMPP

- Download from: [https://www.apachefriends.org](https://www.apachefriends.org)
- Install and open the XAMPP Control Panel
- Start the following modules:
  - ✅ Apache
  - ✅ MySQL

---

### 2️⃣ Create the MySQL Database

- Open your browser and visit: [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
- Click on the “Databases” tab and create a new database:

```

blood\_donation

````

- After creating it, click on the “SQL” tab and run:

```sql
CREATE TABLE donors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    blood_group VARCHAR(5),
    address TEXT
);
````

---

### 3️⃣ Add Website Files

* Navigate to: `C:\xampp\htdocs`
* Create a new folder: `blood_donation`
* Copy all the files (`index.html`, `submit.php`, `admin.php`, `welcome.html`) into this folder

---

### 4️⃣ Run the App Locally

Open your browser and go to:

* 🏠 Welcome Page: [http://localhost/blood\_donation/welcome.html](http://localhost/blood_donation/welcome.html)
* 📝 Donor Form: [http://localhost/blood\_donation/index.html](http://localhost/blood_donation/index.html)
* 📊 Admin View: [http://localhost/blood\_donation/admin.php](http://localhost/blood_donation/admin.php)

Use the form to submit a donor entry. Visit the admin panel to view the list.

---

## ⚠️ Notes

* No authentication is implemented — backend is open.
* Uses default MySQL credentials: `username: root`, `password: (empty)`
* For local development only — not safe for production use without added security.

---
