import React from 'react'

const About = () => {
  return (
    
      <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
        <div className="max-w-6xl w-full">
          <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">About Us</h1>
  
          {/* Why Us Section */}
          <div className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At our core, we prioritize quality, innovation, and customer satisfaction. Our team goes above and beyond to deliver solutions tailored to your unique needs, ensuring every experience with us is exceptional.
              </p>
            </div>
          </div>
  
          {/* Our Mission Section */}
          <div className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is to empower individuals and businesses through cutting-edge solutions, fostering growth and driving innovation. We aim to build lasting partnerships and positively impact the communities we serve.
              </p>
            </div>
          </div>
  
          {/* Meet the Team Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet the Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Ahmed", role: "Creative Director" },
                  { name: "Amir", role: "Lead Developer" },
                  { name: "Salman", role: "Project Manager" },
                  { name: "Rizwan", role: "UI/UX Designer" },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm text-center">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Call to Action */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in touch</h2>
            <p className="text-gray-600 text-lg mb-6">
              Discover how we can help you achieve your goals. Partner with us for innovative and impactful solutions.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
              contact us
            </button>
          </div>
        </div>
      </div>
    );
  
}

export default About