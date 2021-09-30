export default [
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
    hideInMenu: true,
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
       
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
           
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  
  


  {
    path: '/admin',
    name: 'admin',
    icon: 'user',
    access: 'canAdmin',
    hideInMenu: true,
    routes: [
      {
        name: 'settings',
        icon: 'smile',
        path: '/admin/settings',
        component: './account/settings',
      },
  
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
 
  {
    component: './404',
  },
];
