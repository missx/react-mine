var express = require('express');
var router = express.Router();
var Expense = require('../models/Expense');

router.post('/', function(req, res) {
    console.log('req: ', req.body);
    
    var expense = new Expense({
        description: req.body.description,
        amount:req.body.amount,
        month: req.body.month,
        year: req.body.year,
    });
    
    /*var promise = expense.save();

    promise.then(function (exp) {
      console.log(exp, "Guns N' Roses");
    });

    expense.save().then(() => {
        console.log('success');
        res.send(savedExp);
    }).catch(err => {
        console.log('err: ', err);        
        res.send(err);
    });*/

    expense.save((err) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.send('saved');
    })

});

router.get('/', function(req, res) {
    console.log('req: ', req.body);
    
    Expense.find({}).exec((err, expenses) => {
        if (err) {
            res.send(err);
        } else {
            res.send(expenses);
        }
    })
    

});

module.exports = router;