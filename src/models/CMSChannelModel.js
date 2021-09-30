// @ts-ignore
/* eslint-disable */
import Model from './model';

let bizPath = '/common-service/category';
const composeUrl = (url) =>{
  return bizPath + url;
};
export default class DefaultModel {
  
//*********************************API for Category Section ************************************/
static async removeBatch(params,options) {
  return await new Model().fetch_post('/common-service/channel/removeBatch', params,options);
};
static async removeById(params,options) {
  return await new Model().fetch_post('/common-service/channel/removeById', params,options);
};
static async update(params,options) {
  return await new Model().fetch_post('/common-service/channel/update', params,options);
};
static async addNew(params,options) {
  return await new Model().fetch_post('/common-service/channel/addNew', params,options);
};
static async queryAll(options) {
  let result =  await new Model().fetch_get('/common-service/channel/queryAll', {},options);
  let items = result.data.items;
  items.forEach((element) => {
    element.key = element.id;
    if(!element.hasChildren){
      element.childInfo = '暂无子频道';
    }
  });
  return { data: items };
};

static async queryAllOptions(options) {
  let result = await new Model().fetch_get('/common-service/channel/queryAll', {}, options);
  let items = result.data.items;
  items.forEach((element) => {
    element.key = element.value = element.id;
    element.label= element.name;  
    if(element.hasOwnProperty("parentId")){delete element.parentId;}
  });
  return items;
}

static async queryByParams(params,options) {
  return await new Model().raw_get('/common-service/channel/queryAll', params,options);
};


}
