// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Models
const Contact = require('./models/Contact');
const Testimonial = require('./models/Testimonial');

const app = express();
const PORT = process.env.PORT || 3000;

// -------------------- MIDDLEWARES --------------------

// CORS setup
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://apricoatinsurance.in'
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// -------------------- MONGODB CONNECTION --------------------
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB error:', err));

// -------------------- NODEMAILER TRANSPORTER --------------------
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

// -------------------- CONTACT ROUTE --------------------
app.post('/api/contact', async (req, res) => {
  const { user_name, user_email, user_phone, message } = req.body;

  const mailOptions = {
    from: `"Apricoat Enquiry" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    replyTo: user_email,
    subject: '📨 New Contact Form Submission',
    html: `
      <h2>New Enquiry Received</h2>
      <p><strong>Name:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      <p><strong>Phone:</strong> ${user_phone}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `
  };

  try {
    // Optional DB save
    // await new Contact({ name: user_name, email: user_email, phone: user_phone, message }).save();
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message received and email sent.' });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// -------------------- TESTIMONIAL ROUTES --------------------

// POST testimonial
app.post('/api/testimonials', async (req, res) => {
  try {
    const { name, role, message, rating } = req.body;
    const newTestimonial = new Testimonial({ name, role, message, rating });
    await newTestimonial.save();
    res.status(201).json({ success: true, testimonial: newTestimonial });
  } catch (error) {
    console.error('❌ Add testimonial error:', error);
    res.status(400).json({ success: false, message: error.message });
  }
});

// GET testimonials
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    console.error('❌ Fetch testimonials error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// -------------------- SERVE REACT FRONTEND --------------------
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../dist', 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Frontend not found');
  }
});

// -------------------- GLOBAL ERROR HANDLER --------------------
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).json({ success: false, message: 'Something broke!' });
});

// -------------------- START SERVER --------------------
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
