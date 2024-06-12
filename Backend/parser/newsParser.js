const axios = require('axios')
const cheerio = require('cheerio')
const Post  = require('../models/posts')

async function fetchNews(url) {
    try {
        const response = await axios.get('https://fsp-russia.com/');
        const html = response.data;
        const $ = cheerio.load(html);
        
        $('SELECTOR_NEWS').each(async (index, elevent) => {
            const title = $(element).find('SELECTOR_TITLE').text().trim();
            const description = $(element).find('SELECTOR_DESCRIPTION').text().trim();
            const urlToImage = $(element).find('SELECTOR_IMAGE').attr('src');
            const url = $(element).find('SELECTOR_LINK').attr('href');

            let post = await Post.findOne({ where: { title: title.toLowerCase() } });

            if (post) {
                post.content = description.toLowerCase();
                post.image = urlToImage || null;
                post.file = url || null;
                await post.save();
            } else {
                post = await Post.create({
                    title: title.toLowerCase(),
                    content: description.toLowerCase(),
                    image: urlToImage || null,
                    file: url || null,
                });
            }
        });
        console.log('News parsered and saved successfully');
    } catch (error) {
        console.error('Error scraping news:', error);
    }
}

module.exports = fetchNews;