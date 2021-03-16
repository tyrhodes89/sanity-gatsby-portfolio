export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '605144b523bbee009b7e3c70',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ba26rbng',
                  apiId: '221c45b1-bae7-4018-8111-ade7173fd04d'
                },
                {
                  buildHookId: '605144b5d06b9300a3869589',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2mwuybrn',
                  apiId: 'fe1c7597-aa76-4165-8de4-b074d1446398'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tyrhodes89/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2mwuybrn.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
