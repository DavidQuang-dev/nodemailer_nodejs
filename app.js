const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
        user: "bussiness@gmail.com",
        pass: ""
    }
})


function sendMail(to, subject, msg) {
    transporter.sendMail({
        from: "bussiness@gmail.com",
        to: to,
        subject: subject,
        text: msg,
        html: "<h1>Hello World</h1>"
    })
}

sendMail("user@gmail.com", "Hello", "Hello World");

