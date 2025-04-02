
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import CourseCompletion from './CourseCompletion';
import { Clock, Mic, MousePointer } from 'lucide-react';
import { cn } from '@/lib/utils';

// Dummy data for courses
const courses = [
  {
    id: '1',
    title: 'Introduction to Machine Learning',
    description: 'Learn the basics of machine learning and its applications.',
    duration: 5,
    type: 'interactive',
    difficulty: 'Beginner',
    category: 'AI Fundamentals',
  },
  {
    id: '2',
    title: 'Neural Networks Explained',
    description: 'Understand how neural networks work and their architecture.',
    duration: 5,
    type: 'voice',
    difficulty: 'Intermediate',
    category: 'Deep Learning',
  },
  {
    id: '3',
    title: 'Practical NLP Applications',
    description: 'Explore real-world applications of natural language processing.',
    duration: 10,
    type: 'both',
    difficulty: 'Advanced',
    category: 'Natural Language Processing',
  },
  {
    id: '4',
    title: 'AI Ethics and Responsibility',
    description: 'Understand the ethical implications of AI development.',
    duration: 5,
    type: 'interactive',
    difficulty: 'Beginner',
    category: 'Ethics',
  },
];

const CourseList = () => {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [completed, setCompleted] = useState(false);
  
  const handleStartCourse = (course: typeof courses[0]) => {
    setSelectedCourse(course);
    setShowDialog(true);
    setCompleted(false);
  };
  
  const handleCompleteCourse = () => {
    setCompleted(true);
  };
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'voice':
        return <Mic className="h-3 w-3" />;
      case 'interactive':
        return <MousePointer className="h-3 w-3" />;
      case 'both':
        return (
          <div className="flex">
            <Mic className="h-3 w-3" />
            <MousePointer className="h-3 w-3" />
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden card-hover">
            <div className={cn(
              "h-1 w-full",
              course.difficulty === 'Beginner' && "bg-green-500",
              course.difficulty === 'Intermediate' && "bg-yellow-500",
              course.difficulty === 'Advanced' && "bg-red-500"
            )} />
            
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="flex items-center gap-1 px-2 text-xs">
                  {getTypeIcon(course.type)}
                  {course.type}
                </Badge>
                <Badge className="bg-brand-purple">{course.difficulty}</Badge>
              </div>
              <h3 className="font-semibold text-lg mt-2">{course.title}</h3>
            </CardHeader>
            
            <CardContent className="text-sm text-muted-foreground pb-2">
              <p>{course.description}</p>
            </CardContent>
            
            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{course.duration} min</span>
              </div>
              
              <Button 
                size="sm" 
                className="button-primary"
                onClick={() => handleStartCourse(course)}
              >
                Start Learning
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[500px]">
          {!completed ? (
            <>
              <DialogHeader>
                <DialogTitle>{selectedCourse?.title}</DialogTitle>
                <DialogDescription>
                  {selectedCourse?.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="py-4">
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">Course Content</h4>
                  <p className="text-sm">This is a simulated course experience. In a real app, the course content would be displayed here.</p>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4" />
                  <span>{selectedCourse?.duration} minutes</span>
                </div>
              </div>
              
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => setShowDialog(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="button-primary"
                  onClick={handleCompleteCourse}
                >
                  Complete Course
                </Button>
              </DialogFooter>
            </>
          ) : (
            <CourseCompletion 
              courseName={selectedCourse?.title || ''} 
              onClose={() => setShowDialog(false)} 
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CourseList;
