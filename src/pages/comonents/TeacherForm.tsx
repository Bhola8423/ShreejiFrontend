import { useState } from 'react';
import Card from '../../components/ui/Card';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { API_URL } from '../../constant';
import { Upload, Send } from 'lucide-react';
import { toast } from 'react-toastify';

const TeacherForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    qualification: '',
    experience: '',
    availability: '',
    expectedSalary: '',
    address: '',
    motivation: ''
  });

  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [message, setMessage] = useState('');

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English',
    'Hindi', 'Social Studies', 'Computer Science', 'Economics', 'Accountancy'
  ];

  const experienceLevels = ['0-1 years', '2-5 years', '6-10 years', '10+ years'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setResume(file);
    } else {
      setErrors({ ...errors, resume: 'File must be under 5MB' });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Enter valid 10-digit phone number';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.qualification.trim()) newErrors.qualification = 'Qualification is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.motivation.trim()) newErrors.motivation = 'Motivation is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    if (resume) {
      formDataToSend.append('resume', resume);
    }

    try {
      const res = await fetch(`${API_URL}teachers`, {
        method: 'POST',
        body: formDataToSend
      });

      const result = await res.json();

      if (result.status === "success") {
        toast('✅ Application submitted successfully.' , {type : "success"});
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          subject: '',
          qualification: '',
          experience: '',
          availability: '',
          expectedSalary: '',
          address: '',
          motivation: ''
        });
        setResume(null);
        setErrors({});
      } else {
        toast(`❌ Submission failed: ${result?.message || 'Unknown error'}` , {type : "error"});
      }
    } catch (err) {
      console.error(err);
      toast('❌ An error occurred. Please try again.' , {type : "error"});
    }
  };

  return (
    <div>
      <Card className="p-8 max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tutor Application Form</h3>
          {message && (
            <div className="text-center mb-6 text-blue-600 font-medium text-lg">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            {/* Fields */}
            {[
              { label: 'Full Name *', name: 'fullName', type: 'text', required: true },
              { label: 'Email Address *', name: 'email', type: 'email', required: true },
              { label: 'Phone Number *', name: 'phoneNumber', type: 'tel', required: true },
              { label: 'Highest Qualification *', name: 'qualification', type: 'text', required: true },
              { label: 'Expected Salary (per month)', name: 'expectedSalary', type: 'text', required: false }
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-gray-700 font-semibold mb-2">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={(formData as any)[field.name]}
                  onChange={handleInputChange}
                  className={`w-full p-3 border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  required={field.required}
                />
                {errors[field.name] && <p className="text-red-500 text-sm">{errors[field.name]}</p>}
              </div>
            ))}

            {/* Subject */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Subject Specialization *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full p-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                required
              >
                <option value="">Select Subject</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
            </div>

            {/* Experience */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Teaching Experience</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select Experience</option>
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Availability</label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select Availability</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Weekend only">Weekend only</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Current Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full p-3 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                rows={3}
                placeholder="Enter your complete address"
                required
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>

            {/* Motivation */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Why do you want to join us? *</label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                className={`w-full p-3 border ${errors.motivation ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                rows={4}
                placeholder="Tell us about your motivation, teaching philosophy, and career goals"
                required
              />
              {errors.motivation && <p className="text-red-500 text-sm">{errors.motivation}</p>}
            </div>

            {/* Resume Upload */}
            {/* <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Upload Resume</label>
              <label className="cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors duration-300 block">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 mb-1">{resume ? resume.name : "Click to upload or drag & drop"}</p>
                <p className="text-sm text-gray-500">PDF, DOC, DOCX (max. 5MB)</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              {errors.resume && <p className="text-red-500 text-sm mt-2">{errors.resume}</p>}
            </div> */}

            {/* Submit */}
            <div className="md:col-span-2">
              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Submit Application
              </Button>
            </div>
          </form>
        </motion.div>
      </Card>
    </div>
  );
};

export default TeacherForm;
