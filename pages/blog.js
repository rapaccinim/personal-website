import fs from 'fs';
import {generateUUID, getPostObject, getSlug} from "../utils/utils";
import BlogArticle from "../components/blog-article";

const Blog = ({posts}) => {

    return (
        <section
            className="blog"
        >
            {posts.map(post => {
                const {slug, metadata} = post
                const {title, author, date, bannerImage, tags} = metadata
                return (
                    <BlogArticle
                        key={generateUUID()}
                        metadata={metadata}
                        slug={slug}
                    />
                )
            })}
        </section>
    )
}
export default Blog;

export const getStaticProps = async () => {
    const files = fs.readdirSync('posts');
    const posts = files.map((fileName) => {
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { metadata } = getPostObject(readFile);
        return {
            slug: getSlug(fileName),
            metadata,
        };
    });
    return {
        props: {
            posts,
        },
    };
}