import React from 'react';
import { PageContainer ,GridContent} from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';

// import {NewButton} from 'simple-framework';
import {logError} from 'simple-framework/base';

export default () => {
  const intl = useIntl();
  return (
    <GridContent>
      <Card>
        {/* <NewButton name="Test Button2"></NewButton> */}
        <img className={styles.welcome} src="./welcome.png" ></img>
      </Card>
      <Card>
       
        <Typography.Text strong>
         
          <a
            href="https://www.zhangyongqiao.com/account-web/"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
          </a>
        </Typography.Text>
        
       
      </Card>
    </GridContent>
  );
};
