// @ts-ignore

/* eslint-disable */
import Model from './model';

export default class AccountModel {
  /***********************************用户管理******************************/
  //获取当前用户信息
  static async currentUser(options) {
    return await new Model().fetch_get('/account-service/account/currentUser', options);
  }

  /** 退出登录接口 POST /api/login/outLogin */

  static async outLogin(params, options) {
    return await new Model().fetch_post('/account-service/account/logout', params, options);
  }
  /** 登录接口 POST /api/login/account */

  static async login(params, options) {
    return await new Model().fetch_post('/account-service/account/login', params, options);
  }
  //查询管理用户
  static async queryAdminUsers(params, options) {
    let result = await new Model().fetch_post(
      '/account-service/account/queryAdminUsers',
      params,
      options,
    );
    let accounts = result.data.accounts;
    accounts.forEach((element) => {
      element.key = element.id;
    });
    return { data: accounts };
  }

  //新增管理用户
  static async addAdminUser(params, options) {
    let result = await new Model().fetch_post(
      '/account-service/account/addAdminUser',
      params,
      options,
    );
    return result;
  }
  //更新角色信息
  static async updateAdminUser(params, options) {
    console.log(params);
    let result = await new Model().fetch_post(
      '/account-service/account/updateAdminAccount',
      params,
      options,
    );
    console.log(result);
    return result;
  }
  //删除用户
  static async removeAdminUser(params, options) {
    console.log(params);
    let result = await new Model().fetch_post(
      '/account-service/account/removeAdminUser',
      params,
      options,
    );
    console.log(result);
    return result;
  }

  //批量删除用户
  static async removeAdminUsers(params, options) {
    console.log(params);
    let result = await new Model().fetch_post(
      '/account-service/account/removeBatchAdminUsers',
      params,
      options,
    );
    console.log(result);
    return result;
  }
  /***********************************角色管理******************************/
  //删除角色
  static async removeRole(params, options) {
    console.log(params);
    let result = await new Model().fetch_post('/account-service/role/removeById', params, options);
    console.log(result);
    return result;
  }

  //批量删除角色
  static async removeRoles(params, options) {
    console.log(params);
    let result = await new Model().fetch_post('/account-service/role/removeBatch', params, options);
    console.log(result);
    return result;
  }

  //新增角色
  static async addRole(params, options) {
    console.log(params);
    let result = await new Model().fetch_post('/account-service/role/addRole', params, options);
    console.log(result);
    return result;
  }

  //更新角色信息
  static async updateRole(params, options) {
    console.log(params);
    let result = await new Model().fetch_post('/account-service/role/update', params, options);
    console.log(result);
    return result;
  }

  //查询平台上所有角色
  static async queryAllRoles(options) {
    let result = await new Model().fetch_post('/account-service/role/queryAll', {}, options);
    console.log(result);
    let roles = result.data.roles;
    roles.forEach((element) => {
      element.key = element.id;
    });
    return { data: roles };
  }

  /***********************************权限管理*************** */
  //查询平台上所有权限
  static async queryAllPermissions(options) {
    let result = await new Model().fetch_post('/account-service/permission/queryAll', {}, options);
    console.log(result);
    let permissions = result.data.permissions;
    permissions.forEach((element) => {
      element.key = element.id;
    });
    return { data: result.data.permissions };
  }

  //删除权限
  static async removePermission(params, options) {
    console.log(params);
    let result = await new Model().fetch_post(
      '/account-service/permission/removeById',
      params,
      options,
    );
    console.log(result);
    return result;
  }

  //批量删除角色
  static async removePermissions(params, options) {
    console.log(params);
    let result = await new Model().fetch_post(
      '/account-service/permission/removeBatch',
      params,
      options,
    );
    console.log(result);
    return result;
  }

  //新增角色
  static async addPermission(params, options) {
    console.log(params);
    let result = await new Model().fetch_post(
      '/account-service/permission/addPermission',
      params,
      options,
    );
    console.log(result);
    return result;
  }

  //更新角色信息
  static async updatePermission(params, options) {
    console.log(params);
    let result = await new Model().fetch_post(
      '/account-service/permission/update',
      params,
      options,
    );
    console.log(result);
    return result;
  }
}
