import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  MapPin, 
  AlertTriangle, 
  Users, 
  Camera,
  Smartphone,
  Battery,
  Route,
  Eye,
  Lock,
  Zap,
  Globe,
  Phone,
  MessageSquare,
  Navigation,
  MapPinned
} from "lucide-react";
import incidentReporting from "@/assets/incident-reporting.jpg";
import emergencyAlerts from "@/assets/emergency-alerts.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const Features = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Incident Reporting",
      description: "Report incidents instantly with photos, location, and automatic alerts to authorities",
      image: incidentReporting,
      tags: ["Real-time", "Photo Upload", "GPS Location"]
    },
    {
      icon: Shield,
      title: "Emergency Alerts",
      description: "Instant emergency notifications to trusted contacts with your exact location",
      image: emergencyAlerts,
      tags: ["Instant Alerts", "Trusted Contacts", "Location Sharing"]
    },
    {
      icon: MapPin,
      title: "Safety Map",
      description: "Interactive map showing danger zones, safe areas, and real-time crowd status",
      image: dashboardPreview,
      tags: ["Live Data", "Crowd Status", "Safe Zones"]
    },
    {
      icon: Battery,
      title: "Device Monitoring",
      description: "Track battery status and movement detection for comprehensive safety",
      image: null,
      tags: ["Battery Monitor", "Movement Detection", "Device Status"]
    },
    {
      icon: Route,
      title: "Safe Route Planning",
      description: "AI-powered route recommendations based on safety data and real-time conditions",
      image: null,
      tags: ["AI Powered", "Real-time", "Optimized Routes"]
    },
    {
      icon: Lock,
      title: "Blockchain Digital ID",
      description: "Secure digital identity verification for trusted interactions",
      image: null,
      tags: ["Blockchain", "Secure", "Verified Identity"]
    },
    {
      icon: Phone,
      title: "Panic Button",
      description: "One-touch emergency activation with instant alerts to authorities and contacts",
      image: null,
      tags: ["Instant Alert", "One-Touch", "Emergency"]
    },
    {
      icon: MessageSquare,
      title: "Whisper Code Emergency",
      description: "Discrete code words that trigger silent emergency alerts without detection",
      image: null,
      tags: ["Silent Alert", "Code Words", "Discrete"]
    },
    {
      icon: Navigation,
      title: "Safe Route Search",
      description: "Find the safest routes to destinations with real-time safety analysis",
      image: null,
      tags: ["Route Planning", "Safety Analysis", "Real-time"]
    },
    {
      icon: MapPinned,
      title: "Danger Zone Mapping",
      description: "Live mapping of theft areas, crowded zones, and high-risk locations",
      image: null,
      tags: ["Live Mapping", "Theft Areas", "Risk Analysis"]
    }
  ];

  const additionalFeatures = [
    {
      icon: Eye,
      title: "Live Tracking",
      description: "Real-time location monitoring with privacy controls"
    },
    {
      icon: Users,
      title: "Community Reports",  
      description: "Crowdsourced safety data from verified users"
    },
    {
      icon: Zap,
      title: "Offline Mode",
      description: "Emergency features work even without internet connection"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Safety data and features available worldwide"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powerful Safety Features
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Comprehensive travel safety tools designed to keep you protected wherever you go
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Safety Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets intuitive design to provide unparalleled travel safety
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                {feature.image && (
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to enhanced travel safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up & Setup",
                description: "Create your account and configure safety preferences and emergency contacts"
              },
              {
                step: "2", 
                title: "Plan Your Trip",
                description: "Use our safety map and route planner to choose the safest paths to your destination"
              },
              {
                step: "3",
                title: "Travel Safely",
                description: "Enjoy real-time protection with automatic monitoring and instant emergency alerts"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Travel Safer?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of travelers who trust TourSafe for their safety needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;