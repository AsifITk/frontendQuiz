import React from 'react'
import styles from "./styles.module.css"

function AddQuestions() {
    return (

        <div className={styles.container}>


            <div className={styles.header}>
                <div className={styles.logo}></div>
                <div className={styles.nav}>
                    <div className={styles.allQuizzes}>All Quizzes</div>
                    <div className={styles.reoprts}>Reports</div>
                </div>
                <button className={styles.logout}>Log Out</button>
            </div>

            <div className={styles.allQuiz}>All Quizzes</div>

            <div className={styles.questions}>
                <div className={styles.question}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            <div className={styles.icon}></div>
                            <div className={styles.name}>Mern Test</div>
                        </div>
                        <div className={styles.teacher}>
                            <div className={styles.icon}></div>
                            <div className={styles.name}>MR. Great teacher</div>
                        </div>
                    </div>
                    <div className="right">
                        <button className="icon"></button>
                        <button className="edit">Edit</button>
                        <button className="start">Start</button>
                    </div>
                </div>

                <button className="newQuestion">Add new</button>

            </div>
        </div>

    )
}

export default AddQuestions;