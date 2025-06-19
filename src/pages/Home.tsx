import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, TrendingUp, CheckCircle, Star, ArrowRight, Play } from 'lucide-react';
import FloatingElement from '../components/ui/FloatingElement';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { ONRENDER_BASE_URL, studentForm, teacherForm } from '../constant';
import MainImage from "../assets/main.jpeg"
import WhyChooseUse from '../components/common/WhyChooseUse';

const Home: React.FC = () => {
  const [counters, setCounters] = useState({
    students: 0,
    teachers: 0,
    courses: 0,
    years: 0
  });

  useEffect(() => {
    fetch(ONRENDER_BASE_URL);
    const timer = setTimeout(() => {
      setCounters({
        students: 1500,
        teachers: 200,
        courses: 50,
        years: 4
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Complete syllabus coverage from LKG to 12th grade with expert guidance'
    },
    {
      icon: Users,
      title: 'Expert Tutors',
      description: 'Qualified and experienced teachers with proven track records'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '95% of our students show significant improvement in grades'
    },
    {
      icon: CheckCircle,
      title: 'Flexible Scheduling',
      description: 'Classes scheduled according to your convenience and availability'
    }
  ];

   const testimonials = [
  {
    name: 'Suman Verma',
    role: 'Parent – Azamgarh',
    content: 'Shree Ji Tuition का Monthly test और worksheet की सुविधा बहुत बढ़िया है।',
    rating: 5,
    image: 'https://images.pexels.com/photos/1835046/pexels-photo-1835046.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Mahesh Tiwari',
    role: 'Parent – Gorakhpur',
    content: 'यहां के शिक्षक बहुत अनुभवी हैं और बच्चों को उनके स्तर पर समझाते हैं। मेरी बेटी का प्रदर्शन अब लगातार बेहतर हो रहा है।',
    rating: 5,
    image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Anjali Srivastava',
    role: 'Parent – Azamgarh',
    content: 'Shree Ji Tuition एक भरोसेमंद प्लेटफॉर्म है जहाँ बच्चों की शिक्षा को गंभीरता से लिया जाता है। highly recommended!',
    rating: 4,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Rajeev Mishra',
    role: 'Parent – Ayodhya',
    content: 'बेटे की गणित और विज्ञान दोनों में कमजोरी थी, लेकिन अब वह खुद से पढ़ने लगा है। यह बदलाव Shree Ji Tuition के कारण संभव हुआ।',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Neelam Yadav',
    role: 'Parent – Azamgarh',
    content: 'Shree Ji Tuition की continuity और teaching style से मैं बहुत संतुष्ट हूं। शिक्षक बहुत सहयोगी और समय पर हैं।',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];


  const subjects = [
    { name: 'Mathematics', students: '500+', color: 'bg-blue-100 text-blue-800' },
    { name: 'Science', students: '450+', color: 'bg-green-100 text-green-800' },
    { name: 'English', students: '400+', color: 'bg-purple-100 text-purple-800' },
    { name: 'Physics', students: '300+', color: 'bg-orange-100 text-orange-800' },
    { name: 'Chemistry', students: '280+', color: 'bg-pink-100 text-pink-800' },
    { name: 'Biology', students: '250+', color: 'bg-indigo-100 text-indigo-800' },
    { name: 'Computer', students: '200+', color: 'bg-indigo-100 text-indigo-800' },
    { name: 'Commerce', students: '350+', color: 'bg-pink-100 text-indigo-800' },
    { name: 'Hindi', students: '250+', color: 'bg-orange-100 text-indigo-800' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingElement delay={0}>
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>
          </FloatingElement>
          <FloatingElement delay={2}>
            <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30"></div>
          </FloatingElement>
          <FloatingElement delay={4}>
            <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-200 rounded-full opacity-30"></div>
          </FloatingElement>
          <FloatingElement delay={1}>
            <div className="absolute top-60 right-40 w-12 h-12 bg-pink-200 rounded-full opacity-30"></div>
          </FloatingElement>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-red-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                India's <span className="gradient-text">First Choice </span> <span className='text-gray-900'>Tuition</span> 
              </motion.h1>
               <motion.h1 
                className="text-2xl lg:text-4xl font-bold text-red-900 leading-tight "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Premium <span className="gradient-text">Home Tuiton </span> Service
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Connect with qualified tutors for personalized learning at home. 
                From LKG to 12th grade, we provide expert education right at your doorstep 
                with proven teaching methodologies and individual attention with <span className='font-bold gradient-text'>Monthly Test</span>  and worksheet.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to={"/career"}>
                  <Button size="lg" className="w-full sm:w-auto font-bold text-3xl flex items-center" >
                    <span className='text-2xl'>Join as a Teacher</span> <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to={"/courses"}>
                  <Button size="lg" variant='outline' className="w-full sm:w-auto font-bold text-3xl flex items-center">
                   <span className='text-2xl'> Join as Student</span>
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    <AnimatedCounter end={counters.students} suffix="+" /> 
                  </div>
                  <div className="text-gray-600">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    <AnimatedCounter end={counters.teachers} suffix="+" />
                  </div>
                  <div className="text-gray-600">Expert Tutors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    <AnimatedCounter end={counters.courses} suffix="+" />
                  </div>
                  <div className="text-gray-600">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    <AnimatedCounter end={counters.years} suffix="+" />
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <FloatingElement>
                <img 
                  src={MainImage} 
                  alt="Students learning" 
                  className="rounded-2xl shadow-2xl w-[200%]"
                />
              </FloatingElement>
              
              <FloatingElement delay={1}>
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Excellence Award</div>
                      <div className="text-sm text-gray-600">Best Tuition Service 2024</div>
                    </div>
                  </div>
                </motion.div>
              </FloatingElement>

              <FloatingElement delay={2}>
                <motion.div 
                  className="absolute -top-6 -right-6 bg-blue-600 text-white rounded-xl p-4 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm">Success Rate</div>
                  </div>
                </motion.div>
              </FloatingElement>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Shree Ji Tuition?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive educational solutions with personalized attention 
              to help every student achieve their academic goals.
            </p>
          </motion.div>

          <WhyChooseUse />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Subjects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Subjects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most sought-after subjects with experienced tutors and proven results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{subject.name}</h3>
                    <p className="text-gray-600">{subject.students} students enrolled</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${subject.color}`}>
                    Popular
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Parents Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied parents have to say about our services.
            </p>
          </motion.div>
          <div className="w-full px-4 py-12 flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl w-full justify-items-center">
  
    {testimonials.map((testimonial, index) => (
      <Card key={index} className="p-8 w-full max-w-sm shadow-lg rounded-xl bg-white">
        {/* Rating stars */}
        <div className="flex items-center space-x-1 mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>

        {/* Testimonial text */}
        <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>

        {/* User info */}
        <div className="flex items-center space-x-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-gray-900">{testimonial.name}</div>
            <div className="text-sm text-gray-600">{testimonial.role}</div>
          </div>
        </div>
      </Card>
    ))}
  </div>
</div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied students and parents who have experienced 
              the difference with EduTutor's personalized home tuition services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button variant="secondary" size="lg" className=" text-blue-600 hover:bg-gray-100">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white  hover:text-blue-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;