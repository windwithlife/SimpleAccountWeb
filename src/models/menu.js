// @ts-ignore
/* eslint-disable */
import Model from './model';


export default class MenuModel {
  static async currentUser(options) {
    return await new Model().fetch_get('/account-service/currentUser', options);
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
