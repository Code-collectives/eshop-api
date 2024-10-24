import { createTransport} from "nodemailer";

export const mailtransporter = createTransport({
  host: 'smtp.gmail.com',
  port: '587',
  secure: false,
  auth:{
    user: 'gidodoom@gmail.com',
    pass:'hbjqnvxcherejumf'
}, 
from: ' gidodoom@gmail.com'
})