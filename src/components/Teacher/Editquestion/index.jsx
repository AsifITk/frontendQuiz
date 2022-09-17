import React from 'react'
import styles from './styles.module.css'

function EditQuestion() {
    return (
        <div className={styles.container}>

            < div className={styles.header}>
                < div className={styles.logo}><img src="/images/Group 9.svg" alt="" /></div>
                < div className={styles.nav}>
                    < div className={styles.allQuizzes}>All Quizzes</div>
                    < div className={styles.reoprts}>Reports</div>
                </div >
                <button className={styles.logout}>Log Out</button>
            </div >

            <div className={styles.editContainer}>

                < div className={styles.left}>
                    < h3 > Questions</h3 >

                    <div className={styles.questions}>
                        < div className={styles.question}>
                            < div className={styles.text}><span>Q1</span> this is a question</div>
                            < div className={styles.questionBtn}>
                                < button > 2</button >
                                <button className={styles.delete}><img src="/images/icon _trash_.svg" alt="" /> </button>
                            </div >
                        </div >

                        <div className={styles.question}>
                            < div className={styles.text}><span>Q1</span> this is a question</div>
                            < div className={styles.questionBtn}>
                                < button > 2</button >
                                <button className={styles.delete}><img src="/images/icon _trash_.svg" alt="" /></button>
                            </div >
                        </div >
                        <div className={styles.question}>
                            < div className={styles.text}><span>Q1</span> this is a question</div>
                            < div className={styles.questionBtn}>
                                < button > 2</button >
                                <button className={styles.delete}><img src="/images/icon _trash_.svg" alt="" /></button>
                            </div >
                        </div >
                    </div >
                </div >
                <div className={styles.right}>

                    < div className={styles.questionInput}><textarea type="text">What is a question you might ask?</textarea>
                    </div >
                    <div className={styles.addImg}><button className={styles.add} > add</button ></div >
                    <div className={styles.answers}>
                        < div className={`${styles.ans} `}><textarea type="text">What is a question you might ask?</textarea></div>
                        < div className={`${styles.ans} `}><textarea type="text">What is a question you might ask?</textarea></div>
                        < div className={`${styles.ans} `}> <textarea type="text">What is a question you might ask?</textarea></div>
                        < div className={`${styles.ans} `}> <textarea type="text">What is a question you might ask?</textarea></div>
                    </div >









                </div >
            </div >


        </div >
    )
}

export default EditQuestion