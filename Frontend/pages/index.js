import Head from 'next/head'
import styles from '../styles/dahsboard.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
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
            </main>
            <footer>
                <a
                    href="https://github.com/brentshierk/pesto-dolphins"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Pesto Dolphins
                </a>
            </footer>
      </div>
    )
}
