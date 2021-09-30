import React from 'react';
import { Modal,Form } from 'antd';
import {
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
  ProFormRadio,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';

const UpdateForm = (props) => {
  const intl = useIntl();
  return (
    <StepsForm
      stepsProps={{
        size: 'small',
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={640}
            bodyStyle={{
              padding: '32px 40px 48px',
            }}
            destroyOnClose
            title={intl.formatMessage({
              id: 'pages.table.update',
              defaultMessage: '配置修改',
            })}
            visible={props.updateModalVisible}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={props.onSubmit}
    >
      <StepsForm.StepForm
        request={async () => ({
          id: props.values.id,
          loginName: props.values.loginName,
          nickName: props.values.nickName,
          phoneNumber: props.values.phoneNumber,
        })}
        title={intl.formatMessage({
          id: 'pages.searchTable.updateForm.basicConfig',
          defaultMessage: '基本信息',
        })}
      >
        <Form.Item
          name="id"
          noStyle='true'
        />
        <ProFormText
          name="loginName"
          label={intl.formatMessage({
            id: 'pages.accountTable.titleLoginName',
            defaultMessage: '角色名称',
          })}
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.accountTable.updateForm.ruleName.loginNameRules"
                  defaultMessage="登录名！"
                />
              ),
            },
          ]}
        />
        <ProFormText
          name="nickName"
          label={intl.formatMessage({
            id: 'pages.accountTable.titleNickName',
            defaultMessage: '昵称',
          })}
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.accountTable.updateForm.ruleName.nickNameRules"
                  defaultMessage="请输入角色名称！"
                />
              ),
            },
          ]}
        />
      

      </StepsForm.StepForm>
      <StepsForm.StepForm
        request={async () => ({
          password: props.values.password,
          phoneNumber: props.values.phoneNumber,
        })}
        title={intl.formatMessage({
          id: 'pages.accountTable.updateForm.securityConfig',
          defaultMessage: '安全设置',
        })}
      >
        <ProFormText
          name="password"
          label={intl.formatMessage({
            id: 'pages.accountTable.titlePassword',
            defaultMessage: '密码',
          })}
          width="md"
          rules={[
            {
              required: true,
            },
          ]}
        />
       
        <ProFormText
          name="phoneNumber"
          label={intl.formatMessage({
            id: 'pages.accountTable.titlePhoneNumber',
            defaultMessage: '手机号码',
          })}
          width="md"
          
        />

      </StepsForm.StepForm>

      <StepsForm.StepForm
       
        request={async () => ({
          domain: props.values.domain,
          roles: props.values.roles,
        })}
        title={intl.formatMessage({
          id: 'pages.accountTable.titleConfigRoles',
          defaultMessage: '设置角色',
        })}
      >
       <ProFormSelect
          name="roles"
          label={intl.formatMessage({
            id: 'pages.accountable.titleRole',
            defaultMessage: '角色',
          })}
          width="md"
          valueEnum={{
            admin: '管理员角色',
            guest: '普通角色',
            operator: '运维角色',
          }}
        />
        <ProFormSelect
          name="domain"
          label={intl.formatMessage({
            id: 'pages.roleTable.titleDomain',
            defaultMessage: '隔离域',
          })}
          width="md"
          valueEnum={{
            default: '缺省域',
            test: '测试域',
          }}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
