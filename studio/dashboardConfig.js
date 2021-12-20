export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '61c078242680c02997535f5a',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-vx4nuyq6',
                  apiId: '466ecef2-b031-4415-9346-5f1b225159b4'
                },
                {
                  buildHookId: '61c0782497a02a2a90e86e86',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-qp56a8ia',
                  apiId: '2e196761-d077-4d58-9688-c2d61c7b8f69'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mariar1/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-qp56a8ia.netlify.app', category: 'apps'}
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
