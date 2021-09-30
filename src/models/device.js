// @ts-ignore
/* eslint-disable */
import Model from './model';


export default class DeviceModel {
  static async currentUser(options) {
    return await new Model().fetch_get('/account-service/currentUser', options);
  };

  static async findDevices(options) {
    let result = await new Model().fetch_get('/smart-iot/device/findAll', options);
    console.log(result);
    return { data: result.data.deviceList };
  };
  static async queryAllGateways(options) {
    let result = await new Model().fetch_post('/smart-iot/gateway/queryAll', {}, options);
    console.log(result);
    return { data: result.data.gatewayList };
  };

  static async queryAll(options) {
    return await new Model().raw_get('https://proapi.azurewebsites.net/github/issues', options);
  };

}
