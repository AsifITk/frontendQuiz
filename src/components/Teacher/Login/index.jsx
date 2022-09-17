import React from 'react'
import styles from "./styles.module.css"

function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.card}>
                    <div className={styles.innerCard}>
                        <h1>Don't hurt Your Brain</h1>
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <button>Login</button>
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