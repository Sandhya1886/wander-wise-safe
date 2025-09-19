import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  AlertTriangle, 
  Phone, 
  MapPin, 
  Users, 
  Shield,
  Battery,
  Smartphone,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap,
  MessageSquare
} from "lucide-react";
import emergencyAlerts from "@/assets/emergency-alerts.jpg";

const Emergency = () => {
  const [locationSharing, setLocationSharing] = useState(true);
  const [emergencyMode, setEmergencyMode] = useState(false);
  const batteryLevel = 78;
  const isMoving = true;

  const emergencyContacts = [
    { name: "John Doe", relation: "Emergency Contact", phone: "+1-555-0123", verified: true },
    { name: "Jane Smith", relation: "Family", phone: "+1-555-0456", verified: true },
    { name: "Mike Johnson", relation: "Friend", phone: "+1-555-0789", verified: false }
  ];

  return (
    <div className="min-h-screen">
      {/* Emergency Header */}
      <section className="py-12 gradient-emergency">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <AlertTriangle className="h-16 w-16 mx-auto mb-4 animate-emergency-pulse" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Emergency Center</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your safety control center. Access emergency features and manage your safety settings.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Emergency Alert */}
        <Alert className="mb-8 border-emergency bg-emergency/5">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-emergency font-medium">
            In case of life-threatening emergency, contact local authorities first: 911 (US), 112 (EU), 999 (UK)
          </AlertDescription>
        </Alert>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-emergency hover:shadow-emergency transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-emergency/10 w-fit mb-4">
                <AlertTriangle className="h-8 w-8 text-emergency" />
              </div>
              <CardTitle className="text-emergency">Send Emergency Alert</CardTitle>
              <CardDescription>
                Instantly notify trusted contacts and authorities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className={`w-full text-lg font-semibold ${
                  emergencyMode 
                    ? 'bg-emergency hover:bg-emergency/90 animate-emergency-pulse' 
                    : 'bg-emergency hover:bg-emergency/90'
                }`}
                size="lg"
                onClick={() => setEmergencyMode(!emergencyMode)}
              >
                {emergencyMode ? 'EMERGENCY ACTIVE' : 'ACTIVATE EMERGENCY'}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-red-500 hover:shadow-red-500/20 transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-red-500/10 w-fit mb-4">
                <Zap className="h-8 w-8 text-red-500 animate-pulse" />
              </div>
              <CardTitle className="text-red-500">Panic Button</CardTitle>
              <CardDescription>
                One-touch emergency alert with location
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full text-lg font-semibold bg-red-500 hover:bg-red-600 text-white animate-pulse"
                size="lg"
              >
                PANIC
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-orange-500/10 w-fit mb-4">
                <MessageSquare className="h-8 w-8 text-orange-500" />
              </div>
              <CardTitle>Whisper Code</CardTitle>
              <CardDescription>
                Silent emergency alert with code words
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" size="lg">
                Setup Code Words
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Share Location</CardTitle>
              <CardDescription>
                Send your exact location to trusted contacts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full gradient-primary" size="lg">
                Share My Location
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Emergency Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-success/10 w-fit mb-4">
                <Phone className="h-8 w-8 text-success" />
              </div>
              <CardTitle>Emergency Hotline</CardTitle>
              <CardDescription>
                24/7 TourSafe emergency support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-success hover:bg-success/90" size="lg">
                Call Support
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Whisper Code Emergency</CardTitle>
              <CardDescription>
                Set up discrete code words for silent emergency alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium mb-2">How it works:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Set custom code words or phrases</li>
                  <li>• Say the code word in any conversation</li>
                  <li>• Silent alert sent to emergency contacts</li>
                  <li>• No visible notification to others around you</li>
                </ul>
              </div>
              <Button variant="outline" className="w-full">
                Configure Code Words
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Status Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Device Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="h-5 w-5 mr-2" />
                Device Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Battery Level</span>
                <div className="flex items-center">
                  <Battery className="h-4 w-4 text-success mr-2" />
                  <Badge className="bg-success">{batteryLevel}%</Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Movement Status</span>
                <Badge variant={isMoving ? "default" : "secondary"}>
                  {isMoving ? "Moving" : "Stationary"}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Location Services</span>
                <div className="flex items-center space-x-2">
                  <Switch 
                    checked={locationSharing} 
                    onCheckedChange={setLocationSharing}
                  />
                  <Label className="text-sm">
                    {locationSharing ? "Active" : "Disabled"}
                  </Label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span>Last Update</span>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">2 minutes ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Safety Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-alerts">Automatic Alerts</Label>
                  <Switch id="auto-alerts" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="location-tracking">Location Tracking</Label>
                  <Switch id="location-tracking" checked={locationSharing} onCheckedChange={setLocationSharing} />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="movement-detection">Movement Detection</Label>
                  <Switch id="movement-detection" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="emergency-recording">Emergency Recording</Label>
                  <Switch id="emergency-recording" />
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Advanced Settings
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contacts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Emergency Contacts
              </div>
              <Button size="sm">Add Contact</Button>
            </CardTitle>
            <CardDescription>
              These contacts will be notified during emergencies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-muted-foreground">{contact.relation}</p>
                      <p className="text-sm text-muted-foreground">{contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {contact.verified ? (
                      <Badge className="bg-success">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    ) : (
                      <Badge variant="secondary">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Pending
                      </Badge>
                    )}
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Remote Area Feature */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Remote Area Safety</CardTitle>
            <CardDescription>
              Planning to visit an area with limited connectivity? Set up automatic alerts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">How it works:</Label>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• Set your expected duration in the remote area</li>
                    <li>• We'll monitor your check-in status</li>
                    <li>• If you don't check in after the time limit, emergency alerts are sent</li>
                    <li>• Authorities and trusted contacts are notified automatically</li>
                  </ul>
                </div>
                <Button className="w-full gradient-primary">
                  Set Up Remote Area Alert
                </Button>
              </div>
              <div className="h-48 rounded-lg overflow-hidden">
                <img 
                  src={emergencyAlerts} 
                  alt="Emergency Alert System"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Emergency Instructions</CardTitle>
            <CardDescription>
              Quick reference guide for emergency situations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-emergency">In Case of Emergency:</h4>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-emergency text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                    Stay calm and assess your safety
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emergency text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                    Contact local emergency services if needed
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emergency text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                    Use TourSafe emergency features
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emergency text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                    Follow instructions from authorities
                  </li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">TourSafe Features:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Instant location sharing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Automatic emergency contacts notification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    24/7 emergency hotline
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Real-time monitoring
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Emergency;