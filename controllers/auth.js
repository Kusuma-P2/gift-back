import User from "../models/User.js";

export const signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save user to DB",
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      id: user._id,
    });
  });
};

export const signin = (req, res) => {
  const { email, password } = req.body;
  // res.send(req.body)
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(200).send({
        error: "User email doess not exist",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(201).send({
        error: "Email and password doess not match",
      });
    }
    return res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });
  });
};

export const getUser = (req,res) => {
  const id = req.body
  User.findOne({_id:id },(err,user) => {
    return res.json(user)
  })
}

export const signout = (req, res) => {
  res.json({
    message: "User signout succesful",
  });
};
