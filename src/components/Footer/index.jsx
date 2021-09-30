import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
export default () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '创世团队技术部出品',
  });
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Simple Pro',
          title: 'A Simple Production',
          href: 'https://www.zhangyongqiao.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/windwithlife/AdminWeb.git',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '官方网站',
          href: 'https://www.zhangyongqiao.com',
          blankTarget: true,
        },
      ]}
    />
  );
};
