import { motion } from 'framer-motion'
import { ArrowDown } from 'phosphor-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
      className="min-h-screen relative flex items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-dark to-dark overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Texto */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-mono text-primary">
              Olá, eu sou
            </motion.h2>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold gradient-text">
              Guilherme Barbosa
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-gray-300">
              Desenvolvedor Full Stack
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed max-w-xl">
              Apaixonado por criar aplicações web bonitas e funcionais
              utilizando tecnologias modernas como React, Next.js e Vite.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 items-center"
            >
              <motion.a
                href="#projetos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Ver Projetos
              </motion.a>
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-light hover:text-primary transition-colors"
              >
                <ArrowDown size={20} />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 relative flex items-center justify-end"
          >
            <div className="relative w-[500px] h-[700px]">
              <div className="absolute inset-0 z-0 transform-gpu perspective-1000 preserve-3d">
                <div className="absolute top-0 sm:top-[0vh] sm:-bottom-16 left-1/2 -translate-x-1/2 w-[130%] h-4/5 bg-gradient-to-bl from-secondary/30 to-dark/90 rounded-tl-[100px] rounded-bl-[100px] shadow-2xl backdrop-blur-xl clip-path-polygon-[0_15%,100%_0,100%_100%,0_85%]" />
                <div className="absolute top-6 sm:top-[23vh] sm:-bottom-10 left-[20%] -translate-x-1/2 w-[120%] h-3/4 bg-gradient-to-tr from-primary/30 to-dark/95 rounded-tl-[100px] rounded-br-[100px] shadow-2xl backdrop-blur-xl clip-path-polygon-[0_0,100%_0,100%_85%,0_100%]" />
              </div>
              <motion.div
                variants={itemVariants}
                className="relative inset-0 z-40 overflow-visible"
                style={{
                  transform: 'rotateX(3deg) rotateY(-3deg) translateZ(20px)',
                }}
              >
                <div className="sm:absolute z-60 sm:-inset-1 sm:w-[80vh] sm:h-[80vh] w-[65vh] h-[65vh]">
                  <img
                    src="/images/profile.png"
                    alt="Perfil"
                    className="w-full h-full object-cover object-top filter grayscale"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
