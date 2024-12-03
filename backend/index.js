const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
const nodemailer = require('nodemailer')
const { Contact } = require('./models/contact')

app.use(cors())
require('./mongoose')

app.listen(3000, () => {
    console.log('Server started on 3000')
})

app.get('/', (req, res) => {
    res.send('hiiei')
})


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'deepa.worksol@gmail.com', // Replace with your email
        pass: 'qvze ajia fpmq hzya'   // Replace with your email password
    }
})


app.post('/api/career', async (req, res) => {
    console.log(req.body)
    const { name, email, mobile, message } = req.body;

    if (!name || !email || !mobile || !message) {
        return res.status(400).json({ error: 'Name, email, mobile, and message are required' });
    }

    // Save to MongoDB
    const newContact = new Contact({ name, email, mobile, message });
    newContact.save()
        .then(() => {
            // Send email to user
            const userMailOptions = {
                from: 'deepa.worksol@gmail.com',
                to: email,
                subject: 'Thank you for contacting us',
                text: `Hi ${name},\n\nThank you for reaching out! We have received your message:\n\n${message}\n\nBest regards,\nWorksol`
            };

            transporter.sendMail(userMailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('User email sent: ' + info.response);
            });

            // Send email to yourself
            const adminMailOptions = {
                from: email,
                to: 'deepa.worksol@gmail.com', // Replace with your email
                subject: 'Job Application - Worksol',
                text: `New message from ${name} (${email}, ${mobile}):\n\n${message}`
            };

            transporter.sendMail(adminMailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Admin email sent: ' + info.response);
            });

            res.status(200).json({ success: true, message: 'Contact form submitted successfully' });
        })
        .catch(err => res.status(500).json({ success: false, error: 'Error saving contact form' }));
})

