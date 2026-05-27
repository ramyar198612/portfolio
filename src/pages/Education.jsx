import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="min-h-screen p-10">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl text-cyan-400 font-bold text-center"
      >
        Education
      </motion.h1>

      {/* Container */}
      <div className="mt-10 space-y-6 max-w-2xl mx-auto">

        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-bold">M.A.,M.phil.,</h2>
          <p className="text-gray-400">
            Govt.Arts & Science College (2018 - 2022)
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-bold">Higher Secondary</h2>
          <p className="text-gray-400">
            Govt.Girls.Hr.sec. School (2008 - 2010)
          </p>
        </motion.div>

      </div>
    </div>
  );
}