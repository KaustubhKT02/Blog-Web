# 📝 Blog Website with Node.js, Express, and EJS

This is a simple blog web application built using **Node.js**, **Express.js**, and **EJS**. The application allows users to create, view, edit, and delete blog posts. Note that this version does not use a database—posts are stored in memory and will not persist between sessions.

---

## 🌐 Live Demo: [View Website](https://blog-l72m.onrender.com)

---

## 📌 Features

- ✍️ **Post Creation** – Users can create new blog posts via a form.
- 📄 **Post Viewing** – All posts are displayed on the Blog page.
- 🛠️ **Edit & Delete** – Users can edit or delete existing posts.
- 💅 **Responsive Styling** – Clean and responsive UI for desktop and mobile.


---

## 🧰 Tech Stack

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Styling**: CSS or Bootstrap
- **No Database**: Posts are stored in memory

---

## 📁 Project Structure
```
/blog-app
├── public/
│ ├── styles.css # CSS styling
│ └── Blogger_logo.png # Blog logo image
├── views/
│ ├── partials/ # Reusable EJS components (header, footer)
│ ├── Home.ejs # Home page
│ ├── Post.ejs # Form to create/edit posts
│ └── Blog.ejs # View post page
├── app.js # Main server file
└── README.md # Project README
```

---

## ⚠️ Limitations
- No database: Posts are not persistent.
- Single-user interface (no authentication).
