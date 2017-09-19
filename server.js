const express = require('express');
const webpackMiddleWare = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();

app.use(webpackMiddleWare(webpack(webpackConfig)));

app.listen(3050, () => console.log('Listening'));