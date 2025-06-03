import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];
let id = 0;

// Home route
app.get("/", (req, res) => {
  if (posts.length > 0) {
    res.redirect("/Blog");
  } else {
    res.render("index.ejs");
  }
});

// Blog route
app.get("/Blog", (req, res) => {
  res.render("Blog.ejs", { posts });
});

// New/Edit post form
app.get("/Post", (req, res) => {
  const postId = parseInt(req.query.id);
  const post = posts.find((p) => p.id === postId);
  res.render("post.ejs", { post });
});


// Create a new post
app.post("/Blog", (req, res) => {
  id++;
  const { title, author, content } = req.body;
  posts.push({ id, title, author, content });
  res.redirect("/Blog");
});

// Edit existing post
app.post("/edit", (req, res) => {
  const { id: postId, title, author, content } = req.body;
  const post = posts.find((p) => p.id === parseInt(postId));
  if (post) {
    post.title = title;
    post.author = author;
    post.content = content;
  }
  res.redirect("/Blog");
});

// Delete post
app.post("/delete", (req, res) => {
  const postId = parseInt(req.query.id);
  posts = posts.filter((p) => p.id !== postId);
  res.redirect("/Blog");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
