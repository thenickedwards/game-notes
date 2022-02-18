const sequelize = require ('../config/connection');
const { User, Post, Comment } = require ('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require ('./commentData.json');

const seedData = async () => {
    await sequelize.sync ({ force:true});
    
    await User.bulkCreate(userData, {returning: true});
    console.log('Users Seeded');

    await Post.bulkCreate(postData, {returning:true})
    console.log('Posts Seeded');

    await Comment.bulkCreate(commentData, {returning: true})
    console.log('Comments Seeded');
   
    process.exit();
}

seedData();