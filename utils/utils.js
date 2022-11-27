export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export const generateUUID = (optionalString = 'The Office (USA) is the best tv series ever') => {
    const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseAlphabet = lowercaseAlphabet.toUpperCase();
    const mixedString = lowercaseAlphabet + uppercaseAlphabet + optionalString.replaceAll(" ", "");
    let randomString = '';
    for (let i = 0; i < mixedString.length; i++)
        randomString = randomString + mixedString.charAt(getRandomInt(0, mixedString.length - 1));
    return randomString;
}

export const getPostObject = (markdownFile) => {
    // extract the metadata part from the markdown file and remove new line chars, tabs and back quotes
    const postArray = markdownFile.split("-----").slice(1);
    return {
        metadata: JSON.parse(postArray[0].replace(/[\n\t`]/g, '').trim()),
        content: postArray[1]
    }
}