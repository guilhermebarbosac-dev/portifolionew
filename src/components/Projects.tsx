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
      github: 'https://github.com/guilhermebarbosac-dev',
      demo: 'https://schia.com.br',
    },
    {
      title: 'Site Igreja Batista Nova Vida',
      description:
        'Aplicação full-stack de um site completo com Gestão Operacional com React e Vite',
      image: '/images/project2.png',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase'],
      github: 'https://github.com/guilhermebarbosac-dev/ibnv.git',
      demo: '',
    },
    {
      title: 'Expert Notes',
      description:
        'Plataforma de anotações com design responsivo e mobile-first.',
      image: '/images/project3.png',
      tags: ['React', 'Redux', 'Node.js'],
      github: 'https://github.com/gojeta1/notes',
      demo: 'https://notes-omega-hazel.vercel.app/',
    },
    {
      title: 'BarberShop',
      description:
        'Plataforma de agendamento de serviços de barbearia com design responsivo e mobile-first.',
      image: '/images/project4.png',
      tags: ['React', 'Redux', 'Node.js', 'Tailwind CSS'],
      github: 'https://github.com/gojeta1/barbershop',
      demo: 'https://barbershop-jade.vercel.app/',
    },
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
