import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'ML Approach for Early Detection of Cardiac Arrest',
      shortDescription: 'Machine learning project for early detection of cardiac arrest in newborn babies.',
      fullDescription: 'Applied advanced machine learning techniques to analyze vital signs for early detection of cardiac arrest in newborn babies. This healthcare-focused project utilized various ML models including Logistic Regression, Support Vector Machines (SVM), Decision Trees, and Artificial Neural Networks to predict potential cardiac events. The system processes real-time vital sign data and provides early warning alerts to medical professionals, potentially saving lives through timely intervention.',
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Healthcare'],
      category: 'Machine Learning',
      image: '/lovable-uploads/eba6041a-1fdb-4a8a-939c-327ad48878f5.png',
      features: ['Multiple ML algorithms', 'Real-time data processing', 'Early warning system', 'Medical data analysis'],
      challenges: 'Working with sensitive medical data and ensuring high accuracy for life-critical predictions',
      outcome: 'Developed a robust ML system with high accuracy in predicting cardiac arrest events'
    },
    {
      title: 'Crypto Pay',
      shortDescription: 'A Web3.0 DApp for secure peer-to-peer money transfers on the Ethereum blockchain.',
      fullDescription: 'Crypto Pay is a comprehensive Web3.0 decentralized application (DApp) built for secure peer-to-peer money transfers on the Ethereum blockchain. The project features robust Solidity smart contracts developed and tested using the Hardhat framework, ensuring secure and efficient transactions. The frontend is built with React.js and integrates seamlessly with the blockchain through Web3.js and Ethers.js libraries. Users can connect their MetaMask wallets to perform secure transactions, while IPFS (InterPlanetary File System) is leveraged for decentralized storage of transaction data, ensuring data integrity and availability across the network.',
      technologies: ['React.js', 'Solidity', 'Web3.js', 'Ethers.js', 'Hardhat', 'MetaMask', 'IPFS'],
      category: 'Blockchain & Web3',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      features: ['Smart contract development', 'MetaMask wallet integration', 'Peer-to-peer transactions', 'Decentralized storage with IPFS', 'Secure blockchain transactions', 'Web3.js integration'],
      challenges: 'Implementing secure smart contracts and ensuring proper wallet integration with error handling',
      outcome: 'Successfully developed a fully functional DApp for secure cryptocurrency transactions on Ethereum'
    },
  ];

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-orange-600 font-medium">{project.category}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">{project.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Button 
                    onClick={() => openProjectDetails(project)}
                    size="sm"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 text-xs"
                  >
                    <Eye size={12} className="mr-1" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                  <button 
                    onClick={closeProjectDetails}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Overview</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedProject.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenges & Solutions</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedProject.challenges}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Outcome</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedProject.outcome}</p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a 
                      href="https://github.com/Pavan-9281"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
