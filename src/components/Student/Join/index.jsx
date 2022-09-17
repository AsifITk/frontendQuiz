import React from 'react'
import styles from './styles.module.css'

function Join() {
    return (

        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.logo}> <img src="/images/Quiz INN.svg" alt="" /></div>

                <div className={styles.pinDiv}>
                    <button className={styles.pinHead}>Game Pin</button>
                    <input type="text" className={styles.pin} />
                    <button className={styles.enter}>Enter</button>
                </div>

            </div>
        </div>
    )
}

export default Join;