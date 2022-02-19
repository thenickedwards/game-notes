const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postsData = await Post.findAll({
            include: [{ model: User }],
        });
        res.status(200).json(postsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;