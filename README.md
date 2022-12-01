# Marco Rapaccini - Personal Website
## About
This is a [Next.js](https://nextjs.org/) personal website and blog.

The main goal of this website is to represent a [digital garden](https://maggieappleton.com/garden-history).

Opinions are my own.

## Technical Overview
* I started by having a look at the following 2 examples:
  * [Next.js](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)
  * [Dev.to](https://dev.to/alexmercedcoder/2022-tutorial-on-creating-a-markdown-blog-with-nextjs-3dlm)
* Each blog article is represented by a Markdown file
  * the `.md` article is then parsed into an HTML-like string using `micromark`
  * finally the string is passed to `html-react-parser` that produces the React elements
* I wanted to avoid the usage of an additional dependencies like:
  * [gray-matter](https://github.com/jonschlinkert/gray-matter)
    * so I have created my own `getPostObject()` method in [utils.js](./utils/utils.js)
to extract data and metadata from the `.md` blog article
  * [react-uuid](https://yarnpkg.com/package/uuid) for generating a UUID
    * so I have created my own `generateUUID()` method in [utils.js](./utils/utils.js)

## Additional Dependencies
* `micromark` as Markdown parser
* `html-react-parser` for converting an HTML string into React elements

## Test it locally
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.
