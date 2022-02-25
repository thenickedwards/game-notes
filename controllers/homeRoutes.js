const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for homepage
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
      logged_in: req.session.logged_in
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render('login', {
    title: 'Login or Sign Up!',
  });
});

// // READ a post with comments
// router.route('/posts/:id', withAuth)
//   .all(function (req, res, next) {
//     console.log('Gathering post and comments...')
//     if (!req.session.logged_in) {
//       res.redirect("/login");
//       return;
//     }
//     next();
//   })

//   //////////
//   .get( async (req, res, next) => {
//     // GET post
//     try {
//       const postData = await Post.findByPk(req.params.id, {
//         include: [
//           { model: User, attributes: ['username'] },
//           { model: Comment, attributes: ['comment_content', 'comment_date', 'user_id', 'post_id'], 
//             include: { model: User, attributes: ['username']} }
//         ]
//       });

//       if (!postData) {
//         res.status(404).json({ message: 'Sorry, we cant find this post.' });
//         return;
//       }

//       const onePost = postData.get({ plain: true });
//       // res.status(200).json(postData)
//       console.log(onePost);
//       res.render('post', onePost)
//     } catch {
//       res.status(500).json(err);
//     }
//     next();
//   })
//   // GET comments associated with post
//   .get( async (req, res, next) => {
//     try {
//         const commentsByPost = await Comment.findAll({
//             where: {post_id: req.params.id},
//         });
//         const comments = commentsByPost.map((comment) => comment.get({ plain: true }));
//         // res.status(200).json(commentsByPost)
//         console.log(comments);
//         res.render('post', {comments})
//     } catch (err) {
//         // res.redirect('login');
//         res.status(500).json(err);
//     }
  
//   });

// READ a post with comments
router.get('/posts/:id', withAuth, async (req, res) => {
  if (!req.session.logged_in) {
          res.redirect("/login");
          return;
        }
  try {
    // GET post
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ['username'] },
        { model: Comment, attributes: ['comment_content', 'comment_date', 'user_id', 'post_id'], 
          include: { model: User, attributes: ['username']} }
      ]
    });

    if (!postData) {
      res.status(404).json({ message: 'Sorry, we cant find this post.' });
      return;
    }

    // GET comments associated with post
    // const commentsByPost = await Comment.findAll({
    //   where: {post_id: req.params.id},
    // })

    const onePost = postData.get({ plain: true });

    // const comments = commentsByPost.map((comment) => comment.get({ plain: true }));

    res.render('post', {...onePost, logged_in: req.session.logged_in})

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;