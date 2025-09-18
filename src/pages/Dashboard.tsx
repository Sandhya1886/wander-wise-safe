import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  MapPin, 
  AlertTriangle, 
  Users, 
  TrendingUp, 
  Clock,
  Battery,
  Smartphone,
  Map,
  Route,
  AlertCircle
} from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import WorldMap from "@/components/WorldMap";

const Dashboard = () => {
  const securityScore = 85;
  const batteryLevel = 78;
  const isMoving = true;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Safety Dashboard</h1>
        <p className="text-muted-foreground">Monitor your travel safety and security status</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Score</CardTitle>
            <Shield className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{securityScore}%</div>
            <Progress value={securityScore} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Excellent safety status
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Trips</CardTitle>
            <MapPin className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">Safe location</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Incident Reports</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              No recent incidents
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Battery Status</CardTitle>
            <Battery className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{batteryLevel}%</div>
            <Progress value={batteryLevel} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Good battery level
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Status Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Smartphone className="h-5 w-5 mr-2" />
              Device Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Movement Status</span>
              <Badge variant={isMoving ? "default" : "secondary"}>
                {isMoving ? "Moving" : "Stationary"}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Location Services</span>
              <Badge variant="default" className="bg-success">Active</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Emergency Contacts</span>
              <Badge variant="default">3 Contacts</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Safety Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-success/10 rounded-lg">
                <Shield className="h-4 w-4 text-success mr-2" />
                <span className="text-sm">Currently in safe zone</span>
              </div>
              <div className="flex items-center p-3 bg-muted rounded-lg">
                <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                <span className="text-sm">No recent alerts</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for detailed information */}
      <Tabs defaultValue="map" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="map">Safety Map</TabsTrigger>
          <TabsTrigger value="history">Travel History</TabsTrigger>
          <TabsTrigger value="routes">Safe Routes</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="map">
          <WorldMap />
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Recent Travel History</CardTitle>
              <CardDescription>Your recent trips and safety records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { location: "Downtown", date: "Today", status: "Safe", score: 95 },
                  { location: "City Center", date: "Yesterday", status: "Safe", score: 88 },
                  { location: "Airport", date: "2 days ago", status: "Safe", score: 92 },
                ].map((trip, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-4 w-4 text-primary" />
                      <div>
                        <p className="font-medium">{trip.location}</p>
                        <p className="text-sm text-muted-foreground">{trip.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-success">{trip.status}</Badge>
                      <p className="text-sm text-muted-foreground mt-1">{trip.score}% safe</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="routes">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Route className="h-5 w-5 mr-2" />
                Recommended Safe Routes
              </CardTitle>
              <CardDescription>
                Plan your journey with the safest routes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full gradient-primary" size="lg">
                  Plan New Route
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Home to Office</h4>
                    <p className="text-sm text-muted-foreground mb-2">15 min • 95% safety score</p>
                    <Badge className="bg-success">Saved Route</Badge>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Airport Route</h4>
                    <p className="text-sm text-muted-foreground mb-2">45 min • 92% safety score</p>
                    <Badge className="bg-success">Saved Route</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Safety Settings</CardTitle>
              <CardDescription>Configure your safety preferences and alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Emergency Settings</h4>
                <Button className="w-full" variant="outline">
                  Manage Emergency Contacts
                </Button>
                <Button className="w-full" variant="outline">
                  Configure Alerts
                </Button>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Privacy Settings</h4>
                <Button className="w-full" variant="outline">
                  Location Sharing Settings
                </Button>
                <Button className="w-full" variant="outline">
                  Data Privacy Controls
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;