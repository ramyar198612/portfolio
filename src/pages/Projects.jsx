import billing from "../assets/images/inventory.png";
import beauty from "../assets/images/beauty.png";
import restaurant from "../assets/images/restaurant.png";


const projects = [
  {
    title: "Billing System",
    description:
      "Modern billing and POS management website with responsive UI.",
      image: billing,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/ramyar198612/Billing",
    live: "https://ramyar198612.github.io/Billing/",
  },

  {
    title: "Beauty Website",
    description:
      "Beauty and salon themed responsive website.",
    image: beauty,
    tech: ["React", "CSS", "Responsive UI"],
    github: "https://github.com/ramyar198612/beauty1",
    live: "https://ramyar198612.github.io/beauty1/",
  },

  {
    title: "Restaurant Website",
    description:
      "Responsive restaurant website with attractive layout.",
    image:restaurant,
     tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ramyar198612/res",
    live: "https://ramyar198612.github.io/res/",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-20 px-6">
      
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            {/* Project Content */}
            <div className="p-6">
              
              <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-xl"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl"
                >
                  Live Demo
                </a>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}