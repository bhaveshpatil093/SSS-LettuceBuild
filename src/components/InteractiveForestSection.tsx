import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { TreePine, Axe, Sprout, AlertTriangle, Play, Pause } from 'lucide-react';

const InteractiveForestSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [treeCount, setTreeCount] = useState(100);
  const [deforestedArea, setDeforestedArea] = useState(0);
  const [reforestProgress, setReforestProgress] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTreeCount(prev => Math.max(0, prev - Math.random() * 2));
        setDeforestedArea(prev => Math.min(100, prev + Math.random() * 1.5));
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handleReforest = () => {
    setReforestProgress(prev => Math.min(100, prev + 10));
    setTreeCount(prev => Math.min(100, prev + 5));
    setDeforestedArea(prev => Math.max(0, prev - 3));
  };

  const resetSimulation = () => {
    setTreeCount(100);
    setDeforestedArea(0);
    setReforestProgress(0);
    setIsPlaying(false);
  };

  const generateTrees = (count: number) => {
    return Array.from({ length: Math.floor(count) }, (_, i) => (
      <TreePine 
        key={i} 
        className={`text-forest-primary transition-all duration-300 ${
          Math.random() > 0.7 ? 'animate-pulse' : ''
        }`}
        size={Math.random() * 8 + 16}
        style={{
          transform: `rotate(${Math.random() * 10 - 5}deg)`,
          opacity: Math.random() * 0.3 + 0.7
        }}
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-b from-leaf-cream to-forest-sage/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-forest-deep mb-6">
            Watch Deforestation
            <span className="block text-earth-gradient">In Real Time</span>
          </h2>
          <p className="text-bark-brown/80 max-w-2xl mx-auto mb-8">
            This interactive simulation shows how quickly we're losing our forests. 
            Every second, we lose forest area the size of a football field. But you can help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Forest Visualization */}
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-forest-deep">Forest Simulator</h3>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    size="sm"
                    className={`${isPlaying ? 'bg-fire-red' : 'bg-forest-primary'} text-white`}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isPlaying ? 'Pause' : 'Start'}
                  </Button>
                  <Button onClick={resetSimulation} size="sm" variant="outline">
                    Reset
                  </Button>
                </div>
              </div>

              {/* Forest Visualization */}
              <div className="relative h-64 bg-gradient-to-b from-sky-200 to-earth-tan/30 rounded-2xl overflow-hidden mb-4 border-2 border-forest-sage/20">
                {/* Sky and Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-green-100 to-brown-200">
                  {/* Deforested Area Overlay */}
                  <div 
                    className="absolute bottom-0 left-0 h-full bg-gradient-to-t from-ash-gray/60 to-burnt-orange/30 transition-all duration-1000"
                    style={{ width: `${deforestedArea}%` }}
                  />
                </div>

                {/* Trees */}
                <div className="absolute bottom-4 left-2 right-2 flex flex-wrap items-end gap-1 transition-all duration-300">
                  {generateTrees(treeCount)}
                </div>

                {/* Reforestation Overlay */}
                {reforestProgress > 0 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-moss-green/20 to-transparent flex items-center justify-center">
                    <Sprout className="text-moss-green w-8 h-8 animate-pulse" />
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-forest-primary/10 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-forest-primary">{Math.floor(treeCount)}</div>
                  <div className="text-xs text-bark-brown">Trees Left</div>
                </div>
                <div className="bg-fire-red/10 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-fire-red">{Math.floor(deforestedArea)}%</div>
                  <div className="text-xs text-bark-brown">Destroyed</div>
                </div>
                <div className="bg-moss-green/10 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-moss-green">{Math.floor(reforestProgress)}%</div>
                  <div className="text-xs text-bark-brown">Restored</div>
                </div>
              </div>
            </div>
            
            {/* Action Button */}
            <div className="text-center mt-6">
              <Button 
                onClick={handleReforest}
                className="bg-moss-green hover:bg-moss-green/90 text-white font-bold px-6 py-3 pulse-glow"
              >
                <Sprout className="w-5 h-5 mr-2" />
                Plant Trees & Restore Forest!
              </Button>
            </div>
          </div>

          {/* Impact Information */}
          <div className="space-y-6">
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-fire-red mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-forest-deep mb-2">
                    The Reality Is Urgent
                  </h4>
                  <p className="text-bark-brown/80 text-sm leading-relaxed">
                    Every minute, we lose forest area equivalent to 20 football fields. 
                    That's over 10 million hectares per year – an area larger than South Korea!
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover-lift">
              <div className="flex items-start space-x-4">
                <TreePine className="w-8 h-8 text-forest-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-forest-deep mb-2">
                    Why Forests Matter
                  </h4>
                  <ul className="text-bark-brown/80 text-sm space-y-1">
                    <li>• Produce 20% of the world's oxygen</li>
                    <li>• Home to 80% of land animals</li>
                    <li>• Store massive amounts of carbon</li>
                    <li>• Provide resources for 1.6 billion people</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover-lift">
              <div className="flex items-start space-x-4">
                <Sprout className="w-8 h-8 text-moss-green mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-forest-deep mb-2">
                    Your Code Can Help
                  </h4>
                  <p className="text-bark-brown/80 text-sm leading-relaxed">
                    Create games and simulations that educate others about this crisis. 
                    When people understand the problem, they're more likely to become part of the solution.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Story */}
            <div className="bg-gradient-to-br from-earth-tan/20 to-moss-green/10 p-6 rounded-2xl border border-forest-sage/30">
              <blockquote className="text-bark-brown italic mb-3">
                "My 12-year-old daughter Sarah built a Scratch game about rainforest animals 
                losing their homes. It was simple, but when she showed it to her class, 
                three kids asked their parents to donate to forest conservation that week."
              </blockquote>
              <cite className="text-forest-deep font-semibold text-sm">
                – Maria Rodriguez, Parent & Teacher
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveForestSection;