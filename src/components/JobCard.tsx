import { Globe, Clock, ExternalLink } from 'lucide-react';
import type { Job } from '../api/jobs';

interface JobCardProps {
    job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
    return (
        <div className="glass-card p-6 flex flex-col h-full animate-fade">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 glass rounded-xl flex items-center justify-center overflow-hidden border border-glass-border">
                        {job.company_logo ? (
                            <img src={job.company_logo} alt={job.company} className="w-full h-full object-contain p-1" />
                        ) : (
                            <div className="text-primary font-bold text-xl">{job.company.charAt(0)}</div>
                        )}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold leading-tight hover:text-primary transition-colors cursor-pointer">
                            {job.title}
                        </h3>
                        <p className="text-text-secondary text-sm font-medium">{job.company}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {job.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="bg-glass px-3 py-1 rounded-full text-xs font-semibold text-text-secondary border border-glass-border">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="mt-auto space-y-3">
                <div className="flex items-center gap-6 text-sm text-text-secondary">
                    <div className="flex items-center gap-1.5">
                        <Globe size={14} className="text-accent-cyan" />
                        <span>{job.candidate_required_location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-accent-purple" />
                        <span>{new Date(job.publication_date).toLocaleDateString()}</span>
                    </div>
                </div>

                <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-glass hover:bg-primary hover:text-white border border-glass-border py-2.5 rounded-lg flex items-center justify-center gap-2 font-bold transition-all group"
                >
                    <span>Apply Now</span>
                    <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </div>
        </div>
    );
};

export default JobCard;
