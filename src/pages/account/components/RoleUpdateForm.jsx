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
          name: props.values.name,
          description: props.values.description,
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
          name="name"
          label={intl.formatMessage({
            id: 'pages.roleTable.titleName',
            defaultMessage: '角色名称',
          })}
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.ruleName.nameRules"
                  defaultMessage="请输入角色名称！"
                />
              ),
            },
          ]}
        />
        <ProFormTextArea
          name="description"
          width="md"
          label={intl.formatMessage({
            id: 'pages.table.titleDesc',
            defaultMessage: '描述说明',
          })}
          placeholder={intl.formatMessage({
            id: 'pages.searchTable.updateForm.ruleDesc.descPlaceholder',
            defaultMessage: '请输入至少五个字符',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.ruleDesc.descRules"
                  defaultMessage="请输入至少五个字符的描述！"
                />
              ),
              min: 5,
            },
          ]}
        />
      </StepsForm.StepForm>

      <StepsForm.StepForm
       
        request={async () => ({
          domain: props.values.domain,
        })}
        title={intl.formatMessage({
          id: 'pages.roleTable.titleConfigDomain',
          defaultMessage: '设定角色域隔离',
        })}
      >
       
        <ProFormSelect
          name="domain"
          label={intl.formatMessage({
            id: 'pages.roleTable.titleDomain',
            defaultMessage: '隔离域',
          })}
          width="md"
          valueEnum={{
            month: '测试',
            week: 'B测试域',
          }}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
