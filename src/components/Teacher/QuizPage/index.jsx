import React, { useEffect, useRef, useState } from 'react'
import styles from "./styles.module.css";
import { useLocation, useOutletContext } from "react-router-dom";
import socket from '../../../socket';

function Quizpage() {
    let location = useLocation();
    let questions = location.state.question;
    let roomId = location.state.roomId;
    console.log(questions);
    let count = useRef(0);
    let [key, setKey] = useState(Object.keys(questions.questions)[count.current]);
    console.log(questions.questions)
    // const [currQuestion] = useOutletContext();
    // console.log("************current queston**************", currQuestion)
    // console.log(currQuestion)

    useEffect(() => {


    }, [])




    return (
        <div className={styles.right}>
            <div className={styles.questionInput}>
                <div>{questions.questions[key].question}</div>
            </div>
            <div className={styles.addImg}>
                <button className={styles.add}> add</button>
            </div>
            <div className={styles.answers}>
                <div className={`${styles.ans} `}>
                    <textarea type="text" value={`good answer`}> </textarea>
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
                <button onClick={() => {
                    count.current = count.current + 1;
                    setKey(Object.keys(questions.questions)[count.current])
                    socket.emit("next", {
                        roomId: roomId,
                        key: key
                    })
                }}>Next</button>
            </div>
        </div>
    )
}

export default Quizpage;