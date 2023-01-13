const  express = require('express');
const  router = express.Router();

router.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Hello world! Now with a route file!',
        title: 'hello',
    });
});

router.get('/about', async function (req, res, next) {
    res.render('index.njk', {
        message: '💀💀💀',
        title: 'hello',
    });
});

router.get('/contact', async function (req, res, next) {
    res.render('index.njk', {
        message: '☎',
        title: 'hello',
    });
});

module.exports = router