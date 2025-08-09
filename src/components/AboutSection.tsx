import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Active Teams"
  },
  {
    icon: Globe,
    value: "120+",
    label: "Countries"
  },
  {
    icon: Award,
    value: "99.9%",
    label: "Uptime"
  },
  {
    icon: Heart,
    value: "4.9/5",
    label: "User Rating"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-video-surface relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Building the Future of{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Communication
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded in 2020, VideoConnect has been at the forefront of video communication technology. 
                Our mission is to make high-quality video calling accessible to everyone, everywhere.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To create a world where distance doesn't matter, where every conversation feels natural 
                  and every connection is crystal clear.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Our Technology</h3>
                <p className="text-muted-foreground">
                  Built on cutting-edge WebRTC technology with AI-powered enhancements for the best 
                  possible video calling experience.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <Card 
                key={stat.label}
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 text-center"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;