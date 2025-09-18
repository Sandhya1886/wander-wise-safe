import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Target, 
  Users, 
  Globe,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Former travel industry executive with 15+ years of experience in safety and security."
    },
    {
      name: "Dr. Michael Chen",
      role: "CTO & Co-Founder", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "AI and security expert, PhD in Computer Science from MIT. Previously at major tech companies."
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Safety Research",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Emergency response specialist with background in crisis management and risk assessment."
    },
    {
      name: "Alex Thompson",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      bio: "Product strategy expert focused on user experience and safety technology integration."
    }
  ];

  const milestones = [
    { year: "2022", event: "TourSafe founded with vision for safer travel" },
    { year: "2023", event: "Launched beta version with 1,000+ early users" },
    { year: "2023", event: "Secured Series A funding for global expansion" },
    { year: "2024", event: "Reached 50,000+ active users worldwide" },
    { year: "2024", event: "Launched blockchain digital ID feature" },
    { year: "2024", event: "Partnership with major travel platforms" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every decision we make prioritizes user safety and security"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our platform grows stronger with every user contribution"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making travel safer for everyone, everywhere in the world"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Constantly improving with cutting-edge technology"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About TourSafe
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            We're on a mission to make travel safer for everyone through innovative technology 
            and community-driven safety solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At TourSafe, we believe that everyone deserves to travel with confidence and peace of mind. 
                Our platform combines advanced AI technology, real-time data, and community insights to 
                create the world's most comprehensive travel safety solution.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We're not just building an app – we're building a safer world for travelers everywhere.
              </p>
              <Button size="lg" className="gradient-primary">
                Join Our Mission
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">50K+</CardTitle>
                  <CardDescription>Active Users</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-success">99.9%</CardTitle>
                  <CardDescription>Uptime</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-warning">150+</CardTitle>
                  <CardDescription>Countries</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-emergency">24/7</CardTitle>
                  <CardDescription>Emergency Support</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How TourSafe Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach to travel safety combines multiple layers of protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Real-Time Monitoring",
                description: "Our AI continuously analyzes global safety data, news, and user reports to identify potential risks"
              },
              {
                step: "2",
                title: "Smart Alerts",
                description: "Receive personalized safety alerts based on your location, travel plans, and risk preferences"
              },
              {
                step: "3",
                title: "Community Intelligence",
                description: "Benefit from crowd-sourced safety reports and insights from verified travelers worldwide"
              },
              {
                step: "4",
                title: "Emergency Response",
                description: "Instant emergency features with automatic alerts to authorities and trusted contacts"
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

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Passionate experts dedicated to making travel safer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                  <CardDescription className="text-sm">{member.bio}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in making travel safer
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-success mr-3" />
                          <p className="text-lg">{milestone.event}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Plans</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're constantly innovating to bring you the most advanced travel safety features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced AI Prediction",
                description: "Machine learning models that predict safety risks days in advance",
                timeline: "Q2 2024"
              },
              {
                title: "Wearable Integration", 
                description: "Seamless integration with smartwatches and fitness trackers",
                timeline: "Q3 2024"
              },
              {
                title: "Global Emergency Network",
                description: "Direct partnerships with emergency services worldwide",
                timeline: "Q4 2024"
              },
              {
                title: "AR Navigation",
                description: "Augmented reality for safer navigation in unfamiliar areas",
                timeline: "2025"
              },
              {
                title: "Group Travel Features",
                description: "Enhanced features for family and group travel safety",
                timeline: "2025"
              },
              {
                title: "IoT Integration",
                description: "Connect with smart hotel rooms and transportation",
                timeline: "2025"
              }
            ].map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{plan.title}</CardTitle>
                    <Badge variant="outline">{plan.timeline}</Badge>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Travel Safer?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our growing community of safety-conscious travelers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;