const indexRouter = require('./routes/index');
const nunjucks = require('nunjucks');
const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.use('/', indexRouter);
app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))