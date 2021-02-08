import styles from '../styles/dashboard.module.css'

function TotalMessages() {
  return (
    <div className={`${styles.messageDiv} blur`}>
      <div className={`${styles.messageChildDiv} blur`}>
        <h1 className={styles.textLarge}>
          1337
        </h1>
      </div>
      <h1 className={styles.textSmall}>
        Messages
      </h1>
    </div>
  )
}
export default TotalMessages