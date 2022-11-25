import {micromark} from 'micromark'
import parse from 'html-react-parser';
import postText from '../posts/test.md'

const Test = () => {
    return (
        <div>
            {parse(micromark(postText))}
        </div>
    );
}
export default Test;