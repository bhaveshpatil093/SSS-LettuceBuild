
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Calendar, Award, ExternalLink } from 'lucide-react';

const RegistrationSection = () => {
  const requirements = [
    "Students in Grades 5-9 (Ages 10-14)",
    "Basic computer skills and internet access",
    "Individual participation (no teams)",
    "Scratch account (free to create)",
    "Zoom access for virtual attendance"
  ];

  const benefits = [
    {
      icon: Users,
      title: "Small Group Mentoring",
      description: "Work in breakout rooms with experienced coaches"
    },
    {
      icon: Award,
      title: "Digital Recognition",
      description: "Certificates and badges for all participants"
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Virtual format fits your busy schedule"
    }
  ];

  return (
    <section className="section-padding bg-forest-gradient relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-24 h-24 bg-white/20 border border-white/30 rounded-full float-animation shadow-lg" />
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-earth-light/30 border border-earth-light/40 rounded-2xl rotate-12 float-animation shadow-xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-moss-green/40 border border-moss-green/50 rounded-lg float-animation shadow-lg" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-earth-gradient px-6 py-2 rounded-full text-white font-semibold mb-6">
            <CheckCircle className="w-5 h-5" />
            <span>Join the Movement</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to
            <span className="block text-earth-gradient">Make Change?</span>
          </h2>
          
          <p className="text-xl text-leaf-cream/90 max-w-3xl mx-auto leading-relaxed">
            Registration is completely free! Join hundreds of young environmental programmers 
            from around the world in this inspiring virtual event.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Registration Card */}
          <Card className="glass-card border border-white/20 shadow-2xl bg-white/5 backdrop-blur-md">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-white mb-2">
                Secure Your Spot
              </CardTitle>
              <CardDescription className="text-white/90 text-lg font-medium">
                Registration closes soon - don't miss out!
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Requirements */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Who Can Join:</h3>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3 text-white/90">
                      <CheckCircle className="w-5 h-5 text-moss-green mt-0.5 flex-shrink-0" />
                      <span className="font-medium">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Registration Button */}
              <div className="pt-6">
                 <Button 
                  size="lg" 
                  className="w-full bg-earth-gradient hover:opacity-90 text-white font-bold text-lg py-6 pulse-glow"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Register for Free Now
                </Button>
                <p className="text-center text-white/80 text-sm mt-3 font-medium">
                  Limited spots available • Registration closes October 17th
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Benefits & Details */}
          <div className="space-y-8">
            <Card className="glass-dark border border-white/20 bg-white/5 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  What You'll Get
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-earth-light/30 border border-earth-light/40 p-3 rounded-lg">
                      <benefit.icon className="w-6 h-6 text-earth-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-white/80 text-sm font-medium">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Important Dates */}
            <Card className="glass-card border border-white/20 bg-white/5 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/90 font-medium">Registration Deadline</span>
                  <span className="font-semibold text-fire-red">October 17, 2025</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/90 font-medium">Summit Event</span>
                  <span className="font-semibold text-white">October 18, 2025</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/90 font-medium">Prize Announcements</span>
                  <span className="font-semibold text-moss-green">October 25, 2025</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="glass-dark border border-white/20 bg-white/5 backdrop-blur-md">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h4 className="font-semibold text-white mb-2">
                    Questions about registration?
                  </h4>
                  <p className="text-white/80 mb-4 font-medium">
                    Contact our team for support
                  </p>
                  <Button variant="outline" className="border-white/60 bg-white/10 text-white hover:bg-white hover:text-forest-deep font-medium">
                    Email: sss@applied-computing.org
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card border border-white/20 bg-white/5 backdrop-blur-md p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join 500+ Young Environmental Coders
            </h3>
            <p className="text-white/90 mb-6 font-medium">
              Be part of the solution. Register today and start your journey 
              toward making a positive impact on our forests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-earth-gradient hover:opacity-90 text-white font-bold px-8">
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-forest-deep">
                <a href="https://lettuce.build" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-burnt-orange transition-colors">
                  <img 
                    src="/lovable-uploads/2091c1fc-a7ee-4dff-9918-9460cdb3b498.png" 
                    alt="LettuceBuild" 
                    className="h-5 w-auto mr-2"
                  />
                  Learn More About LettuceBuild
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
