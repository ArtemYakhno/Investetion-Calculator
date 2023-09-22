import styles from './Error.module.css'
const Error = (props) =>{
    return (<div className={styles.errorMessage}>
        {props.errorMessage}
    </div>)
}
export default Error