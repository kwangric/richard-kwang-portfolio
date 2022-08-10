import Homepage from '../components/Homepage'
import Head from 'next/head'

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Richard Kwang</title>
        <meta
          name="keywords"
          content="web development, software engineer, programming, richard kwang"
        />
      </Head>
      <Homepage />
    </div>
  )
}
