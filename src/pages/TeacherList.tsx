import React, { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { API_URL } from '../constant';
import { User, Mail, Phone, BookOpen, GraduationCap, Landmark, BadgeCheck, Calendar, MapPin, MessageCircle } from 'lucide-react';

interface teacherProps {
    fullName: string,
    email: string,
    phoneNumber: string,
    subject: string,
    qualification: string,
    experience: string,
    availability: string,
    expectedSalary: string,
    address: string,
    motivation: string
}

const TeacherList = () => {
  const [teachers, setTeachers] = useState<teacherProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await fetch(`${API_URL}teachers`);
        const data = await res.json();
        if(data?.status === "success"){
          setTeachers(data?.data);
        }
      } catch (error) {
        console.error('Failed to fetch teachers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Tutors</h1>
        {loading ? (
          <p className="text-center text-gray-500">Loading teachers...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <Card key={index} className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                    <User className="w-5 h-5 mr-2 text-blue-600" /> {teacher?.fullName}
                  </h2>
                  <p className="text-gray-600 flex items-center mb-1"><Mail className="w-4 h-4 mr-2" /> {teacher?.email}</p>
                  <p className="text-gray-600 flex items-center mb-1"><Phone className="w-4 h-4 mr-2" /> {teacher?.phoneNumber}</p>
                  <p className="text-gray-600 flex items-center mb-1"><BookOpen className="w-4 h-4 mr-2" /> Subject: {teacher?.subject}</p>
                  <p className="text-gray-600 flex items-center mb-1"><GraduationCap className="w-4 h-4 mr-2" /> Qualification: {teacher?.qualification}</p>
                  <p className="text-gray-600 flex items-center mb-1"><BadgeCheck className="w-4 h-4 mr-2" /> Experience: {teacher?.experience}</p>
                  <p className="text-gray-600 flex items-center mb-1"><Calendar className="w-4 h-4 mr-2" /> Availability: {teacher?.availability}</p>
                  <p className="text-gray-600 flex items-center mb-1"><Landmark className="w-4 h-4 mr-2" /> Expected Salary: {teacher?.expectedSalary}</p>
                  <p className="text-gray-600 flex items-center mb-1"><MapPin className="w-4 h-4 mr-2" /> Address: {teacher?.address}</p>
                  <p className="text-gray-600 flex items-start"><MessageCircle className="w-4 h-4 mr-2 mt-1" /> <span className="break-words">Motivation: {teacher?.motivation}</span></p>
                </motion.div>
              </Card>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TeacherList;