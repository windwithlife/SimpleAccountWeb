import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';
import styles from './Welcome.less';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default () => {
  const intl = useIntl();
  return (
    <PageHeaderWrapper
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: 'This page can only be viewed by admin',
      })}
    >
      <Card>
        <Alert
          message="接口说明"
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title
          level={2}
          style={{
            textAlign: 'left',
          }}
        >
          <a
            href="https://api.zhangyongqiao.com/account-service/swagger-ui.html"
            rel="noopener noreferrer"
            target="__blank"
          >
          <CodePreview>帐户管理服务接口说明</CodePreview>
          </a>
          <a
            href="https://api.zhangyongqiao.com/project-service/swagger-ui.html"
            rel="noopener noreferrer"
            target="__blank"
          >
          <CodePreview>项目，需求，任务服务接口说明</CodePreview>
          </a>
          <a
            href="https://api.zhangyongqiao.com/common-service/swagger-ui.html"
            rel="noopener noreferrer"
            target="__blank"
          >
          <CodePreview>通用的公共服务接口说明</CodePreview>
          </a>
        </Typography.Title>
      </Card>
      <p
        style={{
          textAlign: 'center',
          marginTop: 24,
        }}
      >
        Want to add more pages? Please refer to{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          use block
        </a>
        。
      </p>
    </PageHeaderWrapper>
  );
};
