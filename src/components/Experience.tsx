
import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: 'Cloud Virtual Internship',
      company: 'AWS Academy',
      type: 'Internship',
      location: 'Remote',
      duration: 'Oct-Dec 2024',
      description: 'Completed AWS Academy Cloud Foundations program, gaining hands-on experience with EC2, S3, IAM, and cloud computing principles.',
      achievements: [
        'Gained practical experience with AWS cloud services',
        'Learned cloud architecture best practices',
        'Implemented secure cloud solutions',
        'Earned AWS Academy certification'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Introduction to Cyber Security',
      issuer: 'Cisco Networking Academy',
      year: '2024'
    },
    {
      title: 'Certification of completion of Java Full Stack',
      issuer: 'EduSkills',
      year: '2025'
    },
    {
      title: 'Smart Coder',
      issuer: 'SmartInterviews',
      year: '2025'
    }
  ];

  return (
    <section id="experience" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience & Certifications</h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and continuous learning path
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 text-center lg:text-left">Work Experience</h3>
            <div className="space-y-6 lg:space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900">{exp.title}</h4>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full w-fit">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-gray-600 text-sm lg:text-base">
                    <span className="font-semibold">{exp.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm lg:text-base">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-gray-600 text-xs lg:text-sm flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 text-center lg:text-left">Certifications</h3>
            <div className="space-y-4 lg:space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 lg:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">{cert.title}</h4>
                      <p className="text-gray-600 mb-2 text-sm lg:text-base">{cert.issuer}</p>
                      <span className="text-orange-500 font-medium text-sm lg:text-base">{cert.year}</span>
                    </div>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-500 font-bold text-base lg:text-lg">✓</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="mt-6 lg:mt-8">
              <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 text-center lg:text-left">Achievements</h4>
              <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm lg:text-base">🏆</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm lg:text-base">State Rank-20 and Excellence Medal Award</h5>
                    <p className="text-gray-600 text-xs lg:text-sm">Indian Talent Exam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
