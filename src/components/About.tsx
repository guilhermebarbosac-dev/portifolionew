import { motion } from 'framer-motion'
import { Code, Database, Lightning, Palette } from 'phosphor-react'

const About = () => {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Desenvolvimento Frontend',
      description:
        'Experiência com React.js, Next.js e ferramentas modernas de frontend.',
    },
    {
      icon: <Database size={32} />,
      title: 'Desenvolvimento Backend',
      description:
        'Proficiente em construir serviços escaláveis e APIs RESTful.',
    },
    {
      icon: <Lightning size={32} />,
      title: 'Otimização de Performance',
      description:
        'Habilidade em otimizar aplicações web para máxima velocidade e eficiência.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Design UI/UX',
      description:
        'Criação de interfaces intuitivas e bonitas com atenção aos detalhes.',
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
    <section id="sobre" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-primary font-mono mb-4">Conheça-me</p>
            <h2 className="section-title">Sobre Mim</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div variants={itemVariants}>
              <p className="text-gray-300 leading-relaxed">
                Sou um Desenvolvedor Full Stack apaixonado por tecnologia, com uma
                sólida base em desenvolvimento web e um olhar aguçado para design.
                Minha jornada no desenvolvimento web começou com curiosidade e
                evoluiu para uma carreira profissional construindo aplicações
                modernas e responsivas.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-300 leading-relaxed">
                Me especializo no ecossistema React e JavaScript moderno, sempre
                me mantendo atualizado com as últimas tendências e melhores
                práticas em desenvolvimento web. Acredito em escrever código
                limpo e manutenível, criando experiências intuitivas para o usuário.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-dark/50 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="text-primary mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
