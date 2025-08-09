import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 10 participants",
      "40 minute meetings",
      "Basic video quality",
      "Screen sharing",
      "Chat messaging"
    ]
  },
  {
    name: "Pro",
    price: "19",
    period: "per month",
    description: "Everything you need for professional teams",
    features: [
      "Up to 50 participants",
      "Unlimited meeting time",
      "4K video quality",
      "Cloud recording",
      "Virtual backgrounds",
      "Advanced security"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "49",
    period: "per month",
    description: "Advanced features for large organizations",
    features: [
      "Up to 100 participants",
      "Unlimited everything",
      "Premium support",
      "Custom branding",
      "API access",
      "Advanced analytics"
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your team's needs. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary/20 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-video-glass/30 hover:bg-video-glass/50 border border-border'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;