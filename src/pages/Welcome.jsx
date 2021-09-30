import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
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
    <PageContainer>
      <Card>
        <img className={styles.welcome} src="./welcome.png" ></img>
      </Card>
      <Card>
       
        <Typography.Text strong>
         
          <a
            href="https://www.zhangyongqiao.com/admin-web/"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
          </a>
        </Typography.Text>
        
       
      </Card>
    </PageContainer>
  );
};
