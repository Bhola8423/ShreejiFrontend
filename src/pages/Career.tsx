import React  from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, TrendingUp, CheckCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import {Link} from "react-router-dom"
import Button from '../components/ui/Button';
import { teacherForm } from '../constant';
import TeacherForm from './comonents/TeacherForm';

const Career: React.FC = () => {
 
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with performance-based incentives'
    },
    {
      icon: Clock,
      title: 'Flexible Working Hours',
      description: 'Choose your own schedule and work-life balance'
    },
    {
      icon: Users,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career advancement'
    },
    {
      icon: Award,
      title: 'Recognition Programs',
      description: 'Regular appreciation and awards for outstanding performance'
    }
  ];

  const requirements = [
    'Bachelor\'s degree or higher in relevant subject',
    'Strong subject expertise and teaching passion',
    'Excellent communication and interpersonal skills',
    'Patience and ability to work with students of all levels',
    'Commitment to student success and academic excellence',
    'Previous teaching experience preferred but not mandatory'
  ];



  const jobOpenings = [
    {
      title: 'Mathematics Tutor',
      location: 'Azamgarh',
      type: 'Full-time / Part-time',
      experience: '2+ years',
      description: 'Looking for experienced mathematics tutors for classes 6-12'
    },
    {
      title: 'Science Teacher',
      location: 'Azamgarh',
      type: 'Full-time / Part-time',
      experience: '3+ years',
      description: 'Physics, Chemistry, Biology tutors needed for competitive exam preparation'
    },
    {
      title: 'English Literature Expert',
      location: 'Gorakhpur',
      type: 'Full-time / Part-time',
      experience: '1+ years',
      description: 'English language and literature tutor for middle and high school students'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Become a part of our mission to provide quality education. 
            Join our team of expert tutors and make a difference in students' lives while building a rewarding career.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <benefit.icon className="h-6 w-6 text-blue-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Current Openings */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Job Openings</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Type:</strong> {job.type}</p>
                  <p><strong>Experience:</strong> {job.experience}</p>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <Button className="w-full" size="sm">
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Application Form */}
            <TeacherForm />

        {/* Requirements and Process */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <Card className="p-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{requirement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Card>

          {/* Selection Process */}
          <Card className="p-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Selection Process</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Application Review</h4>
                    <p className="text-gray-600 text-sm">Initial screening of qualifications and experience</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-green-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Subject Assessment</h4>
                    <p className="text-gray-600 text-sm">Written test to evaluate subject knowledge</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-purple-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teaching Demo</h4>
                    <p className="text-gray-600 text-sm">Live demonstration of teaching skills</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-orange-600">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Final Interview</h4>
                    <p className="text-gray-600 text-sm">Personal interview and background verification</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Card>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Teaching Journey?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of passionate shree ji tuition and help shape the future of students 
            while building a rewarding career in education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"/career"}>
            <Button size="lg">
              Apply Now
            </Button>
            </Link>
            {/* <Button variant="outline" size="lg">
              Learn More
            </Button> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Career;