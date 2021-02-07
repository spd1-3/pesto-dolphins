import Head from 'next/head'
import Footer from '../components/Footer'
import DashboardHeader from '../components/DashboardHeader'
import DashboardLeaderboard from '../components/DashboardLeaderboard'
import DashboardMessagesChart from '../components/DashboardMessagesChart'
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
            <div className={styles.components}>
                <DashboardLeaderboard />
                {/* Placing this duplicate here until other components are added in order to display consistent layout */}
                <DashboardMessagesChart />
            </div>
            <Footer />
      </div>
    )
}
