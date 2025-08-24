
import { Mail, MessageCircle, Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const resources = [
    { name: 'Scratch Programming Guide', href: '#' },
    { name: 'Forest Conservation Facts', href: '#' },
    { name: 'Getting Started Tutorial', href: '#' },
    { name: 'FAQ & Support', href: '#' }
  ];

  const community = [
    { name: 'Discord Community', href: '#' },
    { name: 'Past Event Gallery', href: '#' },
    { name: 'Mentor Network', href: '#' },
    { name: 'Success Stories', href: '#' }
  ];

  return (
    <footer className="bg-bark-brown text-white relative overflow-hidden">
      {/* Wave Transition */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: '60px', width: '100%' }}>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" className="text-leaf-cream"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8 relative z-10">
        {/* Newsletter Signup */}
        <div className="text-center mb-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-leaf-cream mb-6">
              Get updates about future summits, resources, and coding opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-leaf-cream focus:outline-none focus:ring-2 focus:ring-burnt-orange"
              />
              <Button className="bg-earth-gradient hover:opacity-90 text-white font-semibold px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/2091c1fc-a7ee-4dff-9918-9460cdb3b498.png" 
                alt="LettuceBuild" 
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold text-earth-gradient">
                Scratch Sustainability Summit
              </h3>
            </div>
            <p className="text-leaf-cream/80 mb-6 leading-relaxed">
              An annual coding event that inspires young programmers to create 
              meaningful projects addressing environmental challenges. Hosted by 
              LettuceBuild, connecting technology with positive impact.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" className="bg-nature-gradient text-white">
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
              <Button size="sm" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-forest-deep">
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Discord
              </Button>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-burnt-orange">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-leaf-cream/80 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>{resource.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-moss-green">Community</h4>
            <ul className="space-y-3">
              {community.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-leaf-cream/80 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
              <a 
                href="mailto:sss@applied-computing.org"
                className="flex items-center space-x-2 text-leaf-cream hover:text-burnt-orange transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>sss@applied-computing.org</span>
              </a>
              <a 
                href="#"
                className="flex items-center space-x-2 text-leaf-cream hover:text-burnt-orange transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Join our Discord Server</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-leaf-cream/60">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="mb-4 sm:mb-0">
              © 2025 LettuceBuild. Made with{' '}
              <Heart className="w-4 h-4 inline text-burnt-orange" />{' '}
              for young environmental coders.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 forest-pattern opacity-5" />
    </footer>
  );
};

export default Footer;
