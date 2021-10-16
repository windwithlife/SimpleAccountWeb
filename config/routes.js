export default [
  {
    path: '/welcome',
    name: 'welcome',
    // icon: 'smile',
    component: './Welcome',
    hideInMenu: true,
    hideInBreadcrumb : true,
  },


  {
    path: '/home',
    name: 'home',
    // icon: 'smile',
    component: './hometest/index',
    //layout: false,
    hideInMenu: true,
    hideInBreadcrumb : true,
  },
  {
    path: '/test',
    name: 'test',
    // icon: 'smile',
    component: './home/index',
    layout: false,
    // hideInMenu: true,
    hideInBreadcrumb : true,
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
    //component: './layout/layout-test/index',
    //layout: false,
    // hideInMenu: true,
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
