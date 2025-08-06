import { Button } from "@/components/ui/button";
import { PlayCircle, Users, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/video-call-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden py-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-pulse-glow" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full animate-float" />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-accent rounded-full animate-pulse-glow" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Connect{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Anywhere
                </span>
                <br />
                Anytime
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience crystal-clear video calls with cutting-edge technology. 
                Built for teams who demand the best in communication.
              </p>
            </div>
            
            {/* Feature highlights */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Up to 100 participants</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span>End-to-end encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span>Lightning fast</span>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105">
                Start Free Call
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-border bg-video-glass/50 backdrop-blur-sm hover:bg-video-glass/70 transition-all duration-300"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card bg-gradient-card p-2">
              <img 
                src={heroImage} 
                alt="Video call interface" 
                className="w-full h-auto rounded-xl"
              />
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent" />
            </div>
            
            {/* Floating UI elements */}
            <div className="absolute -top-4 -right-4 bg-video-surface border border-border rounded-lg p-3 shadow-card animate-float">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-video-surface border border-border rounded-lg p-3 shadow-card">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm">47 participants</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;