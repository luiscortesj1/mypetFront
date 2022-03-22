const path = require('path');

const controller={

    home: (req,res) => {
        return res.render('index.ejs')
    },
    login: (req,res) => {
        
        return res.render(path.join(__dirname,'../views/users/login'));
    },
    registro: (req,res) => {
        
        return res.render(path.join(__dirname,'../views/users/register'));
    }

}

module.exports=controller;