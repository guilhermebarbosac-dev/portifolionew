import { motion } from 'framer-motion'
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from 'phosphor-react'
import emailjs from '@emailjs/browser'
import { FormEvent, useState } from 'react'
import { useToast } from '../contexts/ToastContext'
import { emailConfig } from '../config/emailjs'
import Spinner from './Spinner'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { showToast } = useToast()

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.currentTarget
    const formData = {
      from_name: form.name.valueOf,
      from_email: form.email.value,
      message: form.message.value,
      to_email: 'guilhermebarbosacdev@gmail.com',
      reply_to: form.email.value,
    }

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        formData,
        emailConfig.publicKey
      )
      showToast('Mensagem enviada com sucesso!', 'success')
      form.reset()
    } catch (error) {
      console.error('Error sending email:', error)
      showToast('Erro ao enviar mensagem. Tente novamente.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contato" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-primary font-mono mb-4">Entre em Contato</p>
            <h2 className="section-title">Contato</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Vamos Conversar</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Estou sempre aberto a novas oportunidades e colaborações.
                    Sinta-se à vontade para entrar em contato se tiver alguma
                    pergunta ou apenas quiser dizer olá!
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:guilhermebarbosacdev@gmail.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                  >
                    <EnvelopeSimple size={24} />
                    <span>guilhermebarbosacdev@gmail.com</span>
                  </a>

                  <div className="flex flex-col gap-4">
                    <a
                      href="https://github.com/guilhermebarbosac-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                    >
                      <GithubLogo size={24} />
                      <span>guilhermebarbosac-dev</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/guilherme-barbosa-caetano-3a7085131"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                    >
                      <LinkedinLogo size={24} />
                      <span>guilherme-barbosa-caetano</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`btn-primary w-full flex items-center justify-center ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? <Spinner /> : 'Enviar Mensagem'}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
