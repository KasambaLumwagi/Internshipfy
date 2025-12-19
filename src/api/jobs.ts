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
const ADZUNA_APP_ID = import.meta.env.VITE_ADZUNA_APP_ID;
const ADZUNA_APP_KEY = import.meta.env.VITE_ADZUNA_APP_KEY;
const JOOBLE_API_KEY = import.meta.env.VITE_JOOBLE_API_KEY;

const normalizeRemotiveJobs = (jobs: any[]): Job[] => {
    return jobs.map((job: any) => ({
        id: `remotive-${job.id}`,
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
};

const normalizeJoobleJobs = (jobs: any[]): Job[] => {
    return jobs.map((job: any) => ({
        id: `jooble-${job.id}`,
        title: job.title.replace(/<\/?[^>]+(>|$)/g, ""), // Strip HTML
        company: job.company || 'Unknown Company',
        company_logo: '',
        url: job.link,
        category: 'Remote Role',
        tags: [],
        job_type: 'remote',
        publication_date: job.updated,
        candidate_required_location: job.location || 'Remote',
        salary: job.salary || 'Not specified',
        description: job.snippet.replace(/<\/?[^>]+(>|$)/g, "") // Strip HTML
    }));
};

const normalizeAdzunaJobs = (jobs: any[]): Job[] => {
    return jobs.map((job: any) => ({
        id: `adzuna-${job.id}`,
        title: job.title,
        company: job.company.display_name,
        company_logo: '', // Adzuna doesn't always provide logos directly in the search results
        url: job.redirect_url,
        category: job.category.label,
        tags: [],
        job_type: job.contract_type || 'remote',
        publication_date: job.created,
        candidate_required_location: job.location.display_name,
        salary: job.salary_min ? `${job.salary_min} - ${job.salary_max}` : 'Not specified',
        description: job.description
    }));
};

export const fetchJobs = async (): Promise<Job[]> => {
    const jobs: Job[] = [];

    // Remotive Fetch
    try {
        const response = await axios.get(REMOTIVE_API);
        const filteredRemotive = response.data.jobs.filter((job: any) => {
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
        jobs.push(...normalizeRemotiveJobs(filteredRemotive));
    } catch (error) {
        console.error('Error fetching Remotive jobs:', error);
    }

    // Adzuna Fetch (only if credentials exist)
    if (ADZUNA_APP_ID && ADZUNA_APP_KEY) {
        try {
            // Searching for remote internships/junior roles globally
            const adzunaUrl = `/api/adzuna/jobs/ww/search/1?app_id=${ADZUNA_APP_ID}&app_key=${ADZUNA_APP_KEY}&results_per_page=50&what=internship%20OR%20junior%20OR%20graduate&where=remote&content-type=application/json`;
            const response = await axios.get(adzunaUrl);
            jobs.push(...normalizeAdzunaJobs(response.data.results));
        } catch (error) {
            console.error('Error fetching Adzuna jobs:', error);
        }
    }

    // Jooble Fetch (only if credentials exist)
    if (JOOBLE_API_KEY) {
        try {
            const joobleUrl = `/api/jooble/${JOOBLE_API_KEY}`;
            const response = await axios.post(joobleUrl, {
                keywords: 'internship junior entry graduate remote',
                location: 'remote'
            });
            jobs.push(...normalizeJoobleJobs(response.data.jobs));
        } catch (error) {
            console.error('Error fetching Jooble jobs:', error);
        }
    }

    return jobs;
};
