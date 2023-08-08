import Link from "next/link";
import styles from "./BlogArticlePreview.module.css"
import Tags from "../tags/Tags";

const BlogArticlePreview = ({metadata, slug}) => {
    const {title, date, tags} = metadata
    return (
        <article
            className={styles.article}
        >
            <Tags
                tags={tags}
            />
            <Link
                href={`/posts/${slug}`}
            >
                <div>
                    <h2
                        className={styles.title}
                    >
                        {title}
                    </h2>
                </div>
            </Link>
            <span>
                {date}
            </span>
        </article>
    )
}
export default BlogArticlePreview;