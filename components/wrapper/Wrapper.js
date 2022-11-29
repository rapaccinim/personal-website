import styles from "./Wrapper.module.css";

const Wrapper = ({children, type}) => {
    console.log("Type: ", type)
    return(
        <div
            className={styles.wrapper}
        >
            {children}
        </div>
    )
}
export default Wrapper;