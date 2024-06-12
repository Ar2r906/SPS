const { response } = require('express');
const Post = require('../models/posts');

exports.getPosts = async (request, response) => {
    try {
        const posts = await Post.findAll();
        response.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}