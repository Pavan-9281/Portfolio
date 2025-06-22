export const Skills = () => {
  const programmingLanguages = [
    { name: 'C', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', color: 'text-blue-500' },
    { name: 'C++', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: 'text-blue-600' },
    { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: 'text-orange-600' },
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'text-yellow-500' },
    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'text-blue-400' },
  ];

  const frontend = [
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'text-cyan-400' },
    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'text-blue-600' },
    { name: 'CSS/SCSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: 'text-blue-500' },
    { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: 'text-purple-500' },
    { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'text-orange-500' },
  ];

  const backend = [
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'text-green-500' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'text-green-600' },
    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'text-red-500' },
    { name: 'Express', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: 'text-gray-600' },
  ];

  const developmentTools = [
    { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'text-gray-800' },
    { name: 'VS Code', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: 'text-blue-600' },
    { name: 'AutoCAD', image: 'https://img.icons8.com/color/96/autocad.png', color: 'text-red-600' },
    { name: 'Tableau', image: 'https://img.icons8.com/color/96/tableau-software.png', color: 'text-orange-500' },
  ];

  const cybersecurity = [
    { name: 'Network Security', image: '/lovable-uploads/6d513ae3-98dd-405a-bddb-4b84e8aca66d.png', color: 'text-green-600' },
    { name: 'Risk Assessment', image: '/lovable-uploads/4b59a1ac-319b-4490-8237-438f33f3bd5b.png', color: 'text-yellow-500' },
    { name: 'Incident Response', image: 'https://img.icons8.com/color/96/security-checked.png', color: 'text-red-500' },
    { name: 'Security Protocols', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=96&h=96&q=80', color: 'text-blue-600' },
  ];

  const skillCategories = [
    { title: 'Programming Languages', skills: programmingLanguages },
    { title: 'Frontend', skills: frontend },
    { title: 'Backend', skills: backend },
    { title: 'Development Tools', skills: developmentTools },
    { title: 'Cybersecurity', skills: cybersecurity },
  ];

  return (
    <section id="skills" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Tools</h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            My technical skills and the tools I use to bring ideas to life
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => {
            const skillCount = category.skills.length;
            let gridClasses = '';
            
            // Customize grid based on number of skills
            if (skillCount === 4) {
              // Backend and Development Tools - 4 items
              gridClasses = 'grid-cols-2 sm:grid-cols-2 md:grid-cols-4 max-w-4xl';
            } else if (skillCount === 5) {
              // Programming Languages and Frontend - 5 items
              gridClasses = 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5 max-w-5xl';
            } else {
              // Cybersecurity - 4 items but different layout
              gridClasses = 'grid-cols-2 sm:grid-cols-4 max-w-4xl';
            }
            
            return (
              <div key={categoryIndex} className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-10">{category.title}</h3>
                <div className={`grid gap-8 justify-center mx-auto ${gridClasses}`}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group flex justify-center">
                      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 border border-gray-100 h-32 flex flex-col justify-center items-center w-full max-w-48">
                        <div className="flex flex-col items-center space-y-4">
                          <div className="group-hover:scale-110 transition-transform duration-300">
                            <img
                              src={skill.image}
                              alt={skill.name}
                              className="w-12 h-12 object-contain"
                              onError={(e) => {
                                console.log(`Failed to load image for ${skill.name}:`, skill.image);
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                          <span className="text-gray-900 font-bold text-lg text-center leading-tight">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
