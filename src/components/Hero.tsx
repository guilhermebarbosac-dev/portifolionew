import { motion } from 'framer-motion'
import { ArrowDown } from 'phosphor-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section
      id="inicio"
      className="min-h-screen relative flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-dark to-dark"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="w-80 h-80 mb-8 rounded-full overflow-hidden border-4 border-primary/20"
          >
            <img
              src="/images/profile.png"
              alt="Perfil"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4 text-center">
            <p className="text-xl md:text-2xl font-mono text-primary">
              Olá, eu sou
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
              Guilherme Barbosa
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8 text-center">
            <h2 className="text-xl md:text-2xl text-gray-300">
              Desenvolvedor Full Stack
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12 text-center">
            <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
              Apaixonado por criar aplicações web bonitas e funcionais
              utilizando tecnologias modernas como React, Next.js e Vite.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full flex justify-center mb-16 md:mb-0"
          >
            <a href="#projetos" className="btn-primary">
              Ver Projetos
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full flex justify-center">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-4 md:bottom-8"
        >
          <ArrowDown size={32} className="text-primary" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
