import profile from "../assets/images/ramya.png";

function About() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-72 h-72 object-cover rounded-3xl shadow-2xl border-4 border-cyan-400 hover:scale-105 transition duration-300"
          />
        </div>

        {/* About Content */}
        <div>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a passionate frontend developer building responsive and
            modern web applications using React.js and Tailwind CSS.
          </p>

          <p className="text-lg text-gray-400 mt-4">
            I enjoy creating beautiful UI designs, reusable components,
            and interactive user experiences.
          </p>

          <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition">
            Hire Me
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;