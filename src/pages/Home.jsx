import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-cyan-400"
      >
        Hi, I'm a React Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-400"
      >
        I build modern web applications
      </motion.p>
    </div>
  );
}