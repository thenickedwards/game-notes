const router = require('express').Router();
const res = require('express/lib/response');
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

// READ all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User }],
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// READ a post
router.get('/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{ model: User }]
      });
  
      if (!postData) {
        res.status(404).json({ message: 'Sorry, we cant find this post.' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// CREATE a post
router.post('/', async (req, res) => {
    try {
        const postData = await Post.create(
          {
            ...req.body,
            user_id: req.session.user_id,
        },
        { returning: true }
        );
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE a post
router.put('/:id', async (req, res) => {
    try {
      const postData = await Post.update(
        {
          ...req.body,
          user_id: req.session.user_id,
          id: req.params.id
        }, {
        where: {
          id: req.params.id,
        },
      });
      if (!postData[0]) {
        res.status(404).json({ message: 'Sorry, we cant find this post.' });
        return;
      }
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// DELETE a post
router.delete('/:id', async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: { id: req.params.id }
      });
      if (!postData) {
        res.status(404).json({ message: 'Sorry, we cant find this post.' });
        return;
      }
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;