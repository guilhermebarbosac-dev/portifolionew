import { motion } from 'framer-motion'
import { GithubLogo, Globe } from 'phosphor-react'

const Projects = () => {
  const projects = [
    {
      title: 'Sch.IA',
      description:
        'Uma aplicação web moderna construída com Next.js e TypeScript.',
      image: '/images/project1.png',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://schia.com.br',
    },
    // {
    //   title: 'Projeto 2',
    //   description:
    //     'Aplicação full-stack com Next.js e backend em Node.js.',
    //   image: 'https://via.placeholder.com/500x300',
    //   tags: ['Next.js', 'Node.js', 'MongoDB'],
    //   github: 'https://github.com',
    //   demo: 'https://example.com',
    // },
    // {
    //   title: 'Projeto 3',
    //   description:
    //     'Plataforma e-commerce com design responsivo e mobile-first.',
    //   image: 'https://via.placeholder.com/500x300',
    //   tags: ['React', 'Redux', 'Node.js'],
    //   github: 'https://github.com',
    //   demo: 'https://example.com',
    // },
  ]

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
    <section id="projetos" className="py-20 bg-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-primary font-mono mb-4">Meus Trabalhos Recentes</p>
            <h2 className="section-title">Projetos</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark rounded-xl overflow-hidden card-hover"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                    >
                      <GithubLogo size={20} />
                      <span>Código</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                    >
                      <Globe size={20} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
