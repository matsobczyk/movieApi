const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    let token = req.headers.authorization;
    if(!token) return res.status(400).send('Acces Denied!');
    token = token.split(" ")[1];
    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid auth token');
    }
}