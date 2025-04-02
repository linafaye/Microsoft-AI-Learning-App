
import React from 'react';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import GamificationStatus from '@/components/GamificationStatus';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, Moon, MessageSquare, Clock, Volume2, User } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      <GamificationStatus />
      
      <div className="container px-4 py-6 max-w-6xl">
        <h1 className="text-3xl font-bold text-brand-purple mb-6">Settings</h1>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Account
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Profile</p>
                  <p className="text-sm text-muted-foreground">Manage your account details</p>
                </div>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Linked Accounts</p>
                  <p className="text-sm text-muted-foreground">Connect with Microsoft, LinkedIn, etc.</p>
                </div>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Daily Reminders</p>
                  <p className="text-sm text-muted-foreground">Get a reminder to continue learning</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Weekly Summary</p>
                  <p className="text-sm text-muted-foreground">Receive weekly progress reports</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">New Course Alerts</p>
                  <p className="text-sm text-muted-foreground">Get notified about new content</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Learning Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="mb-2">
                  <p className="font-medium">Daily Learning Goal</p>
                  <p className="text-sm text-muted-foreground">Number of sessions per day</p>
                </div>
                <Select defaultValue="3">
                  <SelectTrigger>
                    <SelectValue placeholder="Select sessions per day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 session</SelectItem>
                    <SelectItem value="2">2 sessions</SelectItem>
                    <SelectItem value="3">3 sessions</SelectItem>
                    <SelectItem value="5">5 sessions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <div className="mb-2">
                  <p className="font-medium">Session Duration</p>
                  <p className="text-sm text-muted-foreground">Preferred length of learning sessions</p>
                </div>
                <Select defaultValue="5">
                  <SelectTrigger>
                    <SelectValue placeholder="Select session duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 minutes</SelectItem>
                    <SelectItem value="10">10 minutes</SelectItem>
                    <SelectItem value="15">15 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <div className="mb-2">
                  <p className="font-medium">Content Difficulty</p>
                  <p className="text-sm text-muted-foreground">Preferred content complexity</p>
                </div>
                <Slider defaultValue={[2]} max={3} step={1} />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Accessibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Toggle dark theme</p>
                </div>
                <Switch id="dark-mode" />
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Voice Interaction</p>
                  <p className="text-sm text-muted-foreground">Enable voice commands and responses</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div>
                <div className="mb-2">
                  <p className="font-medium">Text Size</p>
                  <p className="text-sm text-muted-foreground">Adjust content font size</p>
                </div>
                <Slider defaultValue={[50]} max={100} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Settings;
