import Head from 'next/head'
import Footer from '../components/Footer'
import DashboardHeader from '../components/DashboardHeader'
import DashboardLeaderboard from '../components/DashboardLeaderboard'
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
                {/* Placing this duplicate here until other components are added in order to display consistent layout */}
                <TotalMessages />
                <DashboardLeaderboard />
            </div>
            <Footer />
        </div>
    )
}
