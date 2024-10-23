import { createTransport} from "nodemailer";

export const mailtransporter = createTransportTransport ({
  host: 'smtp.gmail.com',
  port: '456',
  secure: true,
  auth:{
    user: 'abdc@gmail.com',
    pass:'antedote'
}, 
from: ' abcd@gmail.com'
})