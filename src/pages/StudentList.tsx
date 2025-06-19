import React, { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { API_URL } from '../constant';
import { User, Phone, Mail, GraduationCap, Clock, Home, ClipboardList, Users } from 'lucide-react';

interface StudentProps {
    studentName: string,
    parentName: string,
    className: string,
    phoneNumber: string,
    preferredTime: string,
    email: string,
    address: string,
    additionalRequirement:string
}

const StudentList = () => {

  const [students, setStudents] = useState<StudentProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(`${API_URL}students`);
        const data = await res.json();
        if(data?.status === "success"){
            setStudents(data?.data);
        }
      } catch (error) {
        console.error('Failed to fetch students:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Enrolled Students</h1>
        {loading ? (
          <p className="text-center text-gray-500">Loading students...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student, index) => (
              <Card key={index} className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                    <User className="w-5 h-5 mr-2 text-green-600" /> {student.studentName}
                  </h2>
                  <p className="text-gray-600 flex items-center mb-1"><Users className="w-4 h-4 mr-2" /> Parent: {student.parentName}</p>
                  <p className="text-gray-600 flex items-center mb-1"><GraduationCap className="w-4 h-4 mr-2" /> Class: {student.className}</p>
                  <p className="text-gray-600 flex items-center mb-1"><Phone className="w-4 h-4 mr-2" /> {student.phoneNumber}</p>
                  {student.email && (
                    <p className="text-gray-600 flex items-center mb-1"><Mail className="w-4 h-4 mr-2" /> {student.email}</p>
                  )}
                  <p className="text-gray-600 flex items-center mb-1"><Clock className="w-4 h-4 mr-2" /> Preferred Time: {student.preferredTime || 'N/A'}</p>
                  <p className="text-gray-600 flex items-center mb-1"><Home className="w-4 h-4 mr-2" /> Address: {student.address}</p>
                  {student.additionalRequirement && (
                    <p className="text-gray-600 flex items-start"><ClipboardList className="w-4 h-4 mr-2 mt-1" /> <span className="break-words">Requirement: {student.additionalRequirement}</span></p>
                  )}
                </motion.div>
              </Card>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default StudentList;