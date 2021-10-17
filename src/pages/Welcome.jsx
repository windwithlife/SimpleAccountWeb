import React from 'react';
import { PageContainer ,GridContent} from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';



export default () => {
  const intl = useIntl();
  return (
    <GridContent>
      <Card>
    
        <img className={styles.welcome} src="./welcome.png" ></img>
      </Card>
      
    </GridContent>
  );
};
