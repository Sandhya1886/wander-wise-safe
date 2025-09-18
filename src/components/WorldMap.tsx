import React, { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  AlertTriangle, 
  Users, 
  MapPin,
  Zap,
  Eye
} from "lucide-react";

const WorldMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  // Safety zones data
  const safetyZones = [
    { id: 1, name: "Europe", safety: 95, color: "success", x: "45%", y: "25%" },
    { id: 2, name: "North America", safety: 92, color: "success", x: "20%", y: "30%" },
    { id: 3, name: "East Asia", safety: 88, color: "warning", x: "75%", y: "35%" },
    { id: 4, name: "Australia", safety: 96, color: "success", x: "80%", y: "70%" },
    { id: 5, name: "South America", safety: 65, color: "emergency", x: "25%", y: "60%" },
  ];

  const activeIncidents = [
    { id: 1, type: "Weather Alert", location: "Mumbai", x: "70%", y: "45%" },
    { id: 2, type: "High Crime", location: "Rio", x: "28%", y: "65%" },
    { id: 3, type: "Protest", location: "Paris", x: "48%", y: "28%" },
  ];

  const crowdStatus = [
    { location: "Tokyo", status: "High", x: "82%", y: "38%" },
    { location: "New York", status: "Medium", x: "22%", y: "32%" },
    { location: "London", status: "Low", x: "47%", y: "26%" },
  ];

  return (
    <div className="space-y-6">
      {/* World Map Container */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Global Safety Map
            </CardTitle>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Live View
              </Button>
              <Button size="sm" className="gradient-primary">
                Full Screen
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div 
            ref={mapRef}
            className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl overflow-hidden border-2 border-border"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          >
            {/* World Map SVG Background */}
            <div className="absolute inset-0 opacity-60">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                {/* Simplified world map paths */}
                <path
                  d="M150 150 L200 120 L250 140 L300 130 L350 140 L400 150 L450 160 L500 155 L550 165 L600 160 L650 155 L700 160 L750 150 L800 155 L800 300 L750 290 L700 295 L650 300 L600 305 L550 300 L500 295 L450 300 L400 305 L350 300 L300 295 L250 300 L200 305 L150 300 Z"
                  fill="hsl(var(--muted))"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                />
                {/* Additional continent shapes */}
                <path
                  d="M100 180 L180 160 L220 180 L200 220 L150 230 L120 210 Z"
                  fill="hsl(var(--muted))"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                />
                <path
                  d="M500 200 L580 180 L620 200 L600 240 L550 250 L520 230 Z"
                  fill="hsl(var(--muted))"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Safety Zone Indicators */}
            {safetyZones.map((zone) => (
              <div
                key={zone.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: zone.x, top: zone.y }}
              >
                <div className={`w-4 h-4 rounded-full animate-ping absolute ${
                  zone.color === 'success' ? 'bg-success' : 
                  zone.color === 'warning' ? 'bg-warning' : 'bg-emergency'
                }`}></div>
                <div className={`w-4 h-4 rounded-full ${
                  zone.color === 'success' ? 'bg-success' : 
                  zone.color === 'warning' ? 'bg-warning' : 'bg-emergency'
                }`}></div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-background border border-border rounded-lg p-2 shadow-lg whitespace-nowrap">
                    <p className="font-medium text-sm">{zone.name}</p>
                    <p className="text-xs text-muted-foreground">Safety: {zone.safety}%</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Active Incidents */}
            {activeIncidents.map((incident) => (
              <div
                key={incident.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: incident.x, top: incident.y }}
              >
                <div className="w-3 h-3 bg-emergency rounded-full animate-pulse"></div>
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-background border border-border rounded-lg p-2 shadow-lg whitespace-nowrap">
                    <p className="font-medium text-sm text-emergency">{incident.type}</p>
                    <p className="text-xs text-muted-foreground">{incident.location}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Crowd Status Indicators */}
            {crowdStatus.map((crowd, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: crowd.x, top: crowd.y }}
              >
                <Users className={`h-3 w-3 ${
                  crowd.status === 'High' ? 'text-emergency' :
                  crowd.status === 'Medium' ? 'text-warning' : 'text-success'
                }`} />
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-background border border-border rounded-lg p-2 shadow-lg whitespace-nowrap">
                    <p className="font-medium text-sm">{crowd.location}</p>
                    <p className="text-xs text-muted-foreground">Crowd: {crowd.status}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Live User Location (example) */}
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: "48%", top: "30%" }}
            >
              <div className="relative">
                <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-xs">You</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map Legend and Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Safety Zones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-sm">Safe (90-100%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <span className="text-sm">Caution (70-89%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emergency rounded-full"></div>
              <span className="text-sm">Danger (&lt;70%)</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Active Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emergency rounded-full animate-pulse"></div>
              <span className="text-sm">Weather Alert</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emergency rounded-full animate-pulse"></div>
              <span className="text-sm">High Crime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
              <span className="text-sm">Civil Unrest</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Live Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Active Users:</span>
              <Badge variant="secondary">1,247</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Safe Zones:</span>
              <Badge className="bg-success">156</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Alerts Today:</span>
              <Badge variant="outline">23</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorldMap;