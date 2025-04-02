
import React from 'react';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import GamificationStatus from '@/components/GamificationStatus';
import ProgressStats from '@/components/ProgressStats';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Trophy, Calendar } from 'lucide-react';

const Progress = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      <GamificationStatus />
      
      <div className="container px-4 py-6 max-w-6xl">
        <h1 className="text-3xl font-bold text-brand-purple mb-6">Your Progress</h1>
        
        <Tabs defaultValue="stats">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="stats" className="mt-4">
            <ProgressStats />
          </TabsContent>
          
          <TabsContent value="achievements" className="mt-4">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-md flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    Latest Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AchievementCard
                      title="First Course Completed"
                      description="You completed your first learning session"
                      date="2 days ago"
                      xp={50}
                      icon="🎓"
                    />
                    <AchievementCard
                      title="3-Day Streak"
                      description="You've learned for 3 days in a row"
                      date="Today"
                      xp={25}
                      icon="🔥"
                    />
                    <AchievementCard
                      title="AI Fundamentals Starter"
                      description="Completed first AI Fundamentals course"
                      date="Yesterday"
                      xp={30}
                      icon="🤖"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-md flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    Upcoming Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AchievementCard
                      title="5-Day Streak"
                      description="Learn for 5 days in a row"
                      progress={60}
                      xp={50}
                      icon="🔥"
                    />
                    <AchievementCard
                      title="Topic Explorer"
                      description="Complete courses in 3 different topics"
                      progress={33}
                      xp={75}
                      icon="🧭"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-md flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Learning History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <HistoryItem 
                    title="AI Ethics and Responsible Use"
                    date="Today, 10:30 AM"
                    duration="5 min"
                    xp={15}
                  />
                  <HistoryItem 
                    title="Introduction to Machine Learning"
                    date="Yesterday, 4:15 PM"
                    duration="10 min"
                    xp={25}
                  />
                  <HistoryItem 
                    title="Azure AI Services Overview"
                    date="2 days ago, 8:45 AM"
                    duration="5 min"
                    xp={15}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNav />
    </div>
  );
};

interface AchievementCardProps {
  title: string;
  description: string;
  date?: string;
  progress?: number;
  xp: number;
  icon: string;
}

const AchievementCard = ({ title, description, date, progress, xp, icon }: AchievementCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 border shadow-sm">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="bg-accent rounded-full w-10 h-10 flex items-center justify-center text-xl">
            {icon}
          </div>
          <div>
            <h3 className="font-medium text-sm">{title}</h3>
            <p className="text-xs text-muted-foreground">{description}</p>
            {date && <p className="text-xs text-muted-foreground mt-1">{date}</p>}
            {progress !== undefined && (
              <div className="w-full h-1.5 bg-muted rounded-full mt-2">
                <div 
                  className="h-full bg-brand-purple rounded-full" 
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        </div>
        <Badge className="bg-brand-purple">+{xp} XP</Badge>
      </div>
    </div>
  );
};

interface HistoryItemProps {
  title: string;
  date: string;
  duration: string;
  xp: number;
}

const HistoryItem = ({ title, date, duration, xp }: HistoryItemProps) => {
  return (
    <div className="border-b pb-4 last:border-0 last:pb-0">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-sm">{title}</h3>
          <p className="text-xs text-muted-foreground">{date}</p>
          <Badge variant="outline" className="mt-1 text-xs">
            {duration}
          </Badge>
        </div>
        <Badge className="bg-brand-purple">+{xp} XP</Badge>
      </div>
    </div>
  );
};

export default Progress;
