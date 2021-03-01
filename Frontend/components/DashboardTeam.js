import styles from '../styles/dashboard.module.css'

function DashboardTeam({ name }) {
  return (
    <div>
      <div className={`${styles.teamChildCard} blur`}>
        <h1 className={styles.title}>
          <a
            href="https://github.com/brentshierk/pesto-dolphins"
            target="_blank"
            rel="noopener noreferrer">
              { name }
          </a>
          {' '} Dashboard
        </h1>
      </div>
      <div className={`${styles.teamCard} blur`}>
        <img
          src="/team-profile.jpg"
          alt="Team Profile Image"
          width={200}
          height={200}
          className={styles.profileImg}
        />
      </div>
    </div>
  )
}
export default DashboardTeam
