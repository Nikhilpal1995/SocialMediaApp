// routes/index.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.getPosts);
router.post('/post', postController.createPost);

// Add this route in routes/index.js
router.post('/comment', postController.createComment);
router.post('/post/delete/:postId', postController.deletePost);


module.exports = router;
