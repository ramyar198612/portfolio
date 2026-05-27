import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-6 bg-cyan-900">
      <h1 className="text-cyan-400 font-bold text-xl">MyPortfolio</h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/education">Education</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}