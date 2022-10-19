import type { NextPage } from 'next'
import Head from 'next/head'
import Background from '../components/background'
import Cursor from '../components/cursor'
import Navbar from '../components/havbar'
import Header from '../components/header'
import HomeText from '../components/hometext'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>

      <Background />
      <Navbar />

      <div className={styles.mainViewText}>
        <Header />
        <HomeText />
      </div>

      <h1>Hell,wd</h1>

      <Cursor />

    </div>
  )
}

export default Home
