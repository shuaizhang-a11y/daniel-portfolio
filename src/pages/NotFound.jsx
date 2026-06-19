import { Link } from 'react-router-dom'

export default function NotFound() {
  return <div className="not-found"><span>404</span><h1>This space<br />is still unbuilt.</h1><Link className="text-link" to="/">Return home <span>↗</span></Link></div>
}
