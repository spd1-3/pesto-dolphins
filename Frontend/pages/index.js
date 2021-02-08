import Head from 'next/head'
import Footer from '../components/Footer'
import DashboardHeader from '../components/DashboardHeader'
import DashboardLeaderboard from '../components/DashboardLeaderboard'
import DashboardMessagesChart from '../components/DashboardMessagesChart'
import TotalMessages from '../components/TotalMessages'
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
                <div className={styles.secondColumn}>
                    <TotalMessages />
                    <DashboardMessagesChart />
                </div>
            </div>
            <Footer />
        </div>
    )
}
