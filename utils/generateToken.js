import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: '24h', 
  });
};

export default generateToken;