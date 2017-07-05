/**
 * Created by Cesar on 26/05/17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
var vTitulo = "SmartPeru Solutions";

router.get('/', function(req, res, next) {
    res.render('index', { title: vTitulo });
});

router.get('/main', function(req, res, next) {
    res.render('main', { title: vTitulo });
});

router.get('/factura', function(req, res, next) {
    res.render('factura', { title: vTitulo });
});




module.exports = router;
