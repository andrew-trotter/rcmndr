import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

function Slogan() {
  return (
    <div className={twMerge('text-white')}>
      <motion.p
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-4xl"
      >
        collate.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="text-4xl"
      >
        recommend.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 2.8 }}
        className="text-4xl"
      >
        discover.
      </motion.p>
    </div>
  )
}

export default Slogan
