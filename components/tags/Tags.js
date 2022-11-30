import {generateUUID} from "../../utils/utils";
import styles from "./Tags.module.css"

const Tags = ({tags}) => {
    return(
        <div
            className={styles.tagsContainer}
        >
            {tags.map( tag => <div className={styles.tag} key={generateUUID()}>{tag}</div>)}
        </div>
    )
}
export default Tags;