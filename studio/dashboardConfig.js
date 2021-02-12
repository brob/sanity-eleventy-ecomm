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
                  buildHookId: '6026f2b99878d05234ab1252',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-ecomm-studio',
                  apiId: '109e9304-61d5-45f7-b27d-4f6d1569f628'
                },
                {
                  buildHookId: '6026f2b93705315db2b572b7',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-ecomm',
                  apiId: 'cc135325-a018-43dc-a7cf-e5b86fa72bc6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brob/sanity-eleventy-ecomm',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-ecomm.netlify.app', category: 'apps'}
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
