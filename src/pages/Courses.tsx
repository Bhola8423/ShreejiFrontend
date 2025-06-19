import React from 'react';
import { motion } from 'framer-motion';
import {  Users, Clock, Award, CheckCircle, Star } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import StudentForm from './comonents/StudentForm';

const Courses: React.FC = () => {

  const courses = [
    { 
      grade: 'LKG - UKG', 
      subjects: ['English', 'Math', 'Drawing', 'General Knowledge', 'Rhymes & Stories', 'Basic Science'], 
      color: 'bg-pink-100 text-pink-800',
      description: 'Foundation learning with fun activities and interactive sessions',
      duration: '1-2 hours/day',
      students: '150+',
      rating: 4.9
    },
    { 
      grade: 'Class 1-5', 
      subjects: ['English', 'Math', 'Science', 'Social Studies', 'Hindi', 'Computer Basics'], 
      color: 'bg-blue-100 text-blue-800',
      description: 'Building strong fundamentals with conceptual clarity',
      duration: '2-3 hours/day',
      students: '300+',
      rating: 4.8
    },
    { 
      grade: 'Class 6-8', 
      subjects: ['English', 'Math', 'Science', 'Social Studies', 'Hindi', 'Computer'], 
      color: 'bg-green-100 text-green-800',
      description: 'Comprehensive middle school curriculum with practical approach',
      duration: '3-4 hours/day',
      students: '400+',
      rating: 4.9
    },
    { 
      grade: 'Class 9-10', 
      subjects: ['English', 'Math', 'Science', 'Social Studies', 'Hindi', 'Computer', 'Optional Subjects'], 
      color: 'bg-purple-100 text-purple-800',
      description: 'Board exam preparation with intensive practice and mock tests',
      duration: '4-5 hours/day',
      students: '350+',
      rating: 4.9
    },
    { 
      grade: 'Class 11-12', 
      subjects: ['PCM', 'PCB', 'Commerce', 'Arts', 'English', 'Competitive Exam Prep'], 
      color: 'bg-orange-100 text-orange-800',
      description: 'Advanced level coaching for board exams and competitive entrance',
      duration: '5-6 hours/day',
      students: '250+',
      rating: 5.0
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Tutors',
      description: 'Qualified teachers with subject expertise'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Classes scheduled as per your convenience'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '95% students show grade improvement'
    },
    {
      icon: CheckCircle,
      title: 'Regular Assessment',
      description: 'Weekly tests and progress tracking'
    }
  ];

 
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive education programs designed for every grade level, 
            ensuring quality learning from the comfort of your home with personalized attention.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <feature.icon className="h-6 w-6 text-blue-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className="p-8">
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${course.color}`}>
                {course.grade}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.grade}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              
              <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                {/* <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div> */}
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{course.rating}</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-900">Subjects Covered:</h4>
                {course.subjects.map((subject, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{subject}</span>
                  </div>
                ))}
              </div>
              
              <a href="tel:8009657788">
                <Button className="w-full">
                  Call Now
                </Button>
              </a>
            </Card>
          ))}
        </div>

        {/* Enrollment Form */}
          <StudentForm />

        {/* Additional Information */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Application Review</h4>
              <p className="text-gray-600">We review your application and match you with suitable tutors</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Tutor Assignment</h4>
              <p className="text-gray-600">We assign the best tutor based on your requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Classes Begin</h4>
              <p className="text-gray-600">Start your personalized learning journey at home</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;