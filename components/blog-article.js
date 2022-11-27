import {generateUUID} from "../utils/utils";
import Link from "next/link";

const BlogArticle = ({metadata, slug}) => {
    const {title, author, date, bannerImage, tags} = metadata
    return (
        <article>
            <div
                className="tags"
            >
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
            <span>{date}</span>
        </article>
    )
}
export default BlogArticle;