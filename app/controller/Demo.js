var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 3333,
    secure: false,
    requireTLS: true,
    auth: {
        user: "pallu.gurram@gmail.com",
        pass: "xyz"
    }
});
//https://www.google.com/settings/security/lesssecureapps
var mailOptions = {
    from: 'pallu.gurram@gmail.com',
    to: 'pallu.gurram@gmail.com',
    subject: 'Nodemailer Demo',
    text: 'Hello from NodeMailer'
};

const Demo = {
    sendEmail : async function (req,res)  {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error)
                console.error(error);
            else {
                console.log("Email has been sent", info.response);
            }
        })
    }
};

module.exports = Demo;