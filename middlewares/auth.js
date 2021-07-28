const jwt = require('jsonwebtoken');

exports.authUser = (req, res, next) => {
    const token =  req.header('auth-token');
    if(!token) return res.status(400).send('Acces Denied!');

    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log(verified);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid auth token');
    }
}