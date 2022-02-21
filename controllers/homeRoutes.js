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
router.route('/posts/:id')
  // .all(function (req, res, next) {
  //   console.log('Gathering post and comments...')
  // })
  .get( async (req, res, next) => {
    // GET post
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          { model: User, attributes: ['username'] },
        { model: Comment, attributes: ['comment_content', 'comment_date', 'user_id', 'post_id'] } ]
      });

      if (!postData) {
        res.status(404).json({ message: 'Sorry, we cant find this post.'});
        return;
      }

      const onePost = postData.get({ plain: true });
      res.render('post', onePost)
    } catch {
      res.status(500).json(err);
    }
  })
  // GET comments associated with post
  .get( async (req, res, next) => {
    try {
        const commentsByPost = await Comment.findAll({
            where: {post_id: req.params.id},
        });
        const comments = commentsByPost.map((comment) => comment.get({ plain: true }));
        // res.status(200).json(commentsByPost)
        console.log(comments);
        res.render('post', {comments})
    } catch (err) {
        // res.redirect('login');
        res.status(500).json(err);
    }
  });




module.exports = router;