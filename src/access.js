/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState) {
  const { currentUser } = initialState || {};
  return {
    //canAdmin: currentUser && currentUser.access === 'admin',
    canAdmin: currentUser && (currentUser.roles.indexOf('admin') >=0) ,
  };
}
