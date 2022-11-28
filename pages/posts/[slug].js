import fs from "fs";
import {generateUUID, getPostObject, getSlug} from "../../utils/utils";
import parse from "html-react-parser";
import {micromark} from "micromark";
import HeadSeo from "../../components/head-seo";
import {DEFAULT_OG_PIC, POSTS_FOLDER_NAME} from "../../config/config";
import Image from "next/image";
import {useEffect, useState} from "react";

const Post = ({metadata, content, postsFolderAndSlug}) => {
    const {title, author, date, bannerImage, tags} = metadata
    const [imgSrc, setImgSrc] = useState(bannerImage || "");

    // useEffect(() => {
    //     setImgSrc(bannerImage);
    // }, [bannerImage]);

    const seoData = {
        title: title,
        description: "Blog article",
        pageURL: postsFolderAndSlug
    }
    return (
        <>
            <HeadSeo
                seoData={seoData}
            />
            <article>
                <div
                    className="image-container"
                >
                <Image
                    src={imgSrc || DEFAULT_OG_PIC}
                    layout="fill"
                    objectFit="contain"
                    onLoadingComplete={(result) => {
                        if (result.naturalWidth === 0) {
                            // Broken image
                            setImgSrc(DEFAULT_OG_PIC);
                        }
                    }}
                    onError={ () => setImgSrc(DEFAULT_OG_PIC) }
                />
                </div>
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