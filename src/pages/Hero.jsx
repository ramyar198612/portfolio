import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold mb-6">
          Hi, I'm <span className="text-cyan-400">Ramya</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Frontend Web Developer using React and Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/projects"
            className="bg-cyan-500 px-6 py-3 rounded-xl font-semibold"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border border-cyan-400 px-6 py-3 rounded-xl"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;