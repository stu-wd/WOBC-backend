const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = (data) => {
    return bcrypt.hashSync(data, parseInt(process.env.BCRYPT_ROUNDS) || 8);
}

const token = (user) => {
    const payload = {
        subject: user.user_id,
        username: user.username,
    };
    const options = {
        expiresIn: '1d'
    };
    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        options
    );
    return token;
}

module.exports = { password, token };