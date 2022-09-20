import React, { useEffect, useState } from "react";
import socket from "../../../socket";
import styles from "./styles.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";


function Waiting() {
    const location = useLocation();
    let roomId = location.state.roomId;
    let quiz = location.state.quiz;
    console.log("state👻👻", roomId);
    console.log("Quiz👻👻", quiz);
    let [students, setStudents] = useState([]);
    let [quizData, setQuiz] = useState(quiz);
    let goto = useNavigate();





    useEffect(() => {
        // !create a room
        socket.on("rooms", ({ rooms }) => {
            console.log(rooms);
        });
        // !joineed students
        socket.off("newStudent").on("newStudent", ({ id, name }) => {
            console.log(id, name);
            setStudents((prev) => {
                prev.push(name);
                return prev.slice();
            });
            console.log(students);
        });



        //!
        socket.on("question", ({ question }) => {
            console.log("running from socket emmiter")
            goto("/teacher/quiz", { state: { question: question, roomId: roomId } })
        })

    }, []);



    let giveQuestions = (quiz) => {
        console.log("clicked")

        socket.emit("startQuiz", {
            roomId: roomId,
            question: quiz
        })

    }





    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="images/Quiz INN.svg" alt="" />
            </div>
            <div className={styles.watingCard}>
                <div className={styles.left}>
                    <button className={styles.leftHead}>Players Joined</button>
                    {/* <button className={styles.userName}>
                        Mr. bad
                    </button>
                     */}
                    {students.map((student, idx) => {
                        return (
                            <button key={idx} className={styles.userName}>
                                {student}
                            </button>
                        );
                    })}
                </div>
                <div className={styles.right}>
                    <div className={styles.qrCode}>
                        <QRCode value={roomId} />
                    </div>
                    <button className={styles.pinText}>Game Pin</button>
                    <button className={styles.pin}>{roomId}</button>
                </div>
            </div>
            <div className={styles.startDiv}>
                <button
                    className={styles.startBtn}
                    onClick={(e) => {
                        giveQuestions(quiz);

                    }}
                >
                    Start
                </button>{" "}
            </div>
        </div>
    );
}

export default Waiting;
