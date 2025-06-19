import { motion } from "framer-motion";
import {  GraduationCap, Users } from "lucide-react";

const WhyChooseUse = () => {
  return (
    <section className="w-full px-4 py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* For Students */}
        <motion.div
          className="bg-red-100 border-4 border-red-500 p-6 rounded-2xl shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="text-red-600 h-6 w-6" />
            <h2 className="text-xl font-bold text-red-700">For Students</h2>
          </div>
          <ul className="text-red-800 space-y-2 text-sm leading-relaxed">
            <li className="font-bold text-xl gradient-text">SHREE JI TUITION</li>
            <li>Excellence in Every Classroom</li>
            <li className="text-gray-800 font-bold">🎯 हर छात्र के लिए विशेष ध्यान!</li>
            <li className="text-blue-800 font-bold">📅 Monthly Test + Weekly Worksheet</li>
            <li>हर विषय का नियमित अभ्यास और मूल्यांकन — बेहतर रिज़ल्ट की 100% गारंटी!</li>
            <li>📘 सभी BOARD, सभी SUBJECTS (CBSE | ICSE | UP Board)</li>
            <li>🏫 LKG से 12वीं तक सभी विषयों के लिए अनुभवी शिक्षक उपलब्ध!</li>
            <li>✅ 100% CONTINUITY GUARANTEE — अगर कोई शिक्षक 2 बार से अधिक अनुपस्थित होते हैं, तो दूसरे शिक्षक द्वारा उसी स्थान पर क्लास ली जाती है</li>
            <li>🎓 पढाई कभी नहीं रुकेगी!</li>
            <li>📈 FOCUS ON PROGRESS — हर बच्चे की Academic Growth पर विशेष ध्यान</li>
            <li>🎯 आपका भविष्य — हमारी जिम्मेदारी!</li>
          </ul>
        </motion.div>

        {/* For Teachers */}
        <motion.div
          className="bg-yellow-100 border-4 border-yellow-500 p-6 rounded-2xl shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Users className="text-yellow-600 h-6 w-6" />
            <h2 className="text-xl font-bold text-yellow-700">For Teachers</h2>
          </div>
          <ul className="text-yellow-800 space-y-2 text-sm leading-relaxed">
            <li className="font-bold text-lg">A Platform for Every Passionate Teacher!</li>
            <li>✨ जहाँ मेहनत और समर्पण दिलाता है पहचान!</li>
            <li className="font-bold text-blue-800">💸 Timely Payment Guarantee (25-35 दिन में पक्का पेमेंट)</li>
            <li>⏰ बिल्कुल समय पर और पारदर्शी प्रक्रिया के साथ!</li>
            <li>🎁 Free Demo Opportunity — शुरुआती 2 दिन का डेमो बिल्कुल मुफ्त</li>
            <li>💵 डेमो के बाद जितने दिन आप क्लास लेते हैं — उतने दिन का पूरा पेमेंट मिलता है!</li>
            <li>💼 Attractive Earning Potential — हर घंटे ₹6000 तक कमाने का अवसर!</li>
            <li>📜 Teaching Experience Certificate — जो आपके करियर में अहम् भूमिका निभाएगा</li>
            <li>👥 Supportive Teachers' Community — गाइडेंस और सहयोग के साथ</li>
            <li>📚 Professional Development | 🚀 Career Growth Opportunities</li>
            <li>🎤 Regular Orientation & Guidance Sessions</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUse