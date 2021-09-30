// @ts-ignore
/* eslint-disable */
import Model from './model';

let bizPath = '/common-service/richtext';
const composeUrl = (url) => {
  return bizPath + url;
};
export default class DefaultModel {
  //*********************************API for Category Section ************************************/
  static async removeBatch(params, options) {
    return await new Model().fetch_post('/common-service/richtext/removeBatch', params, options);
  }
  static async removeById(params, options) {
    return await new Model().fetch_post('/common-service/richtext/removeById', params, options);
  }
  static async update(params, options) {
    return await new Model().fetch_post('/common-service/richtext/update', params, options);
  }
  static async addNew(params, options) {
    return await new Model().fetch_post('/common-service/richtext/addNew', params, options);
  }
  static async queryAll(options) {
    let result =  await new Model().fetch_get('/common-service/richtext/queryAll', {}, options);
    console.log(result);
    let items = result.data.items;
    items.forEach((element) => {
      element.key = element.id;
    });
    return { data: result.data.items };
  }
  static async queryByParams(params, options) {
    return await new Model().fetch_get('/common-service/richtext/queryAll', params, options);
  }
}
