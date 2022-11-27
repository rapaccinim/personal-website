import fs from 'fs';
import Link from 'next/link';
import {getPostObject} from "../utils/utils";

const Blog = ({posts}) => {
    return (
        <div>
            {posts.map(post => {
                const {slug, metadata} = post
                const {title, author, date, bannerImage, tags} = metadata

                return <article key={title}>
                    <Link
                        href={`/posts/${slug}`}
                        passHref
                    >
                        <h1>{title}</h1>
                    </Link>
                    <h3>{author}</h3>
                    <h3>{date}</h3>
                </article>
            })}
        </div>
    )
}
export default Blog;

export const getStaticProps = async () => {
    const files = fs.readdirSync('posts');
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { metadata } = getPostObject(readFile);
        return {
            slug,
            metadata,
        };
    });
    return {
        props: {
            posts,
        },
    };
}