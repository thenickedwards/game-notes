const router = require('express').Router();
const { User, Post, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// GET all posts for homepage/dashboard
router.get('/', async (req, res) => {
  try {
    const postsData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        },
      ],
    });
    
    const allPosts = postsData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      allPosts,
      // logged_in: req.session.logged_in
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a post with comments
router.get('/posts/:id', async (req, res) => {
  // GET post
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ['username'] }, 
        { model: Comment, attributes: ['post_id']}]
    });

    // GET comments with post_id
    const commentsByPost = await Comment.findAll({
      where: {post_id: req.params.id},
    });

    if (!postData) {
      res.status(404).json({ message: 'Sorry, we cant find this post.'});
      return;
    }

    const onePost = postData.get({ plain: true });
    // TODO:
    const comments = commentsByPost.map((comment) => comment.get({ plain: true }));
    // HOW TO RENDER COMMENTS???
    // PUSH EVERYTHING TO AN ARRAY?  INDEX 0 WITH DIFF STYLING
    // PUSH COMMENTS INTO POST???
    res.render('post', onePost)
  } catch {
    // console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;