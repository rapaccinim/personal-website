import Head from "next/head";
import {DEFAULT_OG_PIC, PRODUCTION_URL} from "../config/config";

const HeadSEO = ({seoData}) => {
    const {title, description, pageURL, imageURL} = seoData;
    return (
        <Head>
            <title>{`${title} - Marco Rapaccini - Web & Product Dev` }</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description}  />
            <meta property="og:url" content={PRODUCTION_URL + pageURL} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={PRODUCTION_URL + (imageURL || DEFAULT_OG_PIC)} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
export default HeadSEO;