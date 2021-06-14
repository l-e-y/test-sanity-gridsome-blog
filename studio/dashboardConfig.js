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
                  buildHookId: '60c780ccc70ad50091efa5d4',
                  title: 'Sanity Studio',
                  name: 'test-sanity-gridsome-blog-studio',
                  apiId: 'd670166d-5ecf-46a5-9111-a79cfc03de8f'
                },
                {
                  buildHookId: '60c780cde2a71600d3792fb4',
                  title: 'Blog Website',
                  name: 'test-sanity-gridsome-blog-web',
                  apiId: 'a9b3f89a-da63-4aaf-97dd-0cdeb6d6cfe6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/l-e-y/test-sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-sanity-gridsome-blog-web.netlify.app', category: 'apps'}
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
