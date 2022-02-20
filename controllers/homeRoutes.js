const router = require('express').Router();
const { User, Post } = require('../models');
// const withAuth = require('../utils/auth');

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

module.exports = router;