const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Contact = require('./models/Contact');
const Testimonial = require('./models/testimonial');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.log('❌ Mongo Error:', err));

// -------------------- CONTACT FORM ROUTE --------------------
app.post('/api/contact', async (req, res) => {
  const { user_name, user_email, user_phone, message } = req.body;

  try {
    const newContact = new Contact({
      name: user_name,
      email: user_email,
      phone: user_phone,
      message,
    });

    await newContact.save();
    res.status(200).json({ success: true, message: 'Message received.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// -------------------- TESTIMONIAL ROUTES --------------------

// POST: Add a testimonial
app.post('/api/testimonials', async (req, res) => {
  try {
    const { name, role, message, rating } = req.body;
    const newTestimonial = new Testimonial({ name, role, message, rating });
    await newTestimonial.save();
    res.status(201).json({ success: true, testimonial: newTestimonial });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// GET: Get all testimonials
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
