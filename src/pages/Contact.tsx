import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Shield,
  HelpCircle,
  Briefcase,
  Users
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're here to help with your travel safety needs. Reach out to us anytime.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg">Email Support</CardTitle>
              <CardDescription>Get help via email</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-primary">support@toursafe.com</p>
              <p className="text-sm text-muted-foreground mt-2">Response within 24 hours</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto p-3 rounded-full bg-success/10 w-fit mb-4">
                <Phone className="h-8 w-8 text-success" />
              </div>
              <CardTitle className="text-lg">Emergency Hotline</CardTitle>
              <CardDescription>24/7 emergency support</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-success">+1-800-TOURSAFE</p>
              <p className="text-sm text-muted-foreground mt-2">Available 24/7 worldwide</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto p-3 rounded-full bg-warning/10 w-fit mb-4">
                <MapPin className="h-8 w-8 text-warning" />
              </div>
              <CardTitle className="text-lg">Office Location</CardTitle>
              <CardDescription>Visit our headquarters</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">San Francisco, CA</p>
              <p className="text-sm text-muted-foreground mt-2">123 Safety Street, Suite 100</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto p-3 rounded-full bg-emergency/10 w-fit mb-4">
                <Clock className="h-8 w-8 text-emergency" />
              </div>
              <CardTitle className="text-lg">Business Hours</CardTitle>
              <CardDescription>When we're available</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Mon-Fri: 9AM-6PM PST</p>
              <p className="text-sm text-muted-foreground mt-2">Emergency support 24/7</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="emergency">Emergency Issue</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe your inquiry or issue in detail..."
                  className="min-h-32"
                />
              </div>

              <Button className="w-full gradient-primary" size="lg">
                Send Message
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                For emergency situations, please call our 24/7 hotline instead
              </p>
            </CardContent>
          </Card>

          {/* FAQ and Additional Info */}
          <div className="space-y-8">
            {/* Quick Help */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2" />
                  Quick Help
                </CardTitle>
                <CardDescription>
                  Common questions and immediate assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Emergency Features Guide
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Account & Billing Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    Location & Privacy Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Business & Enterprise
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact Info */}
            <Card className="border-emergency/20 bg-emergency/5">
              <CardHeader>
                <CardTitle className="flex items-center text-emergency">
                  <Shield className="h-5 w-5 mr-2" />
                  Emergency Assistance
                </CardTitle>
                <CardDescription>
                  If you're in immediate danger or need urgent help
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-emergency/10 rounded-lg">
                  <p className="font-semibold text-emergency mb-2">24/7 Emergency Hotline</p>
                  <p className="text-2xl font-bold text-emergency">+1-800-TOURSAFE</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Available worldwide, multilingual support
                  </p>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">For life-threatening emergencies, contact local authorities first:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>US/Canada: 911</li>
                    <li>Europe: 112</li>
                    <li>UK: 999</li>
                    <li>Australia: 000</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Emergency Support</span>
                    <span className="font-medium text-success">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>General Support</span>
                    <span className="font-medium">Mon-Fri, 9AM-6PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phone Support</span>
                    <span className="font-medium">Mon-Sun, 8AM-10PM PST</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Response times may vary during peak travel seasons. 
                    Emergency issues are prioritized and handled immediately.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Find Us
            </CardTitle>
            <CardDescription>
              Visit our headquarters in San Francisco
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    123 Safety Street, Suite 100<br />
                    San Francisco, CA 94102<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Getting Here</h4>
                  <p className="text-muted-foreground">
                    Located in downtown San Francisco, easily accessible by public transportation. 
                    Street parking and nearby parking garages available.
                  </p>
                </div>

                <Button variant="outline" className="w-full sm:w-auto">
                  Get Directions
                </Button>
              </div>
              
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Safety Street, San Francisco</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;