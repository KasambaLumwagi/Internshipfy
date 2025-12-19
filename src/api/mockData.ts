import type { Job } from './jobs';

export const MOCK_JOBS: Job[] = [
    {
        id: 'mock-1',
        title: 'Data Engineering Intern',
        company: 'Spotify',
        company_logo: 'https://logo.clearbit.com/spotify.com',
        url: 'https://www.lifeatspotify.com/jobs',
        category: 'Data',
        tags: ['Internship', 'Data', 'Engineering', 'Remote'],
        job_type: 'internship',
        publication_date: new Date().toISOString(),
        candidate_required_location: 'Worldwide',
        salary: 'Competitive',
        description: 'Join our Data Engineering team to build scalable data pipelines...'
    },
    {
        id: 'mock-2',
        title: 'Junior Data Engineer',
        company: 'Netflix',
        company_logo: 'https://logo.clearbit.com/netflix.com',
        url: 'https://jobs.netflix.com/',
        category: 'Data',
        tags: ['Entry Level', 'Data', 'Python', 'SQL'],
        job_type: 'full_time',
        publication_date: new Date().toISOString(),
        candidate_required_location: 'Remote',
        salary: '$80k - $100k',
        description: 'Great opportunity for a recent grad to learn big data technologies...'
    },
    {
        id: 'mock-3',
        title: 'Data Analytics Intern',
        company: 'Twitch',
        company_logo: 'https://logo.clearbit.com/twitch.tv',
        url: 'https://www.twitch.tv/jobs',
        category: 'Data',
        tags: ['Internship', 'Analytics', 'Remote'],
        job_type: 'internship',
        publication_date: new Date().toISOString(),
        candidate_required_location: 'Worldwide',
        salary: 'Paid Internship',
        description: 'Help us understand our community better through data analysis...'
    },
    {
        id: 'mock-4',
        title: 'Associate Data Engineer',
        company: 'Shopify',
        company_logo: 'https://logo.clearbit.com/shopify.com',
        url: 'https://www.shopify.com/careers',
        category: 'Engineering',
        tags: ['Junior', 'Remote', 'Data Engineering'],
        job_type: 'full_time',
        publication_date: new Date().toISOString(),
        candidate_required_location: 'Americas',
        salary: '$90k+',
        description: 'Build the data infrastructure that powers global commerce...'
    },
    {
        id: 'mock-5',
        title: 'Machine Learning Engineer Intern',
        company: 'Hugging Face',
        company_logo: 'https://logo.clearbit.com/huggingface.co',
        url: 'https://huggingface.co/jobs',
        category: 'AI/ML',
        tags: ['Internship', 'AI', 'Remote'],
        job_type: 'internship',
        publication_date: new Date().toISOString(),
        candidate_required_location: 'Remote',
        salary: 'Competitive',
        description: 'Work on open source models and datasets...'
    }
];
