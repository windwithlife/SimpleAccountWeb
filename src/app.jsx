import { PageLoading } from '@ant-design/pro-layout';
import { history, Link } from 'umi';
import RightContent from '@/components/RightContent';
import {Header} from 'simple-framework';
import Footer from '@/components/layout/black/Footer0';


import { createRef } from 'react';

//import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
import AccountModel from '@/models/account';
import MenuModel from '@/models/menu';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
/** 获取用户信息比较慢的时候会展示一个 loading */
const currentUser = AccountModel.currentUser;
const queryCurrentUser = AccountModel.currentUser;

export const layoutActionRef = createRef();
export const initialStateConfig = {
  loading: <PageLoading />,
};
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */

export async function getInitialState() {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser();
      return msg.data;
    } catch (error) {
      console.log('get current user exception');
      history.push(loginPath);
    }

    return undefined;
  }; // 如果是登录页面，不执行



  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    const menuData = await MenuModel.fetchMenuData();
    console.log('initiailze menu..', menuData);
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
      menu: menuData,
    };
  }

  return {
    fetchUserInfo,
    settings: {},
    menu: [],
  };
} // ProLayout 支持的api https://procomponents.ant.design/components/layout



export const layout = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: true,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer id="Footer0_0" />, 
    onPageChange: () => {
      const { location } = history; // 如果没有登录，重定向到 login

      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    // links: [
    //   <a href="https://traefik.koudaibook.com/dashboard/">
    //     <BookOutlined />
    //     <span>平台集群路由及流量监控</span>
    //   </a>,
    // ],
   
    actionRef: layoutActionRef,
   
    menuDataRender: ()=>{ 
        const menuData = initialState.menu;
        console.log("menudata.....",menuData);
        return menuData;
      },
    headerRender: (props)=>{
      console.log(props.menuData);
      
      const onMenuClick=function(item){
          console.log('click...',item)
          history.push(item.path);
      }
      return (
      <Header id="Nav0_0" logo="/logo.svg" menuClick={onMenuClick} style={{color:'#fff',background:'#000'}} RightContent={props.rightContentRender} menuData={props.menuData} ></Header>
      );
    },
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
