import Homepage from '../components/Homepage'
import Head from 'next/head'

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://www.richardkwang.com" />
        <meta property="og:url" content="https://www.richardkwang.com" />

        <title>Richard Kwang</title>
        <meta property="og:title" content="Richard Kwang" />
        <meta name="description" content="Coding is my passion" />
        <meta property="og:description" content="Coding is my passion" />
        <meta property="og:type" content="article" />
        <meta
          name="keywords"
          content="web development, software engineer, programming, richard kwang"
        />
      </Head>
      <Homepage />
    </div>
  )
}
