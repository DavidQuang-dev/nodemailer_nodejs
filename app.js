const {google} = require("googleapis");
const nodemailer = require("nodemailer");
require("dotenv").config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFESH_TOKEN = process.env.REFESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oauth2Client.setCredentials({ refresh_token: REFESH_TOKEN });

const sendMail = async () => {
    try {
        const accessToken = await oauth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            type: "OAuth2",
            user: "bussiness@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFESH_TOKEN,
            accessToken: accessToken
            }
        })
        const mailOptions = {
            from: "bussiness@gmail.com",
            to: "user@gmail.com",
            subject: "Hello",
            text: "Hello World",
            html: "<h1>Hello World</h1>"
        }
        const result = await transporter.sendMail(mailOptions);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

sendMail();
