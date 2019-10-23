export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5dafbc91835cd50a17c26b68',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-p6b1cjss',
                  apiId: '9ec87ea4-665e-4ded-99e0-12b9dcebcb0d'
                },
                {
                  buildHookId: '5dafbc91ff862c3a46bdbd64',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1ha7rgwf',
                  apiId: 'f7254b2b-5a3a-492f-82db-3e335dbc4935'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jacobarriola/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1ha7rgwf.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
