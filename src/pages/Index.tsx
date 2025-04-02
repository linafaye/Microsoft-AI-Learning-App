
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '@/components/AuthForm';
import OnboardingSurvey from '@/components/OnboardingSurvey';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleOnboardingComplete = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-br from-brand-soft-white to-white">
      <div className="w-full max-w-md mb-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brand-purple mb-2">Quick Learn Flow</h1>
          <p className="text-muted-foreground">
            5-minute AI learning sessions tailored for you
          </p>
        </div>
        
        {!isAuthenticated ? (
          <AuthForm onSuccess={handleAuthSuccess} />
        ) : (
          <OnboardingSurvey onComplete={handleOnboardingComplete} />
        )}
      </div>
    </div>
  );
};

export default Index;
