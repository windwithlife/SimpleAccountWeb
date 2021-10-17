// @ts-ignore
/* eslint-disable */
import Model from './model';


const menuMock = [
  {
    path: '/welcome',
    name: '测试菜单',
    key:'0',
  },
  {
    path: '/ok',
    name: '测试菜单第二项',
    key:'1',
    children: [
      {
        path: '/home',
        name: '测试Home页',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
        title: "测试",
        key:'10',
      },
      {
        path: '/test',
        name: '测试Test',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
        title: "测试",
        key:'11',
        children: [
          {
            path: '/welcome/welcome',
            name: '测试子菜单',
            exact: true,
          },
        ],
      },
    ],
  },
  
];


export default class MenuModel {
  static async currentUser(options) {
    return await new Model().fetch_get('/account-service/currentUser', options);
    
  };

  static async fetchMenuData(options) {
    return menuMock;
  };

  
  /***********************************权限管理*************** */
  //查询平台上所有权限
  static async queryAll(options) {
    let result = await new Model().fetch_post('/account-service/menu/queryAll', {}, options);
    let menus = result.data.menus;
    menus.forEach(element => {
      element.key = element.id;
    });
    console.log(result);
    return { data: menus};
  };

  //删除权限
  static async removeById(params, options) {
    console.log(params);
    let result = await new Model().fetch_post('/account-service/menu/removeById', params, options);
    console.log(result);
    return result;
  };

  //批量删除角色
  static async removeBatch(params, options) {
    console.log(params);
    let result = await new Model().fetch_post('/account-service/menu/removeBatch', params, options);
    console.log(result);
    return result;
  };

  //新增角色
  static async addNew(params, options) {
    console.log(params);
    let result = await new Model().fetch_post('/account-service/menu/addMenu', params, options);
    console.log(result);
    return result;
  };

  //更新角色信息
  static async update(params, options) {
    console.log(params);
    let result = await new Model().fetch_post('/account-service/menu/update', params, options);
    console.log(result);
    return result;
  };
  

}
