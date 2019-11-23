const express = require("express");
const bodyParser = require("body-parser");
const ProjectDB = require("./models/db.js");
const path = require("path");
const cors = require("cors");

const app = express();

// app.use(express.static(path.join(__dirname, "../build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//---------- Pull in required dependencies for Authentication --------------
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("./config/keys");

//----------------------------user model----------------------------------------------
const User = require("./models/User.js").User;

//----------------------------input validation-------------------------------------------
const validateRegisterInput = require("./validation/register");
const validateLoginInput = require("./validation/login");

//----------------------------Passport middleware----------------------------
app.use(passport.initialize());
// Passport config
// require("./config/passport")(passport);
// eslint-disable-next-line no-unused-expressions
require("./config/passport").passport;
//---------------------------------------------------------------------------

app.get("/", function(req, res) {
  ProjectDB.Project.find({})
    .limit(10)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err));
});

//-----------------------------------------------------
//----------------Authentication-----------------------
//-----------------------------------------------------

app.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// POST /login
// @desc Login user and return JWT token
app.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id
          // name: user.name
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 1800 // 30 minutes in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

//-----------------Authentication middleware-------------
function authenticationToken(req, res, next) {
  //get token from header
  const token = req.header("x-auth-token");

  //check if there's no token
  if (!token) {
    return res.status(401).json({ message: "No Token, authorization failed" });
  }

  //verify token
  try {
    const decode = jwt.verify(token, keys.secretOrKey);
    req.user = decode.user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
}

module.exports = app;
