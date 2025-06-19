import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { API_URL } from '../../constant';
import { toast } from 'react-toastify';


const StudentForm = () => {

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    className: "",
    phoneNumber: "",
    preferredTime: "",
    email: "",
    address: "",
    additionalRequirement: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.studentName.trim()) newErrors.studentName = "Student name is required";
    if (!formData.parentName.trim()) newErrors.parentName = "Parent name is required";
    if (!formData.className.trim()) newErrors.className = "Class is required";
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid 10-digit phone number";
    }
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(`${API_URL}students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result?.status === "success") {
        toast("Form submitted successfully" , {type : "success"})
        setFormData({
          studentName: "",
          parentName: "",
          className: "",
          phoneNumber: "",
          preferredTime: "",
          email: "",
          address: "",
          additionalRequirement: ""
        });
      } else {
        toast(`❌ Failed: ${result?.message || 'Unknown error'}` , {type : "error"});
      }
    } catch (error) {
      toast('❌ An error occurred. Please try again later.' , {type : "error"});
      console.error('Submit Error:', error);
    }
  };

  return (
    <div>
      <Card className="p-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Student Enrollment Form</h3>
         
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            {/* Student Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Student Name *</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                className={`w-full p-3 border ${errors.studentName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                placeholder="Enter student name"
                required
              />
              {errors.studentName && <p className="text-red-500 text-sm">{errors.studentName}</p>}
            </div>

            {/* Parent Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Parent Name *</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleInputChange}
                className={`w-full p-3 border ${errors.parentName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                placeholder="Enter parent name"
                required
              />
              {errors.parentName && <p className="text-red-500 text-sm">{errors.parentName}</p>}
            </div>

            {/* Class */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Class *</label>
              <select
                name="className"
                value={formData.className}
                onChange={handleInputChange}
                className={`w-full p-3 border ${errors.className ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                required
              >
                <option value="">Select Class</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={`Class ${i + 1}`}>Class {i + 1}</option>
                ))}
              </select>
              {errors.className && <p className="text-red-500 text-sm">{errors.className}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`w-full p-3 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                placeholder="Enter 10-digit phone number"
                required
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Preferred Time</label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select Preferred Time</option>
                <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                required
                onChange={handleInputChange}
                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                placeholder="Enter email address"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full p-3 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                rows={3}
                placeholder="Enter complete address"
                required
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>

            {/* Additional Requirements */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Additional Requirements</label>
              <textarea
                name="additionalRequirement"
                value={formData.additionalRequirement}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows={3}
                placeholder="Any specific requirements or subjects you'd like to focus on"
              />
            </div>

            <div className="md:col-span-2">
              <Button type="submit" variant="secondary" className="w-full" size="lg">
                Submit Enrollment Request
              </Button>
            </div>
          </form>
        </motion.div>
      </Card>
    </div>
  );
};

export default StudentForm;
