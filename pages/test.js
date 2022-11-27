import {micromark} from 'micromark'
import parse from 'html-react-parser';
import markdownPost from '../posts/test.md';
import {generateUUID} from "../utils/utils";

const Test = () => {

    const getPostObject = (markdownFile) => {
        // extract the metadata part from the markdown file and remove new line chars, tabs and back quotes
        const postArray = markdownFile.split("-----").slice(1);
        return {
            metadata: JSON.parse(postArray[0].replace(/[\n\t`]/g, '').trim()),
            content: postArray[1]
        }
    }

    const postObject = getPostObject(markdownPost);
    const metadata = postObject.metadata;
    const content = postObject.content;

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
    );
}
export default Test;