import { motion } from 'framer-motion'

const Spinner = () => {
  return (
    <motion.div
      className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}

export default Spinner
