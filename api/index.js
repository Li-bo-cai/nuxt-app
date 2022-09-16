import Api from './modules/index';

const request = (headers) => {
  const http = Api(headers);
  console.log(http, 444);

  return async (func, reqData) => {
    let res = await http[func](reqData);
    return res;
  }
}
export default request