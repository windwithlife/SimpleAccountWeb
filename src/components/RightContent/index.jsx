import { Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

const GlobalHeaderRight = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="设备搜索"
        options={[
          {
            label: <a href="/device/home">设备 </a>,
            value: 'smart-iot',
          },
          {
            label: <a href="/gateway/home">网关</a>,
            value: 'gateway',
          },
          {
            label: <a href="/admin/role">角色</a>,
            value: 'role',
          },
         
        ]} // onSearch={value => {
        //   console.log('input', value);
        // }}
      />
      {/* <span
        className={styles.action}
        onClick={() => {
          window.open('https://api.zhangyongqiao.com/connection-service/swagger-ui.html');
        }}
      >
        <QuestionCircleOutlined />
      </span> */}
      <Avatar menu={true}/>
      <SelectLang className={styles.action} />
    </Space>
  );
};

export default GlobalHeaderRight;
