import {generateUUID} from "../utils/utils";
import Link from "next/link";

const BlogArticle = ({metadata, slug}) => {
    const {title, author, date, bannerImage, tags} = metadata
    return (
        <article>
            <div>
                {tags.map( tag => <span key={generateUUID()}>{tag}</span>)}
            </div>
            <Link
                href={`/posts/${slug}`}
            >
                <a>
                    <div>
                        <h2>{title}</h2>
                    </div>
                </a>
            </Link>
            <h3>{date}</h3>
        </article>
    )
}
export default BlogArticle;