import { motion } from 'framer-motion'
import { List, X } from 'phosphor-react'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 96 // altura do navbar (h-24 = 96px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 45)

      // Update active section based on scroll position
      const sections = ['inicio', 'sobre', 'projetos', 'contato']
      
      // Encontrar qual seção está mais visível na tela
      let maxVisibleSection = sections[0]
      let maxVisibleArea = 0

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const viewHeight = window.innerHeight
          const navHeight = 96

          // Calcular área visível da seção
          const visibleTop = Math.max(rect.top, navHeight)
          const visibleBottom = Math.min(rect.bottom, viewHeight)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          
          // Se esta seção tem mais área visível, ela é a seção ativa
          if (visibleHeight > maxVisibleArea) {
            maxVisibleArea = visibleHeight
            maxVisibleSection = section
          }
          
          // Se estamos no topo da seção, ela é a seção ativa
          if (rect.top <= navHeight + 50 && rect.top > -50) {
            maxVisibleSection = section
          }
        }
      })

      setActiveSection(maxVisibleSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'inicio', label: 'INICIO' },
    { id: 'sobre', label: 'SOBRE' },
    { id: 'projetos', label: 'PROJETOS' },
    { id: 'contato', label: 'CONTATO' },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <span className="text-4xl font-bold gradient-text">GB</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="bg-dark/80 backdrop-blur-md shadow-xl rounded-full px-2 py-2">
              <div className="flex items-center space-x-1 relative">
                {/* Indicador animado */}
                <motion.div
                  className="absolute h-9 rounded-full bg-primary"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }}
                  style={{
                    width: '100px',
                    left: activeSection === 'inicio' ? '4px' :
                          activeSection === 'sobre' ? '108px' :
                          activeSection === 'projetos' ? '212px' : '316px'
                  }}
                />
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                    href={`#${item.id}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-[100px] px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer z-10 flex items-center justify-center ${
                      activeSection === item.id
                        ? 'text-dark'
                        : 'text-light hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light hover:text-primary transition-colors p-2 rounded-lg hover:bg-dark/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={menuVariants}
        className="md:hidden fixed top-0 right-0 h-screen w-64 bg-dark/95 backdrop-blur-lg shadow-xl"
      >
        <div className="pt-24 px-8">
          <div className="space-y-4 relative">
            {/* Indicador animado mobile */}
            <motion.div
              className="absolute h-10 rounded-lg bg-primary"
              layoutId="activeSectionMobile"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
              style={{
                width: '100%',
                top: activeSection === 'inicio' ? '0px' :
                     activeSection === 'sobre' ? '56px' :
                     activeSection === 'projetos' ? '112px' : '168px'
              }}
            />
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                  setIsMenuOpen(false)
                }}
                href={`#${item.id}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block px-4 py-2 rounded-lg text-base font-medium z-10 relative items-center justify-center ${
                  activeSection === item.id
                    ? 'text-dark'
                    : 'text-light hover:text-primary'
                } transition-all duration-300`}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
