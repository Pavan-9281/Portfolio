
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science (Cyber Security)',
      institution: 'CMR Technical Campus',
      location: 'Hyderabad, India',
      duration: '2022 - 2026',
      cgpa: '8.7/10.0',
      details: 'Comprehensive program focusing on cybersecurity principles, secure software development, and modern computing technologies.'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Vignan Vidyalayam Junior College',
      location: 'Hyderabad, India',
      duration: '2020 - 2022',
      cgpa: '98.1%',
      details: 'Science stream with Mathematics, Physics, and Chemistry, building strong analytical and problem-solving foundation.'
    },
    {
      degree: 'Secondary Education',
      institution: 'Sri Vignana Bharathi School',
      location: 'Hyderabad, India',
      duration: '2020',
      cgpa: '10/10',
      details: 'Completed secondary education with focus on fundamental subjects and comprehensive academic excellence.'
    }
  ];

  return (
    <section id="education" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 lg:p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                <div className="flex-shrink-0 flex justify-center lg:justify-start">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <h4 className="text-base lg:text-lg font-semibold text-orange-600 mb-2">{edu.institution}</h4>
                    </div>
                    <div className="text-center lg:text-right">
                      <div className="flex items-center justify-center lg:justify-end gap-2 text-gray-600 mb-1 text-sm lg:text-base">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-end gap-2 text-gray-600 mb-2 text-sm lg:text-base">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="text-base lg:text-lg font-bold text-orange-600">
                        {edu.cgpa}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm lg:text-base">{edu.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
