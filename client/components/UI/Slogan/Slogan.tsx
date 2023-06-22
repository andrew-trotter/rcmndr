import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

function Slogan() {
  const texts = ['collate.', 'recommend.', 'discover.']
  return (
    <div className={twMerge('text-white')}>
      {texts.map((text, index) => (
        <motion.p
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.5 + index * 1.1 }}
          className="text-4xl"
          key={text}
        >
          {text}
        </motion.p>
      ))}
    </div>
  )
}

export default Slogan
