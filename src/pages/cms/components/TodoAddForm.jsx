import React, { useRef, useState } from 'react';
import { Modal, message, Divider, Alert } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, { ProFormDigit, ProFormSelect, ProFormText, ProFormTextArea, ProFormDateTimePicker, StepsForm } from '@ant-design/pro-form';
import ReactWEditor from 'wangeditor-for-react';
import styles from './style.less';
import Model from '@/models/CMSRichTextModel';
import CategoryModel from '@/models/CMSCategoryModel';
import ChannelModel from '@/models/CMSChannelModel';
import PageModuleModel from '@/models/CMSPageModuleModel';
import { useIntl, FormattedMessage } from 'umi';

const AddNewForm = (props) => {
  const intl = useIntl();
  return (
    <StepsForm
      stepsProps={{
        size: 'large',
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={1024}
            bodyStyle={{
              padding: '32px 40px 48px',
            }}
            destroyOnClose
            title={intl.formatMessage({
              id: 'pages.table.update',
              defaultMessage: '配置修改',
            })}
            visible={props.createModalVisible}
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
      <StepsForm.StepForm title="填写文本内容">
        <div >
          <ProFormSelect
            name="frequency"
            label={intl.formatMessage({
              id: 'pages.todoTable.titleTaskType',
              defaultMessage: '任务类型',
            })}
            width="md"
            request={CategoryModel.queryAllOptions}

          />
          <ProFormText
            label="任务标题"
            width="md"
            name="title"
            required={false}
            rules={[
              {
                required: true,
                message: '需要一个标题',
              },
            ]}
          />
         
          <ProFormTextArea
            label="简单描述"
            width="md"
            name="description"
            placeholder="请输入描述内容"
          />

          <Divider
            style={{
              margin: '24px 0',
            }}
          />




        </div>
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          type: '1',
          frequency: 'month',
        }}
        title={intl.formatMessage({
          id: 'pages.todoTable.titleTimes',
          defaultMessage: '设定任务周期',
        })}
      >
        <ProFormDateTimePicker
          name="startTime"
          width="md"
          label={intl.formatMessage({
            id: 'pages.searchTable.updateForm.schedulingPeriod.timeLabel',
            defaultMessage: '开始时间',
          })}
          
        />

        <ProFormDateTimePicker
          name="endTime"
          width="md"
          label={intl.formatMessage({
            id: 'pages.todoTable.titleEndTime',
            defaultMessage: '结束时间',
          })}
          
        />

      </StepsForm.StepForm>

    </StepsForm>
  );
};

export default AddNewForm;
