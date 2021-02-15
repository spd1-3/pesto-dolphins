import styles from '../styles/dashboard.module.css'

function WinnerBoard() {
  return (
    <div>
      <div className={`${styles.trophyChildDiv} blur`}>
        <img
          src="/trophy.png"
          alt="TrophyIcon"
          width={50}
          height={50}
        />
      </div>
      <div className={`${styles.winnerBoardContainer} blur`}>
        <div className={styles.winnerBoardArea}>
          <h1 className={styles.textLeft}>Johnny Doe</h1>
          <div className={styles.winnerBoardRow}>
            <img 
              src="/chatbox-ellipses.png"
              alt="ChatboxIcon"
              width={20}
              height={20}
              className={styles.winnerBoardImg}
            />
            <p className={styles.text}>
              Messages: 156
            </p>
          </div>
          <div className={styles.winnerBoardRow}>
            <img 
              src="/heart.png"
              alt="HeartIcon"
              width={20}
              height={20}
              className={styles.winnerBoardImg}
            />
            <p className={styles.text}>
              Reactions: 231 
            </p>
          </div>
        </div>
      </div>
    </div>
  ) 
}
export default WinnerBoard
