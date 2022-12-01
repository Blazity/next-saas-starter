import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master',
  clientId: process.env.TINA_CLIENT_ID!, // Get this from tina.io
  token: process.env.TINA_TOKEN!, // Get this from tina.io
  build: { outputFolder: 'admin', publicFolder: 'public' },
  schema: {
    collections: [
      {
        label: 'Blog Posts',
        name: 'post',
        path: 'posts',
        format: 'mdx',
        ui: {
          router: ({ document }) => {
            return `/blog/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'string',
            label: 'Description',
            name: 'description',
          },
          {
            type: 'string',
            label: 'Date',
            name: 'date',
          },
          {
            type: 'string',
            label: 'Tags',
            name: 'tags',
          },
          {
            type: 'string',
            label: 'Image URL',
            name: 'imageUrl',
          },
          {
            type: 'rich-text',
            label: 'Blog Post Body',
            name: 'body',
            isBody: true,
            templates: [
              {
                name: 'Quote',
                label: 'Quote',
                fields: [
                  {
                    type: 'string',
                    name: 'content',
                    label: 'Content',
                  },
                  {
                    type: 'string',
                    name: 'author',
                    label: 'Author',
                  },
                  {
                    type: 'string',
                    name: 'cite',
                    label: 'Cite',
                  },
                ],
              },
              {
                name: 'ArticleImage',
                label: 'ArticleImage',
                fields: [
                  {
                    type: 'string',
                    name: 'src',
                    label: 'Src',
                  },
                  {
                    type: 'string',
                    name: 'caption',
                    label: 'Caption',
                  },
                ],
              },
              {
                name: 'Code',
                label: 'Code',
                fields: [
                  {
                    type: 'string',
                    name: 'code',
                    label: 'Code',
                  },
                  {
                    type: 'string',
                    name: 'language',
                    label: 'Language',
                  },
                  {
                    type: 'string',
                    name: 'selectedLines',
                    label: 'Selected Lines',
                  },
                  {
                    type: 'boolean',
                    name: 'withCopyButton',
                    label: 'With Copy Button',
                  },
                  {
                    type: 'boolean',
                    name: 'withLineNumbers',
                    label: 'With Line Numbers',
                  },
                  {
                    type: 'string',
                    name: 'caption',
                    label: 'Caption',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
