
import { Button } from '@/components/ui/button';
import { Code2, Play, Users, BookOpen, ExternalLink } from 'lucide-react';

const ScratchSection = () => {
  const features = [
    {
      icon: Code2,
      title: "Visual Block Programming",
      description: "Drag and drop code blocks to create programs - no typing required!"
    },
    {
      icon: Play,
      title: "Instant Results",
      description: "See your creations come to life immediately as you build"
    },
    {
      icon: Users,
      title: "Perfect for Beginners",
      description: "Designed specifically for ages 8-16, but fun for all ages"
    },
    {
      icon: BookOpen,
      title: "Learn While Creating",
      description: "Master programming concepts through creative projects"
    }
  ];

  return (
    <section id="about" className="section-padding bg-forest-gradient relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-2xl rotate-12 float-animation" />
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-burnt-orange/10 rounded-full float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-moss-green/15 rounded-lg rotate-45 float-animation" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-white font-semibold mb-6">
            <Code2 className="w-5 h-5" />
            <span>Programming Made Simple</span>
          </div>
          
          <h2 className="text-white mb-6">
            What is
            <span className="block text-earth-gradient">Scratch Programming?</span>
          </h2>
          
          <p className="text-xl text-leaf-cream/90 max-w-3xl mx-auto leading-relaxed">
            Scratch is a visual programming language that makes coding accessible and fun. 
            Perfect for beginners, it uses colorful blocks that snap together like puzzle pieces 
            to create amazing interactive stories, games, and animations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-10 h-10 text-burnt-orange mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-leaf-cream/80 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Scratch Demo Preview */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              See Scratch in Action
            </h3>
            
            {/* Mock Scratch Interface */}
            <div className="bg-white rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm text-gray-600 ml-2">Scratch Programming Environment</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 h-48">
                {/* Block Palette */}
                <div className="bg-gray-100 rounded p-2">
                  <div className="text-xs font-semibold text-gray-600 mb-2">Code Blocks</div>
                  <div className="space-y-1">
                    <div className="bg-blue-500 text-white text-xs p-1 rounded">when clicked</div>
                    <div className="bg-purple-500 text-white text-xs p-1 rounded">move 10 steps</div>
                    <div className="bg-green-500 text-white text-xs p-1 rounded">say "Hello!"</div>
                  </div>
                </div>
                
                {/* Script Area */}
                <div className="bg-gray-50 rounded p-2">
                  <div className="text-xs font-semibold text-gray-600 mb-2">Your Code</div>
                  <div className="space-y-1">
                    <div className="bg-blue-500 text-white text-xs p-1 rounded">when clicked</div>
                    <div className="bg-orange-500 text-white text-xs p-1 rounded">forever</div>
                    <div className="bg-purple-500 text-white text-xs p-1 rounded ml-2">move 10 steps</div>
                  </div>
                </div>
                
                {/* Stage */}
                <div className="bg-white border-2 border-gray-200 rounded p-2">
                  <div className="text-xs font-semibold text-gray-600 mb-2">Stage</div>
                  <div className="w-full h-24 bg-gradient-to-b from-blue-300 to-blue-500 rounded flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-400 rounded-full animate-bounce" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-leaf-cream mb-4">
                Start creating immediately - no complex setup required!
              </p>
              <Button className="bg-earth-gradient hover:opacity-90 text-white font-semibold">
                <ExternalLink className="w-4 h-4 mr-2" />
                Try Scratch Online
              </Button>
            </div>
          </div>
        </div>

        {/* Support Information */}
        <div className="glass-dark p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Get 1:1 Coaching Support
          </h3>
          <p className="text-leaf-cream mb-6 max-w-2xl mx-auto">
            New to Scratch? No problem! LettuceBuild offers personalized coaching sessions 
            to help you get started and build confidence before the summit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-nature-gradient text-white font-bold border-0">
                Book a Coaching Session
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-forest-deep">
                View Scratch Tutorials
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScratchSection;
