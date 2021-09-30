// @ts-ignore
/* eslint-disable */
import Model from './model';

let bizPath = '/common-service/category';
const composeUrl = (url) => {
  return bizPath + url;
};
export default class DefaultModel {
  //*********************************API for Category Section ************************************/
  static async removeBatch(params, options) {
    return await new Model().fetch_post('/common-service/category/removeBatch', params, options);
  }
  static async removeById(params, options) {
    return await new Model().fetch_post('/common-service/category/removeById', params, options);
  }
  static async update(params, options) {
    return await new Model().fetch_post('/common-service/category/update', params, options);
  }
  static async addNew(params, options) {
    return await new Model().fetch_post('/common-service/category/addNew', params, options);
  }
  static async queryAll(options) {
    let result = await new Model().fetch_get('/common-service/category/queryAll', {}, options);
    let items = result.data.items;
    items.forEach((element) => {
      element.key = element.id;
      if(!element.hasChildren){
        element.childInfo = '暂无子类别';
      }
    });
    return { data: result.data.items };
  }

  static async queryAllOptions(options) {
    let result = await new Model().fetch_get('/common-service/category/queryAll', {}, options);
    let items = result.data.items;
    items.forEach((element) => {
      element.key = element.value = element.id;
      element.label= element.name;
      if(element.hasOwnProperty("parentId")){delete element.parentId;}
      
    });
    console.log(items);
    return items;
  }

  static async queryByParams(params, options) {
    return await new Model().fetch_get('/common-service/category/queryAll', params, options);
  }
}
