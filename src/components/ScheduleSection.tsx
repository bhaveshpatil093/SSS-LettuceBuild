
import { Clock, Users, Mic, Trophy, Play } from 'lucide-react';

const ScheduleSection = () => {
  const schedule = [
    {
      time: "3:00 PM PDT",
      duration: "15 min",
      title: "Opening Ceremony",
      description: "Welcome, introductions, and challenge overview",
      icon: Play,
      color: "bg-forest-primary"
    },
    {
      time: "3:15 PM PDT",
      duration: "60 min",
      title: "Game Building Session",
      description: "Create your deforestation awareness project with mentor support",
      icon: Users,
      color: "bg-forest-gradient"
    },
    {
      time: "4:15 PM PDT",
      duration: "15 min",
      title: "Special Mentor Talk",
      description: "Inspiring presentation by environmental conservation expert",
      icon: Mic,
      color: "bg-earth-gradient"
    },
    {
      time: "4:30 PM PDT",
      duration: "20 min",
      title: "Project Presentations",
      description: "Showcase your creations and see what others have built",
      icon: Trophy,
      color: "bg-burnt-orange"
    },
    {
      time: "4:50 PM PDT",
      duration: "10 min",
      title: "Closing & Next Steps",
      description: "Wrap-up, resources, and community connections",
      icon: Clock,
      color: "bg-moss-green"
    }
  ];

  return (
    <section id="schedule" className="section-padding bg-leaf-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 forest-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-forest-gradient px-6 py-2 rounded-full text-white font-semibold mb-6">
            <Clock className="w-5 h-5" />
            <span>Event Timeline</span>
          </div>
          
          <h2 className="text-forest-deep mb-6">
            Summit
            <span className="block text-earth-gradient">Schedule</span>
          </h2>
          
          <p className="text-xl text-bark-brown/80 max-w-3xl mx-auto leading-relaxed">
            Two action-packed hours of coding, learning, and making a difference. 
            Join us virtually for an unforgettable experience!
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-forest-gradient rounded-full transform md:-translate-x-1/2" />
            
            {schedule.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-forest-primary transform -translate-x-1/2 z-10" />
                
                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="glass-card p-6 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Time & Duration */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${item.color} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-2`}>
                        <item.icon className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                      <span className="text-forest-primary font-medium text-sm">{item.duration}</span>
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-forest-deep mb-3">
                      {item.title}
                    </h3>
                    <p className="text-bark-brown/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Details */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-forest-deep mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-3 text-burnt-orange" />
              Time Zone Information
            </h3>
            <div className="space-y-3 text-bark-brown/80">
              <div className="flex justify-between items-center py-2 border-b border-forest-sage/30">
                <span className="font-medium">Pacific (PDT)</span>
                <span>3:00 - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-forest-sage/30">
                <span className="font-medium">Eastern (EDT)</span>
                <span>6:00 - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-forest-sage/30">
                <span className="font-medium">Central (CDT)</span>
                <span>5:00 - 7:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">Mountain (MDT)</span>
                <span>4:00 - 6:00 PM</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-forest-deep mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-moss-green" />
              What to Expect
            </h3>
            <ul className="space-y-4 text-bark-brown/80">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-burnt-orange rounded-full mt-3 flex-shrink-0" />
                <span>Small breakout rooms with dedicated mentors and volunteers</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-forest-light rounded-full mt-3 flex-shrink-0" />
                <span>Real-time coding support and guidance</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-moss-green rounded-full mt-3 flex-shrink-0" />
                <span>Opportunity to share your project with the community</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-earth-primary rounded-full mt-3 flex-shrink-0" />
                <span>Access to exclusive resources and tutorials</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
