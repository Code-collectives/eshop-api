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
  res.status(409).json('Account already exists!')
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

res.status(200).json('Account successfully registered!')
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
  return res.status(404).json('Account does not exist')
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
  message: 'Sign in successful!',
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
res.json('Profile updated!')
  }catch(error){
    next(error);
  }
}
