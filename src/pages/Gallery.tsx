import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Play, Award, Users, BookOpen } from 'lucide-react';
import Card from '../components/ui/Card';
import Img1 from "../assets/images/img1.jpeg"
import Img2 from "../assets/images/img2.jpeg"
import Img3 from "../assets/images/img3.jpeg"
import Img4 from "../assets/images/img4.jpeg"
import Img5 from "../assets/images/img5.jpeg"
import Img6 from "../assets/images/img6.jpeg"
import Img7 from "../assets/images/img7.jpeg"
import Img8 from "../assets/images/img8.jpeg"
import Img9 from "../assets/images/img9.jpeg"
import Img10 from "../assets/images/img10.jpeg"
import Img11 from "../assets/images/img11.jpeg"
import Img12 from "../assets/images/img12.jpeg"
import Img13 from "../assets/images/img13.jpeg"
import Img14 from "../assets/images/img14.jpeg"
import Img15 from "../assets/images/img15.jpeg"
import Img16 from "../assets/images/img16.jpeg"
import Img17 from "../assets/images/img17.jpeg"
import Img18 from "../assets/images/img18.jpeg"
import Img19 from "../assets/images/img19.jpeg"
import Img20 from "../assets/images/img20.jpeg"
import Img21 from "../assets/images/img21.jpeg"
import Img22 from "../assets/images/img22.jpeg"
import Img23 from "../assets/images/img23.jpeg"
import Img24 from "../assets/images/img24.jpeg"
import Img25 from "../assets/images/img25.jpeg"

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      src: Img1,
      category: 'classroom',
      title: 'Interactive Learning Session',
      description: 'Students engaged in collaborative problem-solving'
    },
    {
      id: 2,
      // src: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
      src : Img24,
      category: 'activities',
      title: 'Science Experiment',
      description: 'Hands-on learning with practical experiments'
    },
    {
      id: 3,
      // src: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
      src : Img3,
      category: 'classroom',
      title: 'Mathematics Class',
      description: 'Advanced mathematics concepts explained simply'
    },
    {
      id: 4,
      // src: 'https://images.pexels.com/photos/5427656/pexels-photo-5427656.jpeg?auto=compress&cs=tinysrgb&w=600',
      src : Img4,
      category: 'activities',
      title: 'Group Study Session',
      description: 'Collaborative learning environment'
    },
    {
      id: 5,
      // src: 'https://images.pexels.com/photos/8471888/pexels-photo-8471888.jpeg?auto=compress&cs=tinysrgb&w=600',
      src : Img5,
      category: 'achievements',
      title: 'Award Ceremony',
      description: 'Celebrating student achievements and milestones'
    },
    {
      id: 6,
      // src: 'https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=600',
      src : Img6 ,
      category: 'classroom',
      title: 'English Literature Class',
      description: 'Exploring classic literature and creative writing'
    },
    {
      id: 7,
      // src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      src : Img7,
      category: 'activities',
      title: 'Art & Creativity',
      description: 'Developing creative skills through art projects'
    },
    {
      id: 8,
      // src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      src : Img23,
      category: 'classroom',
      title: 'Computer Science Lab',
      description: 'Learning programming and digital literacy'
    },
    {
      id: 9,
      // src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      src : Img9,
      category: 'achievements',
      title: 'Student Success Stories',
      description: 'Celebrating academic excellence and progress'
    },
    {
      id: 10,
      // src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      src : Img17,
      category: 'activities',
      title: 'Project Presentation',
      description: 'Students presenting their research projects'
    },
    {
      id: 11,
      // src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      src : Img15,
      category: 'classroom',
      title: 'Physics Laboratory',
      description: 'Practical physics experiments and demonstrations'
    },
    {
      id: 12,
      // src: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600',
      src : Img12,
      category: 'achievements',
      title: 'Competition Winners',
      description: 'Students excelling in academic competitions'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos', icon: Camera },
    { id: 'classroom', label: 'Classroom', icon: BookOpen },
    { id: 'activities', label: 'Activities', icon: Users },
    { id: 'achievements', label: 'Achievements', icon: Award }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  const stats = [
    { number: '500+', label: 'Happy Moments Captured' },
    { number: '50+', label: 'Success Stories' },
    { number: '100+', label: 'Learning Activities' },
    { number: '25+', label: 'Award Ceremonies' }
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a glimpse into our vibrant learning environment, successful student moments, 
            and the joy of education that defines our tutoring experience.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            </Card>
          ))}
        </div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-600 shadow-md'
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Camera className="h-8 w-8 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience Our Teaching</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Watch Our Teaching Methods</h4>
                <p className="text-gray-600 mb-6">
                  Get an inside look at our innovative teaching approaches, interactive sessions, 
                  and the positive learning environment we create for every student.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Interactive learning sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Personalized attention to each student</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Modern teaching methodologies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Regular progress assessments</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Teaching video thumbnail"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300"
                    >
                      <Play className="h-12 w-12 text-white ml-1" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredItems[selectedImage].src}
                  alt={filteredItems[selectedImage].title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                
                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-1">{filteredItems[selectedImage].title}</h3>
                  <p className="text-sm opacity-90">{filteredItems[selectedImage].description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;