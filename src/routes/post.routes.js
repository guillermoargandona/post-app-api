const { Router } = require("express");
const { route } = require("../app");
const router = Router();

const {
  createPost,
  getPosts,
  deletePost,
} = require("../controllers/post.controller");

router.route("/").get(getPosts).post(createPost);

router.route("/:id").delete(deletePost);

module.exports = router;
