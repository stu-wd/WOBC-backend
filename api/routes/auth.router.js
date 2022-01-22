const authRouter = require("express").Router();
const Auth = require("../../data/models/auth.model");
const generators = require("../../utils/generators");
const mw = require("../middleware/auth.mw");

authRouter.post(
  "/register",
  mw.validateBody,
  mw.usernameFree,
  async (req, res, next) => {
    let user = req.body;
    const hash = await generators.password(user.password);
    user.password = hash;

    Auth.add(user)
      .then((newUser) => {
        res.status(201).json({
          registered: newUser[0].username,
          message: "Registration Success",
        });
      })
      .catch((err) =>
        next({
          status: 422,
          error: err,
          stack: err.stack,
          message: "Registration Error",
        })
      );
  }
);

authRouter.post("/login", mw.usernameExists, mw.checksPassword, (req, res) => {
  const { user_id, username } = req.body;
  const token = generators.token(req.body);
  res.status(200).json({
    message: `Login Success`,
    token,
    user: {
      user_id: user_id,
      username: username,
    },
  });
});

module.exports = authRouter;
