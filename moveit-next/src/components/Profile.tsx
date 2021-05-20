import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/td-chris.png" alt="profile image"/>

            <div>
                <strong>Christian Todesquine Dias</strong>
                <p>
                    <img src="icons/level.svg" alt="user level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}