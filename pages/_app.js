import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        transition={{ duration: 0.5 }}
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  )
}

export default MyApp
