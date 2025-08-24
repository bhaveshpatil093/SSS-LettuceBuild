
import { Button } from '@/components/ui/button';
import { AlertTriangle, TreePine, Axe, Target } from 'lucide-react';

const ChallengeSection = () => {
  const stats = [
    {
      icon: AlertTriangle,
      number: "10M",
      unit: "hectares",
      description: "Forests lost annually worldwide",
      color: "text-fire-red"
    },
    {
      icon: TreePine,
      number: "15B",
      unit: "trees",
      description: "Cut down every year globally",
      color: "text-burnt-orange"
    },
    {
      icon: Axe,
      number: "80%",
      unit: "habitat",
      description: "Animal habitats affected by deforestation",
      color: "text-ash-gray"
    }
  ];

  return (
    <section id="challenge" className="section-padding bg-leaf-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 forest-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-earth-gradient px-6 py-2 rounded-full text-white font-semibold mb-6">
            <Target className="w-5 h-5" />
            <span>2025 Challenge Theme</span>
          </div>
          
          <h2 className="text-forest-deep mb-6">
            Deforestation Crisis:
            <span className="block text-earth-gradient">Code for Change</span>
          </h2>
          
          <p className="text-xl text-bark-brown/80 max-w-3xl mx-auto leading-relaxed">
            Here's something that keeps me up at night: we're losing forests faster than ever before. 
            But you know what gives me hope? Kids like you who actually care enough to DO something about it. 
            This year, we're challenging you to build Scratch programs that don't just tell people about deforestation – 
            but inspire them to take action.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card p-8 text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <stat.icon className={`w-12 h-12 mx-auto ${stat.color} float-animation`} />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-forest-deep mb-2">
                {stat.unit}
              </div>
              <p className="text-bark-brown/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Challenge Details */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold text-forest-deep mb-6 text-center">
              Your Mission: Create Impact Through Code
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold text-bark-brown mb-4">
                  What You'll Build:
                </h4>
                <ul className="space-y-3 text-bark-brown/80">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-forest-primary rounded-full mt-3 flex-shrink-0" />
                    <span>Interactive games showing forest destruction impact</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-burnt-orange rounded-full mt-3 flex-shrink-0" />
                    <span>Educational animations about deforestation effects</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-moss-green rounded-full mt-3 flex-shrink-0" />
                    <span>Solutions-focused reforestation projects</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-fire-red rounded-full mt-3 flex-shrink-0" />
                    <span>Data visualization of forest loss statistics</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-forest-deep/80 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Think About:
                </h4>
                <div className="space-y-3 text-white/90">
                  <p className="text-lg font-medium text-burnt-orange">
                    "How will your code make a difference?"
                  </p>
                  <p className="text-white/80">• What story will your project tell?</p>
                  <p className="text-white/80">• How can you inspire others to act?</p>
                  <p className="text-white/80">• What forest solutions can you highlight?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lg text-bark-brown/80 mb-6">
              Last year, a 10-year-old from Colorado created a game that got her whole school to start a recycling program. 
              What will YOUR project accomplish?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-nature-gradient text-white font-bold px-8">
                View Challenge Details
              </Button>
              <Button size="lg" variant="outline" className="border-forest-primary text-forest-primary hover:bg-forest-primary hover:text-white">
                Get Scratch Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
