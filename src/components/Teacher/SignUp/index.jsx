import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./styles.module.css"

function SignUp() {

    let [user, setUser] = useState({});
    let goto = useNavigate();

    let signup = async (user) => {
        const rawResponse = await fetch("http://localhost:8000/auth/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        console.log(rawResponse.status)
        const content = await rawResponse.json();
        if (rawResponse.status === 200) {

            localStorage.setItem('testObject', JSON.stringify(content));
            // goto("/teacher/login");

        }
        else {

            alert('wrong email/pass')
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.card}>
                    <div className={styles.innerCard}>
                        <h1>Let's enter the world of knowledge</h1>
                        <input type="text" placeholder="Name" onChange={(e) => {
                            setUser((prev) => { prev['name'] = e.target.value; return prev })
                        }} />
                        <input type="text" placeholder="Email" onChange={(e) => {
                            setUser((prev) => { prev['email'] = e.target.value; return prev })
                        }} />
                        <input type="password" placeholder="Password" onChange={(e) => {
                            setUser((prev) => { prev['password'] = e.target.value; return prev })
                        }} />
                        <input type="password" placeholder="Confirm Password" />
                        <button onClick={() => signup(user)}>Signup</button>
                        <button onClick={() => goto("/teacher/login")}>Login</button>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.logo}><img src="/images/Quiz INN.svg" alt="" /></div>

            </div>
        </div>
    )
}

export default SignUp;