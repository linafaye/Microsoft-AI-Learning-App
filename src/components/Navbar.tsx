
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bell, Menu, Search, User } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="container flex items-center justify-between h-16 px-4 max-w-6xl">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="py-4">
                <h2 className="text-lg font-semibold mb-4 text-brand-purple">Quick Learn Flow</h2>
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">Home</Button>
                  <Button variant="ghost" className="w-full justify-start">My Courses</Button>
                  <Button variant="ghost" className="w-full justify-start">My Queue</Button>
                  <Button variant="ghost" className="w-full justify-start">Settings</Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          
          <span className="text-lg font-bold hidden md:inline text-brand-purple">Quick Learn Flow</span>
          <span className="text-lg font-bold md:hidden text-brand-purple">QLF</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
