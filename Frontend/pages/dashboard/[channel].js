import Head from 'next/head'
import axios from 'axios'
import Footer from '../../components/Footer'
import DashboardHeader from '../../components/DashboardHeader'
import DashboardLeaderboard from '../../components/DashboardLeaderboard'
import DashboardMessagesChart from '../../components/DashboardMessagesChart'
import TotalMessages from '../../components/TotalMessages'
import WinnerBoard from '../../components/WinnerBoard'
import styles from '../../styles/dashboard.module.css'
import DashboardTeam from '../../components/DashboardTeam'

export default function Dashboard({ channel }) {
    const sortedUsers = channel.users.sort(function (a, b) {
        return b.total_messages - a.total_messages }
    )
    return (
        <div className={styles.container}>
            <Head>
                <title>Pesto Dolphins Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <DashboardTeam
                    name={ channel.name }
                />
            </main>
            <div className={styles.components}>
                <DashboardLeaderboard
                    users={ sortedUsers }
                />
                <div className={styles.secondColumn}>
                    <TotalMessages
                        total={ channel.message_count }
                    />
                    <WinnerBoard
                        user={ sortedUsers[0] ? sortedUsers[0] : null}
                    />
                    <DashboardMessagesChart />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export async function getStaticPaths() {
    try {
        const res = await axios.get(process.env.DB_URI + '/channels')
        const channels = res.data
        const paths = channels.map((channel) => `/dashboard/${channel}`)
        return { paths, fallback: false }
    } catch (err) {
        console.log(err.message)
    }

}

export async function getStaticProps({ params }) {
    const res = await axios.get(process.env.DB_URI + '/channel/' + params.channel)
    const channel = res.data
    return { props: { channel }, revalidate: 1, }
}
