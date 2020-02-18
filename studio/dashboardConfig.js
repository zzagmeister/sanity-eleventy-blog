export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4bf9b4e439670619c4f949',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-yjy9krhv',
                  apiId: '6cb30a10-cda7-4766-bfd7-475b331e7de9'
                },
                {
                  buildHookId: '5e4bf9b459c6b44b2f5d04e1',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-9mzpdad5',
                  apiId: '1cd81b69-a32f-40e1-8614-b60097578f81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zzagmeister/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-9mzpdad5.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
