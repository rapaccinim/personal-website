/**
 * Just an experimental thing. Code is awful, but it could be a good starting point.
 * ~~~
 * Adrian in this LinkedIn post
 * https://www.linkedin.com/posts/adrian-%F0%9F%9F%A3-b-b52348181_can-i-send-react-code-with-an-api-call-to-activity-7008029507576082432-fmo6/?utm_source=share&utm_medium=member_desktop
 * expressed the following requirements:
 * "Can I send React code with an api call to be injected in a React application running on the server?
 * Not using tunneling and development in cloud from browser as Ghithub Codespace for example,
 * but just an api call with the code as string in form data to be then injected in a running React app.
 * I did not try yet on my own, just asking if someone has any idea about how it can be done"
 * ~~~
 * The following is just a possible initial implementation.
 *
 * In this case, the 'code' to be injected (that generally is a dangerous operation,
 * especially if sources are not trusted/owned) is stored in a GitHub Gist markdown file.
 */

import {useEffect, useState} from "react";

const Adrian = () => {
    const [codeToBeInjected, setCodeToBeInjected] = useState("");

    const getCleanGist = async () => {
        try {
            const res = await fetch(` https://api.github.com/gists/50fb48f94f7710684abc1439449b4d05`);
            const data = await res.json();
            console.log(`data from GitHub`);
            const gist = Object.entries(data.files)[0][1].content;
            const cleanString = gist.replace(/`/g, '')
            console.log(cleanString);
            return cleanString;
        } catch (err) {
            console.log(err);
        }
    }

    useEffect( () => {
        getCleanGist()
            .then( gist => setCodeToBeInjected(gist))
    }, [])

    const renderStuff = () => {
       const f = new Function(codeToBeInjected);
       return f();
    }
    return codeToBeInjected === "" ? <div>Loading</div> : <div>{renderStuff()}</div>

}
export default Adrian;