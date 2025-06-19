import  { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { API_URL } from '../constant';
import { User, Mail, Phone, HelpCircle, Info, MessageSquare } from 'lucide-react';

interface inquiryParams {
    name: string,
    phone: string,
    email: string,
    inquiryType: string,
    subject: string,
    message: string
}

const InquiryList = () => {
  const [inquiries, setInquiries] = useState<inquiryParams[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await fetch(`${API_URL}contact`);
        const data = await res.json();
        if(data?.status === "success"){
          setInquiries(data?.data);
        }
      } catch (error) {
        console.error('Failed to fetch inquiries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Inquiry Submissions</h1>
        {loading ? (
          <p className="text-center text-gray-500">Loading inquiries...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inquiries.map((inquiry, index) => (
              <Card key={index} className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                    <User className="w-5 h-5 mr-2 text-purple-600" /> {inquiry.name}
                  </h2>
                  <p className="text-gray-600 flex items-center mb-1"><Phone className="w-4 h-4 mr-2" /> {inquiry.phone}</p>
                  <p className="text-gray-600 flex items-center mb-1"><Mail className="w-4 h-4 mr-2" /> {inquiry.email}</p>
                  <p className="text-gray-600 flex items-center mb-1"><HelpCircle className="w-4 h-4 mr-2" /> Type: {inquiry.inquiryType || 'General'}</p>
                  {inquiry.subject && (
                    <p className="text-gray-600 flex items-center mb-1"><Info className="w-4 h-4 mr-2" /> Subject: {inquiry.subject}</p>
                  )}
                  <p className="text-gray-600 flex items-start"><MessageSquare className="w-4 h-4 mr-2 mt-1" /> <span className="break-words">Message: {inquiry.message}</span></p>
                </motion.div>
              </Card>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default InquiryList;