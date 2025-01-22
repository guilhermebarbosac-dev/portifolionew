import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Warning, X } from 'phosphor-react'
import { useEffect } from 'react'

interface ToastProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  const icon = type === 'success' ? (
    <CheckCircle size={24} weight="bold" />
  ) : (
    <Warning size={24} weight="bold" />
  )

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        className={`fixed bottom-4 right-4 flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg ${
          type === 'success'
            ? 'bg-dark border border-primary/20'
            : 'bg-dark border border-red-500/20'
        }`}
      >
        <span
          className={`${
            type === 'success' ? 'text-primary' : 'text-red-500'
          }`}
        >
          {icon}
        </span>
        <p className="font-mono text-gray-200">{message}</p>
        <button
          onClick={onClose}
          className="ml-2 text-gray-400 hover:text-gray-200 transition-colors"
        >
          <X size={20} weight="bold" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

export default Toast
