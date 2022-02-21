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