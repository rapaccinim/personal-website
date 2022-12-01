import Image from "next/image";
import {DEFAULT_OG_PIC} from "../../config/config";
import styles from "./ErrorHandlingImage.module.css"
import {useState} from "react";

const ErrorHandlingImage = ({img, imgAlt}) => {
    const [imgSrc, setImgSrc] = useState(img || "");
    return(
        <div
            className={styles.imageContainer}
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
                alt={imgAlt}
            />
        </div>
    )
}
export default ErrorHandlingImage;