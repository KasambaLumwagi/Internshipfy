import { Briefcase, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass sticky top-0 z-50 px-6 py-4 mb-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-primary p-2 rounded-lg">
            <Briefcase className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            Internship<span className="text-primary">fy</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="font-medium hover:text-primary transition-colors">Find Jobs</a>
          <a href="#" className="font-medium hover:text-primary transition-colors">Remote Roles</a>
          <a href="#" className="font-medium hover:text-primary transition-colors">Learning</a>
          <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full font-semibold transition-all">
            Post a Job
          </button>
        </div>

        <button
          className="md:hidden p-2 hover:bg-glass rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass mt-2 p-6 animate-fade flex flex-col gap-4">
          <a href="#" className="font-medium hover:text-primary transition-colors py-2 border-b border-glass-border">Find Jobs</a>
          <a href="#" className="font-medium hover:text-primary transition-colors py-2 border-b border-glass-border">Remote Roles</a>
          <a href="#" className="font-medium hover:text-primary transition-colors py-2 border-b border-glass-border">Learning</a>
          <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-semibold transition-all">
            Post a Job
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
