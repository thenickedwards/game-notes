const router = require('express').Router();
const { User, Post } = require('../models');
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

// GET a post
router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['username'] }]
    });

    if (!postData) {
      res.status(404).json({ message: 'Sorry, we cant find this post.'});
      return;
    }

    const onePost = postData.get({ plain: true });

    res.render('post', {onePost})
    res.status(200),json(postData);
  } catch {
    // console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;