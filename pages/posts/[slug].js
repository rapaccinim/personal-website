import fs from "fs";
import {generateUUID, getPostObject, getSlug} from "../../utils/utils";
import parse from "html-react-parser";
import {micromark} from "micromark";
import HeadSeo from "../../components/head-seo";
import {POSTS_FOLDER_NAME} from "../../config/config";
import ErrorHandlingImage from "../../components/errorHandlingImage/ErrorHandlingImage";

const Post = ({metadata, content, postsFolderAndSlug}) => {
    const {title, author, date, bannerImage, bannerImageAlt, tags} = metadata
    const seoData = {
        title: title,
        description: "Blog article",
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
                <div>
                    {parse(micromark(content))}
                </div>
            </article>
            <div>
                {Object.entries(metadata).map( ([key, value]) =>
                    <p key={generateUUID(key)}>{value}</p>
                )}
            </div>
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