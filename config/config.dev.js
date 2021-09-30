// https://umijs.org/config/
import { defineConfig } from 'umi';
export default defineConfig({
  define: {
    // API_URL: 'http://localhost:5389', // API地址
    API_URL: 'https://api.zhangyongqiao.com', // API地址
    BASE_PATH: '/admin-web', // API 服务PATH
  },
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
});
