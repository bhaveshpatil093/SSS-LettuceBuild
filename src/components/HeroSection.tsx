
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date('2025-10-18T15:00:00-07:00'); // 3 PM PDT
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-forest-gradient forest-pattern overflow-hidden pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-12 h-12 bg-moss-green/20 rounded-lg float-animation" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-earth-tan/15 rounded-full float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-forest-light/25 rounded-lg float-animation" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-60 right-1/3 w-14 h-14 bg-burnt-orange/20 rounded-full float-animation" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in">
              Scratch Sustainability
              <span className="block text-earth-gradient">Summit 2025</span>
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl text-leaf-cream font-poppins font-medium mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Code for Our Forest's Future
          </h2>

          {/* Event Details */}
          <div className="glass-card p-6 md:p-8 mb-8 mx-auto max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid md:grid-cols-3 gap-4 text-white">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5 text-burnt-orange" />
                <span className="font-medium">October 18, 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-leaf-cream" />
                <span className="font-medium">3-5 PM PDT</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-5 h-5 text-moss-green" />
                <span className="font-medium">Virtual Event</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-lg font-semibold text-white">For Students Grades 5-9 (Ages 10-14)</p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="glass-dark p-6 rounded-2xl mb-8 mx-auto max-w-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-white text-lg font-semibold mb-4">Event Countdown</h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="glass-card p-3 rounded-xl">
                  <div className="text-2xl font-bold text-burnt-orange">{value}</div>
                  <div className="text-xs text-leaf-cream uppercase tracking-wide">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="bg-earth-gradient hover:opacity-90 text-white font-bold px-8 py-4 text-lg pulse-glow border-0 relative z-20">
              Register Now - It's Free!
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-forest-deep px-8 py-4 relative z-20">
              <ExternalLink className="w-5 h-5 mr-2" />
              Learn About Scratch
            </Button>
          </div>

          {/* Statistics */}
          <div className="mt-12 glass-card p-8 mx-auto max-w-md animate-fade-in border border-white/20 shadow-2xl" style={{ animationDelay: '1s' }}>
            <p className="text-center">
              <span className="text-burnt-orange font-bold text-4xl block mb-2">738</span>
              <span className="text-white font-semibold text-lg">Young coders joined us last year</span>
            </p>
            <p className="text-leaf-cream/80 text-sm mt-3 text-center">
              "My 9-year-old built her first climate game here!" – Emma's mom
            </p>
          </div>
        </div>
      </div>

      {/* Wave Animation at Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="wave-animation" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: '60px', width: '100%' }}>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
