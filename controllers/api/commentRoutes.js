const router = require('express').Router();
const res = require('express/lib/response');
const { Comment, Post, User } = require('../../models');

// READ all Comments
router.get('/admin-get-all-comments', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{ model: User, Post }],
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// READ all comments with a post_id
router.get('/:id', async (req, res) => {
    try {
        const commentsByPost = await Comment.findAll({
            where: {post_id: req.params.id},
        });
        const comments = commentsByPost.map((comment) => comment.get({ plain: true }));
        res.status(200).json(commentsByPost)
    } catch (err) {
        // res.redirect('login');
        res.status(500).json(err);
    }
});

// CREATE a comment
router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create(req.body);
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE a comment
router.put('/:id', async (req, res) => {
    try {
      const commentData = await Comment.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!commentData[0]) {
        res.status(404).json({ message: 'Sorry, we cant find this comment.' });
        return;
      }
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// DELETE a comment
router.delete('/:id', async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: { id: req.params.id }
      });
      if (!commentData) {
        res.status(404).json({ message: 'Sorry, we cant find this comment.' });
        return;
      }
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


module.exports = router;