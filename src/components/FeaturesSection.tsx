import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Mic, Video, Share, Lock, Cloud, Smartphone, Headphones } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "4K Video Quality",
    description: "Crystal-clear video calls with up to 4K resolution for the most detailed conversations."
  },
  {
    icon: Mic,
    title: "Noise Cancellation",
    description: "Advanced AI-powered noise cancellation ensures your voice comes through clearly."
  },
  {
    icon: Share,
    title: "Screen Sharing",
    description: "Share your screen instantly with full control and annotation features."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols protect every conversation."
  },
  {
    icon: Cloud,
    title: "Cloud Recording",
    description: "Record and store your meetings in the cloud with automatic transcription."
  },
  {
    icon: Smartphone,
    title: "Multi-Platform",
    description: "Join from any device - desktop, mobile, or tablet with seamless sync."
  },
  {
    icon: Monitor,
    title: "Virtual Backgrounds",
    description: "Professional backgrounds powered by AI to look your best anywhere."
  },
  {
    icon: Headphones,
    title: "Spatial Audio",
    description: "Immersive spatial audio makes conversations feel natural and engaging."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-video-surface relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Perfect Calls
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Packed with features that make video calling effortless, professional, and secure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-glow/20 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;