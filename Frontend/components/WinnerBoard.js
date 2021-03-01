import styles from '../styles/dashboard.module.css'

function WinnerBoard({ user }) {
    if (!user) {
        user = {
            name: 'Johnny Doe',
            total_messages: 156,
            total_reactions: 231
        }
    }
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
                    <h1 className={styles.textLeft}>{ user.name }</h1>
                    <div className={styles.winnerBoardRow}>
                        <img
                            src="/chatbox-ellipses.png"
                            alt="ChatboxIcon"
                            width={20}
                            height={20}
                            className={styles.winnerBoardImg}
                        />
                        <p className={styles.text}>
                        {`Messages: ${ user.total_messages }`}
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
                            {`Reactions: ${ user.total_reactions ? user.total_reactions : 0}`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WinnerBoard
