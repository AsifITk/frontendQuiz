import React from 'react'
import styles from "./styles.module.css"

function SignUp() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.card}>
                    <div className={styles.innerCard}>
                        <h1>Let's enter the world of knowledge</h1>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <input type="text" placeholder="Confirm Password" />
                        <button>Signup</button>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.logo}><img src="images/Quiz INN.svg" alt="" /></div>

            </div>
        </div>
    )
}

export default SignUp;