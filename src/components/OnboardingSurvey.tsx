
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

type QuestionOption = {
  id: string;
  label: string;
};

type SurveyQuestion = {
  id: string;
  question: string;
  options: QuestionOption[];
};

const surveyQuestions: SurveyQuestion[] = [
  {
    id: 'role',
    question: 'What is your role?',
    options: [
      { id: 'developer', label: 'Developer' },
      { id: 'administrator', label: 'Administrator' },
      { id: 'data-analyst', label: 'Data Analyst/Scientist' },
      { id: 'student', label: 'Student' },
      { id: 'solution-architect', label: 'Solution Architect' },
      { id: 'it', label: 'IT' },
      { id: 'data-engineer', label: 'Data Engineer' },
      { id: 'security-engineer', label: 'Security Engineer' },
      { id: 'ai-engineer', label: 'AI Engineer' },
    ],
  },
  {
    id: 'learning-goals',
    question: 'What are your learning goals?',
    options: [
      { id: 'casual', label: 'Casual Learning' },
      { id: 'professional', label: 'Professional Growth' },
      { id: 'skill', label: 'Skill Development' },
    ],
  },
  {
    id: 'target-time',
    question: 'How much time do you want to spend on each learning session?',
    options: [
      { id: '5min', label: '5 minutes' },
      { id: '10min', label: '10 minutes' },
      { id: '15min', label: '15 minutes' },
    ],
  },
  {
    id: 'weekly-goals',
    question: 'What are your weekly learning goals?',
    options: [
      { id: 'once', label: 'Once a week' },
      { id: 'twice', label: 'Twice a week' },
      { id: 'thrice', label: 'Three times a week' },
      { id: 'weekday', label: 'Weekday' },
      { id: 'weekend', label: 'Weekend' },
      { id: 'daily', label: 'Daily' },
    ],
  },
  {
    id: 'learning-experience',
    question: 'What is your desired learning experience?',
    options: [
      { id: 'voice', label: 'Hands free voice only' },
      { id: 'interactive', label: 'Interactive' },
      { id: 'both', label: 'Both' },
    ],
  },
];

const OnboardingSurvey = ({ onComplete }: { onComplete: () => void }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const currentQuestion = surveyQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / surveyQuestions.length) * 100;
  
  const handleNext = () => {
    if (selectedOption) {
      // Save current answer
      setAnswers({
        ...answers,
        [currentQuestion.id]: selectedOption,
      });
      
      // Move to next question or complete onboarding
      if (currentQuestionIndex < surveyQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        console.log('Survey completed with answers:', {...answers, [currentQuestion.id]: selectedOption});
        onComplete();
      }
    }
  };
  
  return (
    <Card className="w-[90%] max-w-[500px] mx-auto">
      <CardHeader>
        <CardTitle className="text-brand-purple">Personalize Your Learning</CardTitle>
        <CardDescription>Help us customize your learning experience</CardDescription>
        <Progress value={progress} className="h-2 mt-2" />
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          <h3 className="text-lg font-medium">{currentQuestion.question}</h3>
          
          <RadioGroup 
            value={selectedOption || ""} 
            onValueChange={setSelectedOption}
            className="space-y-3"
          >
            {currentQuestion.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2 border p-3 rounded-md hover:bg-muted">
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id} className="flex-grow cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => {
            if (currentQuestionIndex > 0) {
              setCurrentQuestionIndex(currentQuestionIndex - 1);
              setSelectedOption(answers[surveyQuestions[currentQuestionIndex - 1].id] || null);
            }
          }}
          disabled={currentQuestionIndex === 0}
        >
          Back
        </Button>
        
        <Button 
          onClick={handleNext}
          disabled={!selectedOption}
          className="button-primary"
        >
          {currentQuestionIndex === surveyQuestions.length - 1 ? 'Complete' : 'Next'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OnboardingSurvey;
