// @ts-ignore
/* eslint-disable */
import Model from './model';

export default class DefaultModel {
  //*********************************API for Tag Section ************************************/
  static async removeBatch(params, options) {
    return await new Model().fetch_post('/common-service/tag/removeBatch', params, options);
  }
  static async removeById(params, options) {
    return await new Model().fetch_post('/common-service/tag/removeById', params, options);
  }
  static async update(params, options) {
    return await new Model().fetch_post('/common-service/tag/update', params, options);
  }
  static async addNew(params, options) {
    return await new Model().fetch_post('/common-service/tag/addNew', params, options);
  }
  static async queryAll(options) {
    let result = await new Model().fetch_get('/common-service/tag/queryAll', options);
    let items = result.data.items;
    items.forEach((element) => {
      element.key = element.id;
    });
    return { data: result.data.items };
  }
  static async queryByParams(params, options) {
    return await new Model().fetch_post('/common-service/tag/queryAll', params, options);
  }
}
