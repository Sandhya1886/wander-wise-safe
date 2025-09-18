import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  MapPin, 
  AlertTriangle, 
  Users, 
  Smartphone,
  Route,
  Eye,
  Lock,
  Play,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-travel-safety.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import incidentReporting from "@/assets/incident-reporting.jpg";
import emergencyAlerts from "@/assets/emergency-alerts.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Real-Time Safety Monitoring",
      description: "AI-powered risk assessment and safety alerts based on your location"
    },
    {
      icon: MapPin,
      title: "Interactive Safety Maps",
      description: "View danger zones, safe areas, and crowd status in real-time"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Alerts",
      description: "Instant notifications to trusted contacts and authorities"
    },
    {
      icon: Route,
      title: "Safe Route Planning",
      description: "Optimized routes based on safety data and current conditions"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "150+", label: "Countries" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Travel Safety Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Travel Safely,
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">Stay Protected</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Advanced travel safety platform with real-time monitoring, emergency alerts, 
            and AI-powered risk assessment to keep you safe wherever you go.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-glow"
              asChild
            >
              <Link to="/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
            
            <Button 
              size="lg" 
              className="bg-emergency hover:bg-emergency/90 text-white text-lg px-8 py-6 animate-emergency-pulse"
              asChild
            >
              <Link to="/emergency">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Emergency Alert
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-primary">Core Features</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything You Need for Safe Travel
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive safety features designed to protect you before, during, and after your travels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto p-4 rounded-full gradient-primary w-fit mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">See TourSafe in Action</h2>
            <p className="text-xl text-muted-foreground">
              Powerful features that work seamlessly together
            </p>
          </div>

          <div className="space-y-16">
            {/* Dashboard Feature */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary">Safety Dashboard</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Complete Safety Overview
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Monitor your security score, track active trips, view incident reports, 
                  and access interactive safety maps all from one central dashboard.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Real-time safety metrics</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Interactive danger zone mapping</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Trip history and analytics</span>
                  </div>
                </div>
                <Button className="gradient-primary" asChild>
                  <Link to="/dashboard">View Dashboard</Link>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={dashboardPreview} 
                  alt="Safety Dashboard"
                  className="rounded-lg shadow-soft hover:shadow-glow transition-shadow"
                />
              </div>
            </div>

            {/* Incident Reporting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src={incidentReporting} 
                  alt="Incident Reporting"
                  className="rounded-lg shadow-soft hover:shadow-glow transition-shadow"
                />
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="mb-4 bg-warning">Incident Reporting</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Report Incidents Instantly
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Quickly report safety incidents with photos, location data, and automatic 
                  notifications to relevant authorities and your emergency contacts.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Photo and video evidence</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>GPS location tagging</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Automatic authority alerts</span>
                  </div>
                </div>
                <Button className="gradient-primary" asChild>
                  <Link to="/features">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Emergency Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-emergency">Emergency Features</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Emergency Response System
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Advanced emergency features including location sharing, trusted contact alerts, 
                  and remote area monitoring for comprehensive safety coverage.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>One-touch emergency alerts</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Trusted contact notifications</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Remote area time tracking</span>
                  </div>
                </div>
                <Button className="gradient-emergency" asChild>
                  <Link to="/emergency">Emergency Center</Link>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={emergencyAlerts} 
                  alt="Emergency Alerts"
                  className="rounded-lg shadow-soft hover:shadow-glow transition-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Safety Technology</h2>
            <p className="text-xl text-muted-foreground">
              Cutting-edge features that set TourSafe apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Movement & Battery Monitoring</CardTitle>
                <CardDescription>
                  Real-time tracking of device movement and battery status for comprehensive safety monitoring
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lock className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Blockchain Digital ID</CardTitle>
                <CardDescription>
                  Secure, verifiable digital identity system for trusted interactions and emergency verification
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Crowd & Crime Analytics</CardTitle>
                <CardDescription>
                  Real-time crowd density and crime rate analysis to help you avoid potentially dangerous situations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Travelers Worldwide</h2>
            <p className="text-xl text-muted-foreground">
              See what our users say about their safety experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Solo Traveler",
                content: "TourSafe gave me the confidence to explore new destinations safely. The real-time alerts and emergency features are incredible.",
                rating: 5
              },
              {
                name: "Mike Chen",
                role: "Business Traveler", 
                content: "As someone who travels frequently for work, TourSafe's route planning and safety maps are indispensable tools.",
                rating: 5
              },
              {
                name: "Elena Rodriguez",
                role: "Adventure Enthusiast",
                content: "The remote area monitoring feature saved my trip when I got lost hiking. Highly recommended for outdoor adventures.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-warning" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Travel with Confidence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who trust TourSafe for their safety needs. 
            Get started today with our free plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              asChild
            >
              <Link to="/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              asChild
            >
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
