
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tannirupavan12@gmail.com',
      href: 'mailto:tannirupavan12@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 94409 20177',
      href: 'tel:+919440920177'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Pavan-9281'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tanniru-pavan-7330b9259/'
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-6 lg:mb-8 text-sm lg:text-base">
                I'm always open to discussing new opportunities, innovative projects, 
                or potential collaborations. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors flex-shrink-0">
                      <IconComponent className="text-orange-600 group-hover:text-white" size={20} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs lg:text-sm text-gray-500">{info.label}</p>
                      <p className="font-semibold text-gray-900 text-sm lg:text-base">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="pt-4 lg:pt-6">
              <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4 justify-center lg:justify-start">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md hover:bg-orange-500 hover:text-white transition-all group"
                    >
                      <IconComponent size={20} className="text-gray-600 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 text-center lg:text-left">Send Me a Message</h3>
            <form className="space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input placeholder="What's this about?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project or just say hello!"
                  rows={6}
                />
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 lg:mt-20 pt-6 lg:pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm lg:text-base">
            © 2025 Tanniru Pavan All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
