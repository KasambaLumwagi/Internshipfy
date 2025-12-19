import axios from 'axios';

export interface Job {
    id: string;
    title: string;
    company: string;
    company_logo: string;
    url: string;
    category: string;
    tags: string[];
    job_type: string;
    publication_date: string;
    candidate_required_location: string;
    salary: string;
    description: string;
}

const REMOTIVE_API = '/api/remotive/remote-jobs';

export const fetchJobs = async (): Promise<Job[]> => {
    try {
        // Fetching from Remotive as a primary real-time source
        const response = await axios.get(REMOTIVE_API);
        const allJobs = response.data.jobs;

        // Filter for Internships and Entry-Level (Junior) roles
        const filteredJobs = allJobs.filter((job: any) => {
            const title = job.title.toLowerCase();
            const jobType = job.job_type.toLowerCase();
            const tags = job.tags.map((t: string) => t.toLowerCase());

            return (
                title.includes('intern') ||
                title.includes('junior') ||
                title.includes('entry') ||
                title.includes('trainee') ||
                title.includes('student') ||
                title.includes('grad') ||
                jobType.includes('intern') ||
                tags.includes('internship') ||
                tags.includes('junior') ||
                tags.includes('trainee') ||
                tags.includes('entry level')
            );
        });

        return filteredJobs.map((job: any) => ({
            id: job.id.toString(),
            title: job.title,
            company: job.company_name,
            company_logo: job.company_logo,
            url: job.url,
            category: job.category,
            tags: job.tags,
            job_type: job.job_type || 'remote',
            publication_date: job.publication_date,
            candidate_required_location: job.candidate_required_location || 'Worldwide',
            salary: job.salary || 'Not specified',
            description: job.description
        }));
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return [];
    }
};
