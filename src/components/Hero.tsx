import { Search, Globe, Zap } from 'lucide-react';

interface HeroProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    locationQuery: string;
    setLocationQuery: (query: string) => void;
}

const Hero = ({ searchQuery, setSearchQuery, locationQuery, setLocationQuery }: HeroProps) => {
    return (
        <div className="relative px-6 pt-20 pb-16 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 -u-z-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 -u-z-10 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-fade">
                    <Zap size={16} className="text-secondary" />
                    <span className="text-sm font-medium">New: 500+ Remote Roles Added This Week</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade tracking-tight">
                    Find Your Dream <br />
                    <span className="text-gradient">Remote Career</span> Start
                </h1>

                <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12 animate-fade delay-100">
                    The ultimate platform for students and recent grads to discover remote internships and entry-level roles from top companies worldwide.
                </p>

                {/* Hero Search Bar */}
                <div className="max-w-3xl mx-auto glass-card p-2 flex flex-col md:flex-row gap-2 animate-fade delay-200">
                    <div className="flex-1 flex items-center gap-3 px-4 py-3 border-r border-glass-border">
                        <Search className="text-text-secondary" size={20} />
                        <input
                            type="text"
                            placeholder="Job title or company..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent border-none outline-none w-full text-text-primary placeholder:text-text-secondary"
                        />
                    </div>
                    <div className="flex-1 flex items-center gap-3 px-4 py-3">
                        <Globe className="text-text-secondary" size={20} />
                        <input
                            type="text"
                            placeholder="Worldwide / Remote"
                            value={locationQuery}
                            onChange={(e) => setLocationQuery(e.target.value)}
                            className="bg-transparent border-none outline-none w-full text-text-primary placeholder:text-text-secondary"
                        />
                    </div>
                    <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-primary/20">
                        Search Jobs
                    </button>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-8 animate-fade delay-300 opacity-60 grayscale hover:grayscale-0 transition-all">
                    <span className="text-2xl font-black">GOOGLE</span>
                    <span className="text-2xl font-black">META</span>
                    <span className="text-2xl font-black">DISCORD</span>
                    <span className="text-2xl font-black">STRIPE</span>
                    <span className="text-2xl font-black">REMOTIVE</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
