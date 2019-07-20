const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
       to: email,
       from: 'karthiktamiledu@gmail.com',
       subject: 'Welcome to the Task Manager App!',
       text: `Welcome to the app, ${name}!`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
       to: email,
       from: 'karthiktamiledu@gmail.com',
       subject: 'Sorry to see you go!',
       text: `Goodbye ${name}! We hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}