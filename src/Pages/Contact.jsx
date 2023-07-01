import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Set up your EmailJS service and template details
    const serviceId = 'service_qkc4r4o';
    const templateId = 'template_u5zs6uv';
    const userId = 'uUu3gsFSfDlJGCgxQ';

    // Validate form data
    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Prepare email data
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send email
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then(() => {
        setStatus('Your message has been sent!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('Sorry, there was an issue sending your message. Please try again later.');
      });
  };

  return (
    <div className="container mx-auto">
      <div className="lg:flex lg:flex-wrap mt-8">
        {/* Form */}
        <div className="w-full lg:w-1/3 lg:pr-4">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="mb-4 w-full">
              <label htmlFor="name" className="block mb-1 font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="email" className="block mb-1 font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="message" className="block mb-1 font-bold">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4 w-full">
              <button
                type="submit"
                className="w-full px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Send Message
              </button>
            </div>
            {status && <p className="text-red-500">{status}</p>}
          </form>
        </div>

        {/* Address */}
        <div className="w-full lg:w-2/3">
          <div className="flex mb-4 items-start">
            <div className="mr-4">
              <MdLocationOn className="text-3xl text-blue-500" />
            </div>
            <div>
              <p className="font-bold">Address</p>
              <p>123 Street, City</p>
              <p>State, Country</p>
            </div>
          </div>
          <div className="flex mb-4 items-start">
            <div className="mr-4">
              <MdEmail className="text-3xl text-blue-500" />
            </div>
            <div>
              <p className="font-bold">Email</p>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="flex mb-4 items-start">
            <div className="mr-4">
              <MdPhone className="text-3xl text-blue-500" />
            </div>
            <div>
              <p className="font-bold">Phone</p>
              <p>+1 234 567 890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
