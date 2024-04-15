const jwt = require('jsonwebtoken');
const User =require('../models/User')
const secret ="codefortomorrow";

exports.checkAuth = (req, res, next) => {
    try{
        let token = req.headers['x-access-token'] || req.headers['authorization'];
        if (token?.includes('Bearer ')) {
            token = token.slice(7, token.length)
        }
        if (token) {
            User.findOne({ token }).then((user) => {
                jwt.verify(token, secret, (err, decoded) => {
                    if (!err && decoded) {
                        req.decoded = decoded;
                        next();
                    } else {
                        res.send({res: 'Please log in with email and password'});
                        return;
                    }
                });
            });
        } else {
            return res.send({res: 'Please log in with email and password'});
        }
    }catch(err){
        console.error(err);
        return res.send({res: 'Please log in with email and password'});
    }
}
