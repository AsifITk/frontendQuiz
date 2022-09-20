import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from './styles.module.css'
import socket from "../../../socket"
import { useNavigate } from 'react-router-dom';

function Join() {
    let [roomId, setRoomId] = useState();
    let [name, setName] = useState();

    let goto = useNavigate();

    useEffect(() => {

        socket.on("question", (question) => {

            goto("/student/quiz", { state: { quiz: question } })


        })
    }, []);



    return (

        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.logo}> <img src="/images/Quiz INN.svg" alt="" /></div>

                <div className={styles.pinDiv}>
                    <button className={styles.pinHead}>Game Pin</button>
                    <input type="text" className={styles.pin} onChange={
                        (e) => { setRoomId(() => e.target.value) }
                    } />
                    <button className={styles.pinHead}>Name</button>

                    <input type="text" className={styles.pin} onChange={
                        (e) => { setName(() => e.target.value) }
                    } />
                    <button className={styles.enter} onClick={() => {
                        socket.emit("joinQuiz", {
                            id: roomId,
                            name: name
                        })
                    }
                    } >Enter</button>
                </div>

            </div>
        </div>
    )
}

export default Join;