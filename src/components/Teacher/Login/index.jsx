import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./styles.module.css"

function Login() {
    let [user, setUser] = useState({});
    let goto = useNavigate();

    let login = async (user) => {
        const rawResponse = await fetch("http://localhost:8000/auth/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        console.log(rawResponse.status)
        const content = await rawResponse.json();
        if (rawResponse.status == 200) {

            localStorage.setItem('testObject', JSON.stringify(content));
            goto("/teacher/addquiz");

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
                        <h1>Don't hurt Your Brain</h1>
                        <input type="email" placeholder="Email" onChange={(e) => {
                            setUser((prev) => { prev['email'] = e.target.value; return prev })
                        }} />
                        <input type="password" placeholder="Password" onChange={(e) => {
                            setUser((prev) => {
                                prev["password"] = e.target.value;
                                return prev;
                            })
                        }} />
                        <button onClick={() => login(user)}>Login</button>
                        <button onClick={() => goto("/teacher/signup")}>Signup</button>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.logo}><img src="/images/Quiz INN.svg" alt="" /></div>
                {/* <div className={styles.blob}><img src="images/Vector.svg" alt="" /></div> */}
            </div >
        </div >
    )
}

export default Login;