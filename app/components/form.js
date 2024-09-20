import { useState } from 'react';
import { VersatileForm } from './versatile-form';
import { User, Mail, Phone, Calendar, DollarSign, Info } from 'react-icons/all'; // Assuming you're using react-icons for icons

export default function RegistrationDonationForm({ formTitle = 'Register & Donate', formDescription = 'Please fill out the form to register or donate.' }) {
  const [submitted, setSubmitted] = useState(false);

  const fields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      icon: <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200" size={18} />,
      placeholder: 'Enter your full name',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      icon: <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200" size={18} />,
      placeholder: 'Enter your email address',
      required: true,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      icon: <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200" size={18} />,
      placeholder: 'Enter your phone number (optional)',
    },
    {
      name: 'event',
      label: 'Event or Class',
      type: 'select',
      icon: <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200" size={18} />,
      options: ['Workshop', 'Conference', 'Webinar', 'Yoga Class', 'Cooking Class'],
      required: true,
    },
    {
      name: 'donation',
      label: 'Donation Amount (Optional)',
      type: 'number',
      icon: <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200" size={18} />,
      placeholder: 'Enter a donation amount',
    },
    {
      name: 'comments',
      label: 'Additional Comments',
      type: 'textarea',
      icon: <Info className="absolute left-3 top-3 transform text-gray-400 transition-all duration-200" size={18} />,
      placeholder: 'Any additional comments...',
    },
  ];

  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
    // Here you would handle the form submission, e.g., sending data to your server
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{formTitle}</h2>
      <p className="text-gray-600 mb-6">{formDescription}</p>
      {!submitted ? (
        <VersatileForm
          fields={fields}
          onSubmit={handleSubmit}
        />
      ) : (
        <div className="text-green-500 text-center mt-6">
          <h3 className="text-xl font-semibold">Thank you!</h3>
          <p>Your form has been successfully submitted.</p>
        </div>
      )}
    </div>
  );
}
