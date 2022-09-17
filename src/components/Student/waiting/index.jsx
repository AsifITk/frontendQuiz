import React from 'react'
import styles from './styles.module.css';
function Waiting() {
    return (
        <div className={styles.container}>
            <div className={styles.waitingCard}>
                <div className={styles.logo}><img src="/images/Quiz INN.svg" alt="" /></div>
                <div className={styles.innerCard}>
                    <div className={styles.wating}>Waiting For Other Players</div>
                    <div className={styles.choice}>B</div>
                    <div className={styles.podium}>Your Choice is on the Podium</div>
                </div>
            </div>
        </div>

    )
}

export default Waiting