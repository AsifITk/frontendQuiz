import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: 10,

    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#ff7657",
    border: "2px solid #d663206a",
    boxShadow: 24,
    p: 10,
    fontFamily: "Impact",
};
const btnStyle = {
    position: "absolute",
    borderRadius: 10,
    top: "90%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 50,
    bgcolor: "#ff765778",
    border: "2px solid #d663206a",
    boxShadow: 24,
    p: 2,
    fontFamily: "Impact",
};

function AddQuestions() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let [quiz, setQuiz] = useState("");

    let [currTeacher, setTeacher] = useState(undefined);
    let teacherId = JSON.parse(localStorage.getItem("testObject")).teacher._id;
    let goto = useNavigate();




    let addQuiz = async (name) => {
        console.log(teacherId, name);
        let data = {
            name: name,
            teacher: teacherId
        }

        const rawResponse = await fetch("http://localhost:8000/quiz/create", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log(rawResponse.status)
        const content = await rawResponse.json();
        if (rawResponse.status == 200) {

            localStorage.setItem('quiz', JSON.stringify(content));
            console.log(content);
            getData(teacherId);

            // goto("/teacher/addquestion");

        }
        else {

            alert('wrong email/pass')
        }
        setQuiz('')
    }
    let deleteQuiz = async (id) => {
        console.log(id);
        let data = {
            id: id,

        }

        const rawResponse = await fetch("http://localhost:8000/quiz/delete", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log(rawResponse.status)
        const content = await rawResponse.json();
        if (rawResponse.status == 200) {

            localStorage.setItem('quiz', JSON.stringify(content));
            console.log(content);
            getData(teacherId);

            // goto("/teacher/addquestion");

        }
        else {

            alert('wrong email/pass')
        }
        setQuiz('')
    }
    let getData = async (id) => {
        let sendData = { id: id }
        let data = await fetch("http://localhost:8000/auth/teacher", {
            method: "Post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sendData),
        });
        const content = await data.json();
        console.log(content);
        setTeacher(() => content)
        if (data.status == 200) {


            console.log(content);
            // goto("/teacher/addquestion");

        }
        else {

            alert('wrong id')
        }


    }

    useEffect(() => {

        getData(teacherId);

    }, [])


    if (currTeacher == undefined) {
        return (<Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
        </Stack>)
    }

    return (
        <div className={styles.container}>
            {/* modal mui */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField
                        id="standard-basic"
                        label="Quiz name"
                        variant="standard"
                        value={quiz}
                        onChange={(e) => {
                            setQuiz(() => e.target.value);
                        }}
                    />

                    <Button variant="outlined" sx={btnStyle} onClick={
                        () => addQuiz(quiz)
                    }>
                        ADD
                    </Button>
                </Box>
            </Modal>
            {/* modal mui */}

            <div className={styles.header}>
                <div className={styles.logo}><img src="/images/Group 9.svg" alt="" /></div>
                <div className={styles.nav}>
                    <div className={styles.allQuizzes}>All Quizzes</div>
                    <div className={styles.reoprts}>Reports</div>
                </div>
                <button className={styles.logout}>Log Out</button>
            </div>

            <div className={styles.allQuiz}>All Quizzes</div>

            <div className={styles.questions}>

                {currTeacher.quizzes.map(quiz => {
                    return (<div className={styles.question} key={quiz._id}>
                        <div className={styles.left}>
                            <div className={styles.title}>
                                <div className={styles.icon}><img src="/images/🦆 icon _database_.svg" alt="" /></div>
                                <div className={styles.name}>{quiz.name}</div>
                            </div>
                            <div className={styles.teacher}>
                                <div className={styles.icon}><img src="/images/🦆 icon _user circle_.svg" alt="" /></div>
                                <div className={styles.name}>{currTeacher.name}</div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <button className={styles.icon} onClick={() => {
                                deleteQuiz(quiz._id);
                                // goto("/teacher/addquestion

                            }}><img src="/images/🦆 icon _trash_.svg" alt="" /></button>
                            <button className={styles.edit} onClick={() => { goto("/teacher/editquestion", { state: quiz }) }}>Edit</button>
                            {/* navigate('/other-page', { state: { username: 'user', password: '696' } }); */}
                            <button className={styles.start}>Start</button>
                        </div>
                    </div>)

                })}

                <button className={styles.newQuestion} onClick={handleOpen}>
                    Add new
                </button>
            </div>
        </div >
    );
}

export default AddQuestions;
