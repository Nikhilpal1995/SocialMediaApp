// controllers/postController.js
const Post = require('../models/Post');
const Comment = require('../models/Comment'); // Import the Comment model

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: Comment, // Include the comments associated with each post
    });

    res.render('index', { posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Error fetching posts');
  }
};

exports.createPost = async (req, res) => {
  const { description, link } = req.body;

  try {
    await Post.create({ description, link });
    res.redirect('/');
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).send('Error creating post');
  }
};

exports.createComment = async (req, res) => {
  const { comment, postId } = req.body;

  try {
    // Create a new comment and associate it with the specified post
    const newComment = await Comment.create({ comment, postId });
    res.redirect('/');
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).send('Error creating comment');
  }
};

exports.deletePost = async (req, res) => {
  const postId = req.params.postId;

  try {
    // Find the post by its ID and delete it
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).send('Post not found');
    }

    await post.destroy();
    res.redirect('/');
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).send('Error deleting post');
  }
};

