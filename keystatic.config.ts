import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'the-client/astro-keystatic-cms',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              // Store images where Astro can resolve them relative to the .mdoc file
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        }),
      },
    }),
    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
          slug: {
            description: 'The page URL, e.g. "about" → /about/',
            validation: {
              // Pages live at the site root, so keep them from shadowing existing routes.
              pattern: {
                regex: /^(?!(?:keystatic|api|posts|index)$)[a-z0-9]+(?:-[a-z0-9]+)*$/,
                message:
                  'Use lowercase letters, numbers and dashes. "keystatic", "api", "posts" and "index" are reserved.',
              },
            },
          },
        }),
        description: fields.text({
          label: 'Description',
          description: 'Short summary used for search engines and link previews.',
          multiline: true,
        }),
        showInNav: fields.checkbox({
          label: 'Show in navigation',
          defaultValue: true,
        }),
        navOrder: fields.integer({
          label: 'Navigation order',
          description: 'Lower numbers appear first.',
          defaultValue: 0,
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/pages',
              publicPath: '../../assets/images/pages/',
            },
          },
        }),
      },
    }),
  },
});