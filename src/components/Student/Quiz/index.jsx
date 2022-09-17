import React from 'react'
import styles from './styles.module.css'

function Quiz() {
    return (
        <div className={styles.container}>
            <div className={styles.questionCard}>
                <div className={styles.timer}>Timer</div>
                <div className={styles.question}>Q1: What is a question without answers?</div>
                <div className={styles.options}>
                    <button className={styles.option}>Best Answer</button>
                    <button className={styles.option}>Best Answer</button>
                    <button className={styles.option}>not THe Answer</button>
                    <button className={styles.option}>Wrong Answer</button>
                </div>
            </div>
        </div>
    )
}

export default Quiz