import React from 'react'
import styles from "./styles.module.css";
import { useOutletContext } from "react-router-dom";

function Edit() {
    const [currQuestion] = useOutletContext();
    console.log("************current queston**************", currQuestion)
    console.log(currQuestion)
    return (
        <div className={styles.right}>
            <div className={styles.questionInput}>
                <textarea type="text" value={currQuestion.question} > </textarea>
            </div>
            <div className={styles.addImg}>
                <button className={styles.add}> add</button>
            </div>
            <div className={styles.answers}>
                <div className={`${styles.ans} `}>
                    <textarea type="text" value={`good answer`}> question you might ask?</textarea>
                </div>
                <div className={`${styles.ans} `}>
                    <textarea type="text" value={`good answer`}> </textarea>
                </div>
                <div className={`${styles.ans} `}>
                    {" "}
                    <textarea type="text" value={`good answer`}> </textarea>
                </div>
                <div className={`${styles.ans} `}>
                    {" "}
                    <textarea type="text" value={`good answer`}> </textarea>
                </div>
            </div>
        </div>
    )
}

export default Edit;