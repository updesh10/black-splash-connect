import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      
      {/* Floating elements */}
      <div className="absolute top-10 left-1/4 w-8 h-8 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
      <div className="absolute bottom-10 right-1/4 w-12 h-12 bg-secondary/20 rounded-full blur-xl animate-float" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground">Trusted by 50,000+ teams</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Ready to Transform Your{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Communication?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of teams already using our platform for seamless video collaboration.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 px-8"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border bg-video-glass/30 backdrop-blur-sm hover:bg-video-glass/50 transition-all duration-300"
            >
              Schedule a Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">&lt; 50ms</div>
              <div className="text-muted-foreground">Latency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;