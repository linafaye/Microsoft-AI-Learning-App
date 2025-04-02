
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Flame, Award, Sparkles } from 'lucide-react';

const GamificationStatus = () => {
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-border py-3 px-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-orange-500">
            <Flame size={18} />
            <span className="font-semibold">3</span>
          </div>
          <span className="text-xs text-muted-foreground">day streak</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-brand-purple">
            <Award size={18} />
            <span className="font-semibold">125</span>
          </div>
          <span className="text-xs text-muted-foreground">XP</span>
        </div>
        
        <div>
          <Badge variant="outline" className="bg-accent bg-opacity-50 text-xs">
            <Sparkles size={12} className="mr-1 text-yellow-500" />
            Level 2
          </Badge>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span>Daily goal</span>
          <span>1/3 sessions</span>
        </div>
        <Progress value={33} className="h-2" />
      </div>
    </div>
  );
};

export default GamificationStatus;
