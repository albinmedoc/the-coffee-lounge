const nodemailer = require('nodemailer');

export function post(req, res) {

    console.log(req.body);

    // Load data
    const name = req.body.order;
    const email = req.body.address;
    const subject = req.body.phonenumber;
    const message = req.body.company_name;

    const transporter = nodemailer.createTransport(
        `smtps://${process.env.EMAIL_USER}:${process.env.EMAIL_PASSWORD}@${process.env.EMAIL_HOST}`
    );

    const mailOptions = {
        from: '"The Coffee Lounge" <noreply@the-coffeelounge.se>',
        to: 'info@the-coffeelounge.se',
        subject: `${name} - ${subject}`,
        text: `${name} (${email}) har skickat ett meddelande från hemsidan\n\Meddelande: ${message}`,
    };

    // Send the mail
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        return res.json({message: 'Message sent: ' + info.response}).send();
    });
}
