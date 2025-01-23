import { motion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastProvider } from './contexts/ToastContext'
import Home from './pages/Home'
import CVPage from './pages/cv'

function App() {
  return (
    <ToastProvider>
      <Router>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-dark"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CVPage />} />
          </Routes>
        </motion.div>
      </Router>
    </ToastProvider>
  )
}

export default App
