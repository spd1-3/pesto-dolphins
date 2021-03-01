import styles from '../styles/dashboard.module.css'

function TotalMessages({ total }) {
    return (
        <div className={styles.totalMessagesContainer}>
            <div className={`${styles.messageChildDiv} blur`}>
                <h1 className={styles.textLarge}>
                    { total }
                </h1>
            </div>
            <div className={`${styles.messageDiv} blur`}>
                <h1 className={styles.textSmall}>
                    Messages
                </h1>
            </div>
        </div>
    )
}
export default TotalMessages
