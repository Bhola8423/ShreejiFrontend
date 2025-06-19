import React, { useState } from 'react'
import Card from '../../components/ui/Card'
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { Send } from 'lucide-react';
import { API_URL } from '../../constant';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'student', label: 'Student Enrollment' },
    { value: 'tutor', label: 'Become a Tutor' },
    { value: 'support', label: 'Technical Support' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch(`${API_URL}contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (res.ok) {
        toast("✅ Message sent successfully!" , {type : "success"});
        setFormData({
          name: "",
          phone: "",
          email: "",
          inquiryType: "",
          subject: "",
          message: ""
        });
        setErrors({});
      } else {
        toast(`❌ Failed to send: ${result.message || 'Something went wrong'}` , {type : "error"});
      }
    } catch (err) {
      console.error(err);
      toast("❌ Something went wrong. Please try again." , {type : "error"});
    }
  };

  return (
    <div>
      <Card className="p-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                  placeholder="Your full name"
                  required
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                  placeholder="Your phone number"
                  required
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                placeholder="Your email address"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Inquiry Type</label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select type</option>
                {inquiryTypes.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Message subject"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                rows={5}
                placeholder="Your message"
                required
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <Button type="submit" className="w-full" size="lg">
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </form>
        </motion.div>
      </Card>
    </div>
  );
}

export default ContactForm;
