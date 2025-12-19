import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import JobGrid from './components/JobGrid';
import { fetchJobs } from './api/jobs';

const queryClient = new QueryClient();

function InternshipfyApp() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'internship' | 'junior'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  const { data: jobs, isLoading } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
    refetchInterval: 1000 * 60 * 10, // Refetch every 10 minutes
  });

  const filteredJobs = jobs?.filter(job => {
    const searchStr = searchQuery.toLowerCase().trim();
    const locationStr = locationQuery.toLowerCase().trim();

    const matchesSearch = !searchStr ||
      job.title.toLowerCase().includes(searchStr) ||
      job.company.toLowerCase().includes(searchStr);

    const matchesLocation = !locationStr ||
      job.candidate_required_location.toLowerCase().includes(locationStr);

    if (!matchesSearch || !matchesLocation) return false;

    if (activeFilter === 'all') return true;

    const roleTitle = job.title.toLowerCase();
    const isIntern = roleTitle.includes('intern') ||
      job.job_type.toLowerCase().includes('intern') ||
      job.tags.some(t => t.toLowerCase().includes('intern'));

    if (activeFilter === 'internship') return isIntern;
    if (activeFilter === 'junior') return !isIntern;

    return true;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setLocationQuery('');
    setActiveFilter('all');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          locationQuery={locationQuery}
          setLocationQuery={setLocationQuery}
        />

        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest Opportunities</h2>
              <p className="text-text-secondary">Current remote openings for students and grads</p>
            </div>
            <div className="flex glass p-1.5 rounded-xl gap-1">
              {(['all', 'internship', 'junior'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeFilter === filter
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'hover:bg-glass text-text-secondary'
                    }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1).replace('junior', 'Entry Level')}
                </button>
              ))}
            </div>
          </div>

          <JobGrid jobs={filteredJobs} isLoading={isLoading} onClearFilters={clearFilters} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InternshipfyApp />
    </QueryClientProvider>
  );
}

export default App;
