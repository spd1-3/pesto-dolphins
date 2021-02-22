import styles from '../styles/dashboard.module.css'

function DashboardHeader() {
    return (
        <div className={`${styles.card} blur`}>
            <h1 className={styles.title}>
                Welcome to{' '}
                <a
                    href="https://github.com/brentshierk/pesto-dolphins"
                    target="_blank"
                    rel="noopener noreferrer">
                        Pesto Dolphins
                </a>
            </h1>
        </div>
    )
}
export default DashboardHeader
