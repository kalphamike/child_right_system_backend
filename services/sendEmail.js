const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, text) => {
    try {
        console.log(`We are about to send an email. The email will be sent to ${email}, the subject is ${subject}, and the message is ${text}.`);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kalphamike4@gmail.com',
                pass: 'zlyfbcytizodekhe',
            },
        });

        const options = {
            from: "kalphamike4@gmail.com",
            to: email,
            subject: subject,
            text: text
        };

        //Send email
        await transporter.sendMail(options, function(error, infor) {
            if (error) {
                console.log("Failed to save email: "+error);
                return error;
            } else {
                console.log("Email Sent To User: "+infor.response);
                return res.status(200).json({
                    success: true,
                });
            }
        });
    } catch (error) {
        return error;
    }
}

module.exports = sendEmail;