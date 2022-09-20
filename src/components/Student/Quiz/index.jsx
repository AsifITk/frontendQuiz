import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './styles.module.css'


function Quiz() {
    let location = useLocation();
    let questions = location.state.quiz;
    let [key, setKey] = useState(Object.keys(questions.question.questions)[0]);
    console.log(questions.question.questions)
    useEffect(() => {
        socket.on("next", (key) => {
            setKey(key)

        })

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.questionCard}>
                <div className={styles.timer}>Timer</div>
                <div className={styles.question}>{questions.question.questions[key].question}</div>
                <div className={styles.options}>
                    {/* <button className={styles.option}>Best Answer</button>
                    <button className={styles.option}>Best Answer</button>
                    <button className={styles.option}>not THe Answer</button>
                    <button className={styles.option}>Wrong Answer</button> */}
                    {Object.keys(questions.question.questions[key].answers).map((ans) => {
                        console.log(questions.question.questions[key].answers[ans]);

                        <button className={styles.option}>{questions.question.questions[key].answers[ans]}</button>


                    })}
                </div>
            </div>
        </div>
    )
}

export default Quiz