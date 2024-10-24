import { signInUserValidator, registerUserValidator} from "../validators/user.js";
import { UserModel } from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { mailtransporter} from "../utils/mail.js"




export const registerUser = async (req, res, next) => {
  try {
const {error, value} = registerUserValidator.validate(req.body)
if (error) {
  return res.status(422).json(error)
}
const user = await UserModel.findOne({ email: value.email})
if (user) {
  res.status(409).json('User already exists')
}
const hashedPassword = bcrypt.hashSync(value.password, 10);
await UserModel.create({
  ...value,
  password: hashedPassword
});

await mailtransporter.sendMail({
  to: value.email,
  subject: 'USER REGISTRATION',
  text: 'Account successfully registered!'
})

res.json('User successfully registered!')
  }catch(error){
    next(error)
  }
}

export const signInUser = async (req, res, next) =>{
  try{
    const { error, value} = signInUserValidator.validate(req.body)
    if(error){
      return res.status(422).json(error)
    }
const user = await UserModel.findOne({ email: value.email})
if (!user){
  return res.status(404).json('User does not exist')
}
const correctPassword = bcrypt.compareSync(value.password, user.password)
if (!correctPassword) {
  return res.status(404).json('Invalid credentials!')
}
const token = jwt.sign(
  {id: user.id},
  process.env.JWT_PRIVATE_KEY,
  { expiresIn: '24h'}
)
res.json({
  message: 'User signed in!',
  accessToken: token
})


} catch (error) {
  next(error)

  }
}



export const getProfile = async( req, res, next) =>{
  try{
    const user = await UserModel
    .findById(req.auth.id)
    .select ({ password: false});
    res.json(user);
  }catch (error){
    next(error)
  };
}


export const updateProfile = async (req, res, next) => {
  try{
const { error, value} = updateProfileValidator.validate({
  ...req.body,
});
if(error){
  return res.status(422).json(error);
}

await UserModel.findByIdAndUpdate(req.auth.id, value);
res.json('User profile updated!')
  }catch(error){
    next(error);
  }
}

/*import User from '../models/user.js';
import generateToken from '../utils/generateToken.js';


export const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const SignIn  = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // Check if user exists and the password matches
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Controller for getting the authenticated user's profile
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password'); 
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        token: generateToken(updatedUser._id), // Optionally regenerate token
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const logoutUser = async (req, res) => {
  try {
   
    res.json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; */