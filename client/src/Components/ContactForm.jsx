import React, { useRef, useState } from 'react';

const ContactForm = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Collect form data
    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      user_phone: form.current.user_phone.value,
      message: form.current.message.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        form.current.reset();
      } else {
        setStatusMessage('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setStatusMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatusMessage(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row items-start justify-between px-8 py-12 gap-8">
      {/* Contact Form Section */}
      <div className="lg:w-1/2 w-full bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Contact Apricoat Insurances</h2>
        <p className="text-gray-600 mb-6">
          Have questions about our insurance services? Reach out — we're here to help you secure peace of mind.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="user_email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="user_phone"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {statusMessage && (
            <p className="text-center text-sm text-green-600 mt-3">{statusMessage}</p>
          )}
        </form>
      </div>

      {/* FAQ Section */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Frequently Asked Questions (FAQS)</h2>
        <div className="space-y-5">
          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-600">
            <h4 className="text-lg font-semibold text-green-700">What types of insurance do you offer?</h4>
            <p className="text-gray-700 text-sm mt-1">We offer a range of insurance services including marine, fire, life, vehicle, and commercial property insurance.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-600">
            <h4 className="text-lg font-semibold text-green-700">How do I file a claim?</h4>
            <p className="text-gray-700 text-sm mt-1">You can file a claim by contacting us through this form or by calling our toll-free number provided on the website.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-600">
            <h4 className="text-lg font-semibold text-green-700">Is consultation free?</h4>
            <p className="text-gray-700 text-sm mt-1">Yes, our initial consultation to help you understand your insurance needs is absolutely free.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-600">
            <h4 className="text-lg font-semibold text-green-700">How quickly can I get coverage?</h4>
            <p className="text-gray-700 text-sm mt-1">Once we review your application, coverage can often begin within 24–48 hours for most policies.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-600">
            <h4 className="text-lg font-semibold text-green-700">Is theft of goods during transit covered under Marine Insurance?</h4>
            <p className="text-gray-700 text-sm mt-1">Yes, marine insurance generally covers theft during the transport of goods, but certain policies may exclude theft in specific situations, such as when goods are left unattended or poorly secured.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
