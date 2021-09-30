// @ts-ignore
/* eslint-disable */
import Model from './model';

let bizPath = '/common-service/todo';
const composeUrl = (url) => {
  return bizPath + url;
};
export default class DefaultModel {
  //*********************************API for Category Section ************************************/
  static async removeBatch(params, options) {
    return await new Model().fetch_post('/common-service/todo/removeBatch', params, options);
  }
  static async removeById(params, options) {
    return await new Model().fetch_post('/common-service/todo/removeById', params, options);
  }
  static async update(params, options) {
    return await new Model().fetch_post('/common-service/todo/update', params, options);
  }
  static async addNew(params, options) {
    return await new Model().fetch_post('/common-service/todo/addNew', params, options);
  }
  static async queryAll(options) {
    let result =  await new Model().fetch_get('/common-service/todo/queryAll', {}, options);
    console.log(result);
    let items = result.data.items;
    items.forEach((element) => {
      element.key = element.id;
    });
    return { data: result.data.items };
  }
  static async queryByParams(params, options) {
    return await new Model().fetch_get('/common-service/todo/queryAll', params, options);
  }
}
