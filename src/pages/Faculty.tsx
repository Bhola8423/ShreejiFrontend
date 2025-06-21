import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Award, BookOpen, Users, Clock, MapPin, Phone, Mail } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import FacultyComponent from '../components/common/FacultyComponent';

const Faculty: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState('all');

  const faculty = [
    { 
      name: 'Uday Verma', 
      subject: 'Mathematics', 
      experience: '15 years', 
      rating: 4.9, 
      image: 'https://images.pexels.com/photos/3727511/pexels-photo-3727511.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualification: 'Ph.D. in Mathematics',
      specialization: ['Algebra', 'Calculus', 'Geometry', 'Statistics'],
      students: 120,
      location: 'Gorakhpur',
      description: 'Passionate mathematics educator with expertise in making complex concepts simple and engaging.'
    },
    { 
      name: 'Shivam singh', 
      subject: 'Science', 
      experience: '12 years', 
      rating: 4.8, 
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualification: 'M.Sc. Physics, B.Ed.',
      specialization: ['Physics', 'Chemistry', 'Biology', 'Environmental Science'],
      students: 95,
      location: 'Azamgarh',
      description: 'Science enthusiast who believes in hands-on learning and practical application of scientific concepts.'
    },
    { 
      name: 'Vikash Yadav', 
      subject: 'English', 
      experience: '10 years', 
      rating: 4.9, 
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualification: 'M.A. English Literature',
      specialization: ['Grammar', 'Literature', 'Creative Writing', 'Communication Skills'],
      students: 110,
      location: 'Gorakhpur',
      description: 'English literature expert focused on developing strong communication and analytical skills.'
    },
    { 
      name: 'Rajesh yadav', 
      subject: 'Physics', 
      experience: '18 years', 
      rating: 5.0, 
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualification: 'Ph.D. Physics, IIT Delhi',
      specialization: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Modern Physics'],
      students: 85,
      location: 'Azamgarh',
      description: 'IIT alumnus with extensive experience in competitive exam preparation and board exam coaching.'
    },
    { 
      name: 'Ms. Priya Sharma', 
      subject: 'Chemistry', 
      experience: '8 years', 
      rating: 4.7, 
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualification: 'M.Sc. Chemistry',
      specialization: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry'],
      students: 75,
      location: 'Azamgarh',
      description: 'Chemistry specialist known for making chemical reactions and concepts crystal clear.'
    },
    { 
      name: 'Mr. Amit Patel', 
      subject: 'Biology', 
      experience: '14 years', 
      rating: 4.8, 
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualification: 'M.Sc. Biology, B.Ed.',
      specialization: ['Botany', 'Zoology', 'Human Physiology', 'Genetics'],
      students: 90,
      location: 'Azamgarh',
      description: 'Biology expert with a passion for life sciences and medical entrance exam preparation.'
    }
  ];

  const subjects = ['all', 'Mathematics', 'Science', 'English', 'Physics', 'Chemistry', 'Biology'];

  const filteredFaculty = selectedSubject === 'all' 
    ? faculty 
    : faculty.filter(teacher => teacher.subject === selectedSubject);

  const achievements = [
    {
      icon: Award,
      title: 'Excellence Awards',
      description: 'Multiple teaching excellence awards and recognitions'
    },
    {
      icon: Users,
      title: 'Student Success',
      description: '95% of students show significant grade improvement'
    },
    {
      icon: BookOpen,
      title: 'Curriculum Expertise',
      description: 'Deep knowledge of CBSE, ICSE, and State board curricula'
    },
    {
      icon: Clock,
      title: 'Flexible Teaching',
      description: 'Adaptable teaching methods for different learning styles'
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Expert Faculty</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced and qualified tutors who are passionate about 
            helping students achieve their academic goals with personalized attention and proven teaching methods.
          </p>
        </motion.div>

        <FacultyComponent />

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <achievement.icon className="h-6 w-6 text-blue-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </Card>
          ))}
        </div>

        {/* Subject Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedSubject === subject
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600'
              }`}
            >
              {subject === 'all' ? 'All Subjects' : subject}
            </button>
          ))}
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredFaculty.map((teacher, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{teacher.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{teacher.subject} Specialist</p>
                <p className="text-gray-600 mb-4">{teacher.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Award className="h-4 w-4" />
                    <span>{teacher.qualification}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{teacher.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{teacher.students}+ students taught</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{teacher.location}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.specialization.map((spec, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button className="flex-1" size="sm">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Contact
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Hiring Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Hiring Process</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Application Screening</h4>
                <p className="text-gray-600 text-sm">Thorough review of qualifications and experience</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Subject Assessment</h4>
                <p className="text-gray-600 text-sm">Comprehensive subject knowledge evaluation</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Teaching Demo</h4>
                <p className="text-gray-600 text-sm">Live teaching demonstration and methodology review</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Background Check</h4>
                <p className="text-gray-600 text-sm">Verification of credentials and references</p>
              </div>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Tutor?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert faculty members are ready to help your child excel academically. 
            Contact us today to get matched with the perfect tutor for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Find a Tutor
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Faculty;