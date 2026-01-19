import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akash_kr.');
                const data = await response.json();

                if (data.status === 'ok') {
                    const formattedPosts = data.items.map((item, index) => {
                        // Extract first image from content if thumbnail is missing
                        let image = item.thumbnail;
                        if (!image) {
                            const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
                            image = imgMatch ? imgMatch[1] : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80';
                        }

                        // Create excerpt from description (strip HTML)
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = item.description;
                        const text = tempDiv.textContent || tempDiv.innerText || '';
                        const excerpt = text.substring(0, 100) + '...';

                        return {
                            id: index,
                            title: item.title,
                            excerpt: excerpt,
                            date: new Date(item.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                            author: item.author,
                            category: item.categories.length > 0 ? item.categories[0] : 'Tech',
                            image: image,
                            link: item.link
                        };
                    });
                    setPosts(formattedPosts);
                }
            } catch (error) {
                console.error('Error fetching Medium posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Only show first 3 articles
    const displayPosts = posts.slice(0, 3);
    const hasMorePosts = posts.length > 3;

    if (loading) {
        return (
            <section id="blog" className="section">
                <div className="container">
                    <h2 className="section-title">Latest <span className="gradient-text">Articles</span></h2>
                    <div className="text-center text-secondary">Loading articles...</div>
                </div>
            </section>
        );
    }

    return (
        <section id="blog" className="section">
            <div className="container">
                <h2 className="section-title">Latest <span className="gradient-text">Articles</span></h2>
                {posts.length === 0 ? (
                    <div className="text-center text-secondary">No articles found. Check back soon!</div>
                ) : (
                    <>
                        <div className="blog-grid">
                            {displayPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass-card blog-card"
                                >
                                    <div className="blog-image-container">
                                        <img src={post.image} alt={post.title} className="blog-image" />
                                        <span className="blog-category">{post.category}</span>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span className="blog-date"><Calendar size={14} /> {post.date}</span>
                                            <span className="blog-author"><User size={14} /> {post.author}</span>
                                        </div>
                                        <h3 className="blog-title">{post.title}</h3>
                                        <p className="blog-excerpt">{post.excerpt}</p>
                                        <a href={post.link} target="_blank" rel="noopener noreferrer" className="blog-link">
                                            Read More <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                        {hasMorePosts && (
                            <motion.div
                                className="see-more-container"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <Link to="/articles" className="btn btn-primary see-more-btn">
                                    See More Articles <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default Blog;
