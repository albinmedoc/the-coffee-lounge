const nodemailer = require('nodemailer');

export function post(req, res) {

    console.log(req.body);

    // Load data
    const order = req.body.order;
    const address = req.body.address;
    const phonenumber = req.body.phonenumber;
    const name = req.body.name;

    const transporter = nodemailer.createTransport(
        `smtps://${process.env.EMAIL_USER}:${process.env.EMAIL_PASSWORD}@${process.env.EMAIL_HOST}`
    );

    const mailOptions = {
        from: '"The Coffee Lounge" <noreply@the-coffeelounge.se>',
        to: 'lunch-foretag@the-coffeelounge.se',
        subject: `Lunchbeställning - ${name}`,
        text: `Lunchbeställning till ${name}\n\nAdress: ${address}\n\nTelefonnummer: ${phonenumber}\n\nBeställning:\n${order}`,
    };

    // Send the mail
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        return res.json({message: 'Message sent: ' + info.response}).send();
    });
}
