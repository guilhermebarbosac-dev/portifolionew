import { motion } from 'framer-motion'
import { GithubLogo, LinkedinLogo, Heart } from 'phosphor-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-dark border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-gray-400">Feito com</span>
            <Heart size={20} className="text-primary" weight="fill" />
            <span className="text-gray-400">por Guilherme Barbosa</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <GithubLogo size={24} />
            </a>
            <a
              href="https://linkedin.com/in/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <LinkedinLogo size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-400"> {currentYear} Todos os direitos reservados</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
