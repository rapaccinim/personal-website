import fs from 'fs';
import {generateUUID, getPostObject, getSlug} from "../utils/utils";
import BlogArticle from "../components/blog-article";
import HeadSeo from "../components/head-seo";
import {POSTS_FOLDER_NAME} from "../config/config";

const Blog = ({posts}) => {
    const seoData = {
        title: "Blog",
        description: "All my technical blog articles",
        pageURL: "blog"
    }
    return (
        <>
            <HeadSeo
                seoData={seoData}
            />
            <section
                className="blog"
            >
                {posts
                    .sort((post, anotherPost) => new Date(anotherPost.metadata.date) - new Date(post.metadata.date))
                    .map(post =>
                        <BlogArticle
                            key={generateUUID()}
                            metadata={post.metadata}
                            slug={post.slug}
                        />
                    )}
            </section>
        </>
    )
}
export default Blog;

export const getStaticProps = async () => {
    const files = fs.readdirSync(POSTS_FOLDER_NAME);
    const posts = files.map((fileName) => {
        const readFile = fs.readFileSync(`${POSTS_FOLDER_NAME}/${fileName}`, 'utf-8');
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