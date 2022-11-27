import fs from "fs";
import {generateUUID, getPostObject, getSlug} from "../../utils/utils";
import parse from "html-react-parser";
import {micromark} from "micromark";

const Post = ({metadata, content}) => {
    const {title, author, date, bannerImage, tags} = metadata
    return (
        <div className="main-container">
            <div className="wrapper">
                <div>
                    {Object.entries(metadata).map( ([key, value]) =>
                        <p key={generateUUID(key)}>{value}</p>
                    )}
                </div>
                <div>
                    {parse(micromark(content))}
                </div>
            </div>
        </div>
    )
}
export default Post;

export const getStaticPaths = async () => {
    const files = fs.readdirSync("posts");
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
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { metadata, content } = getPostObject(fileName);
    return {
        props: {
            metadata,
            content,
        },
    };
}