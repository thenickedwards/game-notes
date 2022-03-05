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
    logged_in: req.session.logged_in,
  });
});

// TODO: Render update post page with post to update
router.get('/updatepost/:id', withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User }]
    });

    if (!postData) {
      res.status(404).json({ message: 'Sorry, we cant find this post.' });
      return;
    }

    const onePost = postData.get({ plain: true });
    
    res.render('updatepost', {
      ...onePost,
      logged_in: req.session.logged_in,
    });
  } catch {
      console.log(err)
  }
});

module.exports = router;