import JobCard from './JobCard';
import type { Job } from '../api/jobs';

interface JobGridProps {
    jobs: Job[] | undefined;
    isLoading: boolean;
    onClearFilters: () => void;
}

const JobGrid = ({ jobs, isLoading, onClearFilters }: JobGridProps) => {
    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="glass-card p-6 h-72 animate-pulse">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 bg-glass rounded-xl" />
                            <div className="space-y-2 flex-1">
                                <div className="h-4 bg-glass rounded w-3/4" />
                                <div className="h-3 bg-glass rounded w-1/2" />
                            </div>
                        </div>
                        <div className="flex gap-2 mb-6">
                            <div className="h-6 bg-glass rounded-full w-16" />
                            <div className="h-6 bg-glass rounded-full w-16" />
                            <div className="h-6 bg-glass rounded-full w-16" />
                        </div>
                        <div className="mt-auto space-y-3">
                            <div className="h-4 bg-glass rounded w-full" />
                            <div className="h-10 bg-glass rounded-lg w-full" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (!jobs || jobs.length === 0) {
        return (
            <div className="glass-card p-12 text-center">
                <h3 className="text-xl font-bold mb-2">No roles found</h3>
                <p className="text-text-secondary mb-6">Try adjusting your filters or search terms.</p>
                <button
                    onClick={onClearFilters}
                    className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-bold transition-all"
                >
                    Clear all filters
                </button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
};

export default JobGrid;
