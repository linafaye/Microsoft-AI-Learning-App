
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Award, PartyPopper } from 'lucide-react';
import { DialogHeader, DialogFooter, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import Confetti from './Confetti';

interface CourseCompletionProps {
  courseName: string;
  onClose: () => void;
}

const CourseCompletion = ({ courseName, onClose }: CourseCompletionProps) => {
  const [showConfetti, setShowConfetti] = React.useState(true);
  
  useEffect(() => {
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative">
      {showConfetti && <Confetti />}
      
      <DialogHeader className="pt-6">
        <div className="flex justify-center mb-4">
          <div className="bg-brand-purple bg-opacity-10 p-4 rounded-full">
            <PartyPopper className="h-10 w-10 text-brand-purple" />
          </div>
        </div>
        <DialogTitle className="text-center text-xl">Congratulations!</DialogTitle>
        <DialogDescription className="text-center">
          You've completed <span className="font-semibold">{courseName}</span>
        </DialogDescription>
      </DialogHeader>
      
      <div className="py-6 text-center">
        <div className="bg-muted p-4 rounded-lg flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Award className="h-5 w-5 text-brand-purple mr-2" />
            <span className="font-medium">5 XP Earned</span>
          </div>
          <span className="text-sm text-muted-foreground">Daily progress: 1/3</span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4">
          Would you like to add this topic to your learning queue?
        </p>
      </div>
      
      <DialogFooter className="flex flex-col sm:flex-row gap-2">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={onClose}
        >
          Maybe Later
        </Button>
        <Button 
          className="button-primary flex-1"
          onClick={onClose}
        >
          Add to Queue
        </Button>
      </DialogFooter>
    </div>
  );
};

export default CourseCompletion;
