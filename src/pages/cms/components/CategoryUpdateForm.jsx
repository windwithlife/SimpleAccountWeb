import React from 'react';
import { Modal, Form } from 'antd';
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
        <Form.Item name="id" noStyle="true" />
        <ProFormText
          name="name"
          label={intl.formatMessage({
            id: 'pages.table.titleName',
            defaultMessage: '名称',
          })}
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.ruleName.nameRules"
                  defaultMessage="请输入名称！"
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
            id: 'pages.table.updateForm.ruleDesc.descPlaceholder',
            defaultMessage: '请输入至少五个字符',
          })}
        />
      </StepsForm.StepForm>

      <StepsForm.StepForm
        request={async () => ({
          domain: props.values.domain,
        })}
        title={intl.formatMessage({
          id: 'pages.permissionTable.titleConfigDetail',
          defaultMessage: '设置更多',
        })}
      >
        <ProFormSelect
          name="method"
          label={intl.formatMessage({
            id: 'pages.permissionTable.titleMethod',
            defaultMessage: 'Method',
          })}
          width="md"
          valueEnum={{
            default: '缺省',
            test: '测试',
          }}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
