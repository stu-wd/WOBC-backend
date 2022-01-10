const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = async (data) => {
    const password = await bcrypt.hashSync(data, parseInt(process.env.BCRYPT_ROUNDS) || 8);

    console.log(password)
    return password
}

const token = (user) => {
    const payload = {
        subject: user.user_id,
        username: user.username,
    };
    const options = {
        expiresIn: '10d'
    };
    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        options
    );
    return token;
}

module.exports = { password, token };