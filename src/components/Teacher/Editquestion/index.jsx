import React, { useState } from "react";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import TextField from '@mui/material/TextField';
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: 10,

    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#665C84",
    color: "#234e39",
    border: "2px solid #665c84a9",
    boxShadow: 24,
    p: 10,
    fontFamily: "Impact",
};
function EditQuestion() {
    const location = useLocation();

    let [question, setQuestion] = useState({ answers: {} });

    let [currQuiz, setCurrQuiz] = useState(location.state);
    let [currQuestion, setCurrQuestion] = useState(currQuiz.questions[Object.keys(currQuiz.questions)[0]]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let addQuestion = async (question) => {
        question['quiz'] = (location.state._id);

        console.log(location.state._id);
        console.log(question);
        const rawResponse = await fetch("http://localhost:8000/question/add", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(question),
        });
        console.log(rawResponse.status)
        const content = await rawResponse.json();
        if (rawResponse.status == 200) {

            console.log(content);


        }
        else {

            alert('wrong email/pass')
        }
    }



    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src="/images/Group 9.svg" alt="" />
                </div>
                <div className={styles.nav}>
                    <div className={styles.allQuizzes}>All Quizzes</div>
                    <div className={styles.reoprts}>Reports</div>
                </div>
                <button className={styles.logout}>Log Out</button>
            </div>

            <div className={styles.editContainer}>
                <div className={styles.left}>
                    <h3> Questions</h3>
                    <div className={styles.questions}>
                        {Object.keys(currQuiz.questions).map(function (key) {
                            return (
                                <div
                                    className={styles.question}
                                    onClick={() => {
                                        // console.log("Running");
                                        setCurrQuestion(() => currQuiz.questions[key]);
                                    }}
                                >
                                    <div className={styles.text}>
                                        <span>Q1</span> {currQuiz.questions[key].question}
                                    </div>
                                    <div className={styles.questionBtn}>
                                        <button className={styles.count}> 👻</button>
                                        <button className={styles.delete}>
                                            <img src="/images/icon _trash_.svg" alt="" />{" "}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                        <Button onClick={handleOpen} variant="outlined" sx={{ color: { color: '#04040c' } }}>Add Question</Button>
                        {/* modal */}
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <TextField id="standard-basic" label="Question" variant="standard" sx={{ input: { color: '#ff7657' }, label: { color: '#ff7657' } }}
                                    onChange={(e) => {
                                        setQuestion((prev) => {
                                            prev["question"] = e.target.value;
                                            return prev;
                                        })
                                    }}
                                />
                                <TextField id="standard-basic" label="Correct Ans" variant="standard" sx={{ input: { color: '#ff7657' }, label: { color: '#ff7657' } }}
                                    onChange={(e) => {
                                        setQuestion((prev) => {
                                            prev["answers"][true] = e.target.value;
                                            return prev;
                                        })
                                    }}
                                />
                                <TextField id="standard-basic" label="Choice 1" variant="standard" sx={{ input: { color: '#ff7657' }, label: { color: '#ff7657' } }}
                                    onChange={(e) => {
                                        setQuestion((prev) => {
                                            prev["answers"][false] = e.target.value;
                                            return prev;
                                        })
                                    }}
                                />
                                <TextField id="standard-basic" label="Choice 2" variant="standard" sx={{ input: { color: '#ff7657' }, label: { color: '#ff7657' } }}
                                    onChange={(e) => {
                                        setQuestion((prev) => {
                                            prev["answers"][false] = e.target.value;
                                            return prev;
                                        })
                                    }}
                                />
                                <TextField id="standard-basic" label="Choice 3" variant="standard" sx={{ input: { color: '#ff7657' }, label: { color: '#ff7657' } }}
                                    onChange={(e) => {
                                        setQuestion((prev) => {
                                            prev["answers"][false] = e.target.value;
                                            return prev;
                                        })
                                    }}
                                />
                                <Button variant="outlined" sx={{ color: { color: '#04040c' } }} onClick={() => addQuestion(question)} >Add Question</Button>

                            </Box>
                        </Modal>
                        {/* modal */}
                    </div>
                </div>
                <Outlet context={[currQuestion]} />
            </div>
        </div>
    );
}

export default EditQuestion;
