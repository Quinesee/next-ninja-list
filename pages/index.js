import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home | Ninja List</title>
      <meta name="description" content="Ninja list" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>lorem ipsum dolor sit amet</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  )
}
