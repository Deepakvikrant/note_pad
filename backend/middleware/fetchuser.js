const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Deepak@vik';

const fetchuser = (req, res, next) => {
    //get the user from the jwt tocken and add id to rwq object
    const token = req.header('auth-token');
    if (!token) {
        res.status(400).send({ error: "please authenticate user" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user
        next();
    } catch (error) {
        res.status(400).send({ error: "please authenticate user" }); res.send(401);

    }

}

module.exports = fetchuser;