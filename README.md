This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Blog
* I have created the blog in a way that resembles the one showed in this [tech article](https://dev.to/alexmercedcoder/2022-tutorial-on-creating-a-markdown-blog-with-nextjs-3dlm)
* I wanted to avoid the usage of an additional dependency like [gray-matter](https://github.com/jonschlinkert/gray-matter)
* I also wanted to avoid to use an additional library like [react-uuid](https://yarnpkg.com/package/uuid) for generating a UUID,
so I have created my own utility
