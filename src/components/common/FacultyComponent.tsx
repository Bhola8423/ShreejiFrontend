import { motion } from 'framer-motion';

const faculty = [
  {
    name: 'Jamwant Singh',
    role: 'Founder',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Ankit Singh',
    role: 'Co-Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const FacultyComponent = () => {
  return (
    <section className="w-full bg-white py-6 mb-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Meet Our Faculty</h2>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-10">
        {faculty.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 w-full max-w-xs text-center"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-md"
            />
            <h3 className="text-2xl font-bold text-gray-800">{person.name}</h3>
            <p className="text-md text-blue-800 font-bold mt-1">{person.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FacultyComponent;
