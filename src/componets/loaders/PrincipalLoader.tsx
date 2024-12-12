import styles from '@/styles/loaders/PrincipalLoader.module.scss'

export default function PrincipalLoader(){
    return(
        <div className={styles.PrincipalLoader}>
            <div className={styles.PrincipalLoader_container}>
                <div className={styles.loader}></div>
            </div>
        </div>
    )
}