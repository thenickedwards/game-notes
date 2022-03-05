const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// READ all post for a user
router.get('/', withAuth, async (req, res) => {
  try {
      const postsData = await Post.findAll({
          include: [
            { model: User, 
              attributes: ['username'] }],
          where: {
            user_id: req.session.user_id,
          },
      });

      const userPosts = postsData.map((post) => post.get({ plain: true }));

      res.render('dashboard', {
        userPosts,
        logged_in: req.session.logged_in
      })
  } catch (err) {
      console.log(err);
      // res.status(500).json(err);
  }
});

// Render new post page
router.get('/newpost', withAuth, (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  res.render('newpost', {
    title: 'New Post',
    logged_in: req.session.logged_in,
  });
});

// TODO: Render update post page
// TODO: Build updatepost hbs

module.exports = router;