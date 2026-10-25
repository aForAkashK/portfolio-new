import { Link } from 'react-router-dom';
export default function NotFound() {
    return <div className="project-detail container"><h1>Page not found</h1><p>The page you’re looking for is unavailable.</p><Link to="/" className="primary-btn">Back to home</Link></div>;
}
