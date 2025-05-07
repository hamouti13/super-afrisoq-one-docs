import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/super-afrisoq-one-docs/docs',
    component: ComponentCreator('/super-afrisoq-one-docs/docs', '688'),
    routes: [
      {
        path: '/super-afrisoq-one-docs/docs',
        component: ComponentCreator('/super-afrisoq-one-docs/docs', '186'),
        routes: [
          {
            path: '/super-afrisoq-one-docs/docs',
            component: ComponentCreator('/super-afrisoq-one-docs/docs', '65e'),
            routes: [
              {
                path: '/super-afrisoq-one-docs/docs/',
                component: ComponentCreator('/super-afrisoq-one-docs/docs/', '9c6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/super-afrisoq-one-docs/docs/api',
                component: ComponentCreator('/super-afrisoq-one-docs/docs/api', 'd72'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/super-afrisoq-one-docs/docs/models',
                component: ComponentCreator('/super-afrisoq-one-docs/docs/models', '8b7'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
