import React  from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Users, Award } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ContactForm from './comonents/ContactFrom';

const Contact: React.FC = () => {


  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 80096 57788', '+91 739893 66058'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@shreejituition.com', 'shreejihometution@gmail.com'],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['Budhanpur ', 'Azamgarh, Uttar Pradesh 276142'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: Closed'],
      color: 'bg-orange-100 text-orange-600'
    }
  ];



  const faqs = [
    {
      question: 'How do I enroll my child for tuition?',
      answer: 'You can enroll by filling out our online form or calling us directly. We will match your child with the most suitable tutor based on their needs and schedule.'
    },
    {
      question: 'What subjects do you offer?',
      answer: 'We offer comprehensive tutoring for all subjects from LKG to 12th grade, including Mathematics, Science, English, Social Studies, and competitive exam preparation.'
    },
    {
      question: 'How are tutors selected?',
      answer: 'Our tutors go through a rigorous selection process including qualification verification, subject assessment, teaching demonstration, and background checks.'
    },
    {
      question: 'What are your fees?',
      answer: 'Our fees vary based on the grade level, subjects, and duration of classes. Please contact us for detailed fee structure and customized packages.'
    }
  ];

 

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any inquiries about our tuition services. 
            We're here to help you find the perfect educational solution for your child.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${info.color}`}
              >
                <info.icon className="h-6 w-6" />
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">{detail}</p>
              ))}
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <ContactForm />

          {/* Map and Additional Info */}
          <div className="space-y-8">
            <Card className="p-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Budhanpur , Azamgarh Uttar Pradesh 276142</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">Budhanpur , Azamgarh, Uttar Pradesh 276142</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-orange-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Office Hours</h4>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Card>

            <Card className="p-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">1500+</div>
                    <div className="text-sm text-gray-600">Happy Students</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our friendly team is always ready to help. Don't hesitate to reach out 
            for any additional information about our tutoring services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8009657788" >
            <Button size="lg">
              <Phone className="mr-2 h-5 w-5" /> 
              Call Us Now
            </Button>
            </a>
            <a href="https://wa.me/918009657788" target="_blank">
              <Button variant="outline" size="lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Live Chat
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;