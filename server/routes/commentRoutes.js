const express = require('express');
const Comment = require('../models/Comment');

const router = express.Router();

// Get comments for a post
router.get('/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId })
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Add comment
router.post('/', async (req, res) => {
  try {
    const { post, user, text } = req.body;

    const comment = await Comment.create({
      post,
      user,
      text,
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;