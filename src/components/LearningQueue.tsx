
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Trash2 } from 'lucide-react';

// Dummy data for learning queue
const queueItems = [
  {
    id: '1',
    title: 'Introduction to Machine Learning',
    category: 'AI Fundamentals',
    duration: 5,
  },
  {
    id: '2',
    title: 'Neural Networks Explained',
    category: 'Deep Learning',
    duration: 5,
  },
];

const LearningQueue = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium mb-4">Your Learning Queue</h3>
      
      {queueItems.length > 0 ? (
        <div className="space-y-3">
          {queueItems.map((item) => (
            <Card key={item.id} className="flex items-center justify-between p-4 border">
              <div>
                <h4 className="font-medium">{item.title}</h4>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm text-muted-foreground">{item.category}</span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{item.duration} min</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button size="sm" className="button-primary">
                  Start
                </Button>
                <Button size="icon" variant="outline">
                  <Trash2 className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-muted-foreground">
          <p>Your learning queue is empty.</p>
          <p>Complete courses and add them to your queue!</p>
        </div>
      )}
    </div>
  );
};

export default LearningQueue;
