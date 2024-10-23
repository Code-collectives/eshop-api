

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { toJSON} from '@reis/mongoose-to-json';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['vendor', 'user'],
    required: true,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  // Compare password
  userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

userSchema.plugin(toJSON);
export default User;
