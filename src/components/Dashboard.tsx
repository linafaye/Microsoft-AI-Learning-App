
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CourseList from './CourseList';
import LearningQueue from './LearningQueue';
import ProgressStats from './ProgressStats';
import Navbar from './Navbar';
import { Button } from '@/components/ui/button';
import { Award, BookOpen, List } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      <Navbar />
      
      <div className="container px-4 py-6 max-w-6xl">
        <h1 className="text-3xl font-bold text-brand-purple mb-6">Welcome back!</h1>
        
        <div className="grid gap-6">
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recommended for you</h2>
              <Button variant="ghost" size="sm">View all</Button>
            </div>
            <CourseList />
          </section>
          
          <Tabs defaultValue="queue">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="queue" className="flex items-center gap-2">
                <List className="h-4 w-4" />
                Queue
              </TabsTrigger>
              <TabsTrigger value="progress" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                Progress
              </TabsTrigger>
              <TabsTrigger value="completed" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Completed
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="queue" className="mt-4">
              <LearningQueue />
            </TabsContent>
            
            <TabsContent value="progress" className="mt-4">
              <ProgressStats />
            </TabsContent>
            
            <TabsContent value="completed" className="mt-4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium mb-4">Completed Courses</h3>
                <div className="text-center py-10 text-muted-foreground">
                  <p>You haven't completed any courses yet.</p>
                  <p>Start learning to see your progress!</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
