import { Github, Twitter, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="glass border-t border-glass-border mt-16 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold tracking-tight">
                            Internship<span className="text-primary">fy</span>
                        </span>
                    </div>
                    <p className="text-text-secondary max-w-sm">
                        Empowering students and recent graduates to find high-impact remote internships and entry-level roles worldwide. Join the future of work.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a href="#" className="p-2 glass-border rounded-lg hover:text-primary transition-all"><Github size={20} /></a>
                        <a href="#" className="p-2 glass-border rounded-lg hover:text-primary transition-all"><Twitter size={20} /></a>
                        <a href="#" className="p-2 glass-border rounded-lg hover:text-primary transition-all"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="mb-4">Platform</h4>
                    <ul className="text-text-secondary flex flex-col gap-2">
                        <li><a href="#" className="hover:text-primary transition-colors">Browse Internships</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Entry Level Roles</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Remote Worldwide</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Learning Resources</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="mb-4">Support</h4>
                    <ul className="text-text-secondary flex flex-col gap-2">
                        <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-glass-border mt-12 pt-8 text-center text-text-secondary text-sm">
                <p>© {new Date().getFullYear()} Internshipfy. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
