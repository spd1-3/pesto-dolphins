import { useMemo } from 'react'
import LineChart from './LineChart'
import styles from '../styles/dashboard.module.css'

function DashboardMessagesChart() {
    return (
        <div className={`${styles.messageChartCard} blur`}>
            <LineChart />
        </div>
    )
}

export default DashboardMessagesChart
