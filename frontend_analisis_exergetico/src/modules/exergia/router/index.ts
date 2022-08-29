export default [
  {
    path: '/',
    name: 'home',
    redirect: '/exergia',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('src/pages/ErrorNotFound.vue'),
  },
  {
    path: '/exergia',
    name: 'exergia',
    redirect: { name: 'inicio' },
    component: () => import('src/modules/exergia/layouts/HomeLayout.vue'),
    children: [
      {
        path: 'inicio',
        name: 'inicio',
        component: () =>
          import('src/modules/exergia/pages/SeleccionProyectoPage.vue'),
      },
      {
        path: 'proyecto/:id',
        name: 'proyecto',
        component: () => import('src/modules/exergia/pages/ProyectoPage.vue'),
      },
    ],
  },
];
