import {micromark} from 'micromark'
import parse from 'html-react-parser';
import markdownPost from '../posts/test.md'

const Test = () => {

    const getPostObject = (markdownFile) => {
        // extract the metadata part from the markdown file and remove new line chars, tabs and back quotes
        const postArray = markdownFile.split("-----").slice(1);
        return {
            metadata: JSON.parse(postArray[0].replace(/[\n\t`]/g, '').trim()),
            content: postArray[1]
        }
        // const textMetaData = RegExp("---(.*)---", "s").exec(markdownFile)[1].replace(/[\n\t`]/g, '').trim();
    }

    const postObject = getPostObject(markdownPost);
    const metadata = postObject.metadata;
    const content = postObject.content;

    return (
        <div>
            <div>
                <p>Metadata</p>
                <div>
                    {Object.values(metadata).map( item => <p key={item.hash}>{item}</p>)}
                </div>
            </div>
            {parse(micromark(content))}
        </div>
    );
}
export default Test;