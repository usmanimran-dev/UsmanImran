import { ArrowUpRight, BookOpen } from "lucide-react";

export default function Blog() {
    const blogs = [
        {
            id: 1,
            title: "Architecting High-Frequency Trading Systems in Node.js",
            description: "An deep dive into low-latency optimizations, message queues, and memory management for processing thousands of transactions per second.",
            link: "https://medium.com/", // Placeholder
            date: "Oct 12, 2025",
            readTime: "8 MIN_READ",
        },
        {
            id: 2,
            title: "Securing Financial Microservices with Zero Trust Architecture",
            description: "How to implement mTLS, identity-aware proxies, and structured logging in distributed cloud environments to prevent unauthorized access.",
            link: "https://dev.to/", // Placeholder
            date: "Nov 04, 2025",
            readTime: "12 MIN_READ",
        },
        {
            id: 3,
            title: "Optimizing PostgreSQL for Financial Ledgers",
            description: "Database partitioning strategies, indexing optimization, and handling concurrent read/write locks at scale.",
            link: "https://hashnode.com/", // Placeholder
            date: "Jan 18, 2026",
            readTime: "6 MIN_READ",
        }
    ];

    return (
        <section id="blog" className="py-32 bg-white relative overflow-hidden">

            {/* HUD Transition Section */}
            <div className="absolute top-0 left-0 right-0 py-0 opacity-40">
                <div className="flex items-center gap-6">
                    <div className="h-px w-32 bg-primary" />
                    <div className="text-[10px] font-bold tracking-[0.5em] text-gray-900 uppercase">S_06 // BLOG_POSTS</div>
                    <div className="h-px flex-1 bg-black/[0.06]" />
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="mb-16 md:mb-24">
                    <div className="text-[10px] font-bold text-primary tracking-[0.8em] uppercase mb-6 md:mb-8">Blog Posts</div>
                    <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-gray-900 uppercase leading-[0.85] md:leading-[0.75]">
                        MY <br />
                        <span className="text-primary italic">BLOG</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <a
                            key={blog.id}
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fin-card group relative block p-8 hover:bg-black/[0.02] transition-all border-black/[0.06] cursor-pointer min-h-[320px] flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl text-primary shadow-sm group-hover:bg-primary/20 transition-all">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-black/30 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-black/60 leading-relaxed font-medium">
                                    {blog.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-black/[0.06] mt-auto">
                                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                                    {blog.date}
                                </span>
                                <span className="text-[10px] font-bold tracking-widest text-black/40 uppercase border border-black/[0.08] px-3 py-1 rounded-md">
                                    {blog.readTime}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
