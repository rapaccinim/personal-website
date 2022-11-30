import {generateUUID} from "../../utils/utils";
import Link from "next/link";
import styles from "./BlogArticlePreview.module.css"

const BlogArticlePreview = ({metadata, slug}) => {
    const {title, author, date, bannerImage, tags} = metadata
    return (
        <article
            className={styles.article}
        >
            <div
                className={styles.tags}
            >
                {tags.map( tag => <span key={generateUUID()}>{tag}</span>)}
            </div>
            <Link
                href={`/posts/${slug}`}
            >
                <a>
                    <div>
                        <h2
                            className={styles.title}
                        >
                            {title}
                        </h2>
                    </div>
                </a>
            </Link>
            <span>
                {date}
            </span>
        </article>
    )
}
export default BlogArticlePreview;