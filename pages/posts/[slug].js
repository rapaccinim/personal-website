import fs from "fs";
import {getPostObject, getSlug} from "../../utils/utils";
import parse from "html-react-parser";
import {micromark} from "micromark";
import HeadSeo from "../../components/head-seo";
import {POSTS_FOLDER_NAME} from "../../config/config";
import ErrorHandlingImage from "../../components/errorHandlingImage/ErrorHandlingImage";
import Tags from "../../components/tags/Tags";
import styles from "../../styles/Slug.module.css"

const Post = ({metadata, content, postsFolderAndSlug}) => {
    const {title, date, bannerImage, bannerImageAlt, tags, description} = metadata
    const seoData = {
        title: title,
        description: description,
        pageURL: postsFolderAndSlug,
        imageURL: bannerImage
    }
    return (
        <>
            <HeadSeo
                seoData={seoData}
            />
            <article>
                <ErrorHandlingImage
                    img={bannerImage}
                    imgAlt={bannerImageAlt}
                />
                <div
                    className={styles.metadata}
                >
                    <div
                        className={styles.date}
                    >
                        {date}
                    </div>
                    <Tags
                        tags={tags}
                    />
                </div>
                <div>
                    {parse(micromark(content))}
                </div>
            </article>
        </>
    )
}
export default Post;

export const getStaticPaths = async () => {
    const files = fs.readdirSync(POSTS_FOLDER_NAME);
    const paths = files.map((fileName) => ({
        params: {
            slug: getSlug(fileName),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async ({ params: { slug } }) => {
    const postsFolderAndSlug = `${POSTS_FOLDER_NAME}/${slug}`;
    const fileName = fs.readFileSync(`${postsFolderAndSlug}.md`, 'utf-8');
    const { metadata, content } = getPostObject(fileName);
    return {
        props: {
            metadata,
            content,
            postsFolderAndSlug
        },
    };
}