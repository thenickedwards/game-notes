// GET a post [no comments yet]
router.get('/posts/:id', async (req, res) => {
    // GET post
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          { model: User, attributes: ['username'] } ]
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