import Head from 'next/head'
import Footer from '../components/Footer'
import DashboardHeader from '../components/DashboardHeader'
import styles from '../styles/dashboard.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pesto Dolphins Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <DashboardHeader />
            </main>
            <Footer />
      </div>
    )
}
