// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpCircle, X } from "lucide-react";

// --- Tagline Carousel Component ---
const TaglineCarousel = () => {
  const taglines = [
    "Empowering Businesses with Innovation",
    "Your Partner in Digital Transformation",
    "Building Solutions for a Better Tomorrow",
    "Driving Efficiency Through Technology",
    "Collaboration for Positive Impact",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-24 bg-white/70 backdrop-blur-md shadow-lg">
      <div className="relative h-full flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <p className="text-2xl font-semibold text-[#6A5ACD] tracking-wide">
              {taglines[currentIndex]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// --- Modal Content for Services ---
const serviceDetails = {
  "Web Development": `
We create responsive and dynamic websites using React, Node.js, and modern frameworks. Our approach focuses on user experience, scalability, and seamless integration with your business operations.`,
  "Database Development": `
We design, develop, and manage databases that ensure data accuracy, security, and accessibility. Whether SQL or cloud-based, our systems support growth and efficiency.`,
  "Digital Transformation Strategies": `
We assist organizations in transitioning to digital systems that enhance workflow automation, online collaboration, and operational transparency.`,
  "Custom Software Solutions": `
We develop tailor-made software to automate business functions, improve communication, and simplify reporting processes.`,
  "Impact Management and Monitoring": `
Our systems track key business metrics, measure project performance, and provide actionable insights for decision-making.`,
  "Sustainable Technology Consulting": `
We offer eco-conscious technology planning and sustainability-focused IT consulting to reduce waste and improve efficiency.`,
  "Branding & Corporate Identity": `
We provide complete branding packages including pull-up banners, wall banners, gazebos, scopics, logo design, and stationery branding to enhance your corporate image.`,
};

// --- Main Home Component ---
const Home = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="font-sans bg-[#e4e4e4] text-gray-800 relative overflow-hidden scroll-smooth">
      {/* Background Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#cec2e1]/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-[#b9a9d3]/40 rounded-full blur-3xl -z-10"></div>

      {/* Header */}
      <header className="bg-[#cec2e1]/90 shadow-md sticky top-0 z-50 backdrop-blur-md">
        <nav className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Astral Solutions</h1>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            {["Home", "About", "Vision", "Services", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#6A5ACD] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-28 text-center overflow-hidden">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-[#cec2e1] via-[#e4e4e4] to-[#cec2e1] opacity-70 -z-10"
        />
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#6A5ACD] to-[#a994e0] bg-clip-text text-transparent">
            Building Solutions for a Better Tomorrow
          </h2>
          <div className="h-1 w-20 bg-[#6A5ACD] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Empowering communities and businesses through innovation.
          </p>
        </motion.div>
        <TaglineCarousel />
        {/* Hero Image */}
        <div className="mt-10 flex justify-center">
          <img
            src="/images/MilkyWay.jpg"
            alt="Astral Solutions Hero"
            className="w-full max-w-4xl rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* About Section (unchanged) */}
      <motion.section
        id="about"
        className="py-20 container mx-auto px-6 relative"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute -top-20 left-10 w-48 h-48 bg-[#cec2e1]/40 rounded-full blur-3xl -z-10"></div>
        <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <span className="text-[#6A5ACD]">💡</span> About Us
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Astral Solutions is a forward-thinking enterprise dedicated to empowering
          communities and businesses through innovative technology solutions and
          impactful programs. The company bridges gaps in education, technology,
          and development by creating custom solutions that drive progress and
          inclusivity.
        </p>
        <p className="text-gray-700 mt-4 leading-relaxed">
          By leveraging cutting-edge tools like web development, database
          systems, and software engineering, Astral Solutions transforms how
          communities, organizations, and individuals achieve their goals—
          ensuring growth, accountability, and long-term sustainability.
        </p>
      </motion.section>
      {/* About Image */}
        <div className="mt-10 flex justify-center">
          <img
            src="/images/About.png"
            alt="Astral Solutions About"
            className="w-full max-w-4xl rounded-lg shadow-lg object-cover"
          />
        </div>

      {/* Vision Plan Section (unchanged) */}
      <motion.section
        id="vision"
        className="bg-[#cec2e1]/50 py-20 relative overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute -bottom-24 right-16 w-72 h-72 bg-[#b9a9d3]/30 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <span className="text-[#6A5ACD]">🌍</span> Vision Plan
          </h3>
          <ul className="space-y-4 text-gray-700 max-w-3xl">
            <li>
              <strong>Empowering Communities:</strong> Providing access to tools
              that enhance education and opportunities.
            </li>
            <li>
              <strong>Driving Digital Transformation:</strong> Moving
              traditional structures online for better collaboration and
              transparency.
            </li>
            <li>
              <strong>Fostering Innovation:</strong> Building database and
              software solutions that improve operations and accountability.
            </li>
            <li>
              <strong>Enhancing Opportunities:</strong> Developing systems that
              connect youth, entrepreneurs, and communities.
            </li>
            <li>
              <strong>Sustainability:</strong> Creating scalable models with
              lasting regional impact.
            </li>
            <li>
              <strong>Championing Inclusion:</strong> Ensuring access and
              equality for all through technology and innovation.
            </li>
          </ul>
        </div>
      </motion.section>
      {/* Vision Image */}
        <div className="mt-10 flex justify-center">
          <img
            src="/images/HTML.png"
            alt="Astral Solutions Vision"
            className="w-full max-w-4xl rounded-lg shadow-lg object-cover"
          />
        </div>

      {/* Services Section with Modal */}
      <motion.section
        id="services"
        className="py-20 container mx-auto px-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-2">
          <span className="text-[#6A5ACD]">⚙️</span> Our Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(serviceDetails).map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-[#cec2e1]/50 hover:shadow-2xl transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedService(service)}
            >
              <h4 className="text-lg font-semibold text-gray-800">{service}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl p-8 max-w-lg mx-4 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-[#6A5ACD]"
                onClick={() => setSelectedService(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold mb-4 text-[#6A5ACD]">
                {selectedService}
              </h3>
              <p className="text-gray-700 whitespace-pre-line">
                {serviceDetails[selectedService]}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Services Image */}
        <div className="mt-10 flex justify-center">
          <img
            src="/images/PC.jpg"
            alt="Astral Solutions Hero"
            className="w-full max-w-4xl rounded-lg shadow-lg object-cover"
          />
        </div>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="bg-[#cec2e1]/50 py-20"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">🚀 Our Projects</h3>
          <div className="space-y-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-[#cec2e1]/50"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                Office of Kgosana Koketso Rakhudu
              </h4>
              <p className="text-gray-700">
                A website project designed to streamline communication and improve
                the digital presence of the Kgosana’s office.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-[#cec2e1]/50"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                Koketso Rakhudu Foundation
              </h4>
              <p className="text-gray-700">
                A digital platform for community-driven initiatives and educational empowerment.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-[#cec2e1]/50"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                Kgotla ya Rakhudu
              </h4>
              <p className="text-gray-700">
                A traditional leadership platform designed to foster communication and preserve cultural values.
              </p>
            </motion.div>
          </div>
          <p className="text-gray-600 mt-6 italic">
            *Note: These organizations have permitted Astral Solutions to market with their sites. Other clients have paid and taken full ownership of their sites.*
          </p>
        </div>

        {/* Projects Image */}
        <div className="mt-10 flex justify-center">
          <img
            src="/images/KgosanaSite.png"
            alt="Astral Projects"
            className="w-full max-w-4xl rounded-lg shadow-lg object-cover"
          />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 container mx-auto px-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <span className="text-[#6A5ACD]">📞</span> Contact Us
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Phone:</strong> +27 63 687 3558
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> n.milanzi@astralsolution.tech
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Address:</strong> 1/61 Lenatong Section, Phokeng, Rustenburg 0300
        </p>
        <p className="text-gray-700">
          <strong>Hours:</strong> Mon - Fri: 9:00 AM - 5:00 PM
        </p>
      </motion.section>

      {/* Back to Top Button */}
      {showTopButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-[#cec2e1] hover:bg-[#b9a9d3] text-gray-700 shadow-lg transition"
        >
          <ArrowUpCircle className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default Home;
