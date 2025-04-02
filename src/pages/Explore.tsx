
import React from 'react';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import GamificationStatus from '@/components/GamificationStatus';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

const Explore = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      <GamificationStatus />
      
      <div className="container px-4 py-6 max-w-6xl">
        <h1 className="text-3xl font-bold text-brand-purple mb-6">Explore</h1>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search courses and topics..." 
            className="pl-10 py-6 rounded-full"
          />
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <CategoryCard title="AI Fundamentals" icon="🤖" color="bg-blue-100" />
            <CategoryCard title="Machine Learning" icon="🧠" color="bg-purple-100" />
            <CategoryCard title="Cloud Computing" icon="☁️" color="bg-cyan-100" />
            <CategoryCard title="Cybersecurity" icon="🔒" color="bg-green-100" />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Trending Courses</h2>
          <div className="grid gap-4">
            <CourseCard 
              title="AI Ethics and Responsible Use" 
              duration="5 min"
              difficulty="Beginner"
              rating={4.8}
              enrolled={1250}
            />
            <CourseCard 
              title="Introduction to Machine Learning" 
              duration="10 min"
              difficulty="Intermediate"
              rating={4.9}
              enrolled={2340}
            />
            <CourseCard 
              title="Azure AI Services Overview" 
              duration="5 min"
              difficulty="Beginner"
              rating={4.7}
              enrolled={980}
            />
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

interface CategoryCardProps {
  title: string;
  icon: string;
  color: string;
}

const CategoryCard = ({ title, icon, color }: CategoryCardProps) => {
  return (
    <Card className={`${color} border-none hover:shadow-md transition-shadow cursor-pointer`}>
      <CardContent className="p-4 flex flex-col items-center text-center">
        <span className="text-3xl mb-2">{icon}</span>
        <span className="font-medium text-sm">{title}</span>
      </CardContent>
    </Card>
  );
};

interface CourseCardProps {
  title: string;
  duration: string;
  difficulty: string;
  rating: number;
  enrolled: number;
}

const CourseCard = ({ title, duration, difficulty, rating, enrolled }: CourseCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-md">{title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-1">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              {duration}
            </Badge>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              {difficulty}
            </Badge>
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="pt-0 text-xs text-muted-foreground flex justify-between">
        <span>⭐ {rating} ({enrolled} enrolled)</span>
        <Button size="sm" variant="ghost" className="text-xs text-brand-blue hover:text-brand-blue hover:bg-blue-50">
          Add to Queue
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Explore;
