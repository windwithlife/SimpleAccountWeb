import React, { useRef, useState } from 'react';
import { Modal, message, Divider, Alert } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, { ProFormDigit, ProFormSelect, ProFormText, ProFormTextArea, StepsForm } from '@ant-design/pro-form';
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
              <ProFormText
                label="文本标题"
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
              <Divider
                style={{
                  margin: '24px 0',
                }}
              />

              <ReactWEditor
                defaultValue={'<h1>标题</h1>'}
                linkImgCallback={(src, alt, href) => {
                  // 插入网络图片的回调事件
                  console.log('图片 src ', src)
                  console.log('图片文字说明', alt)
                  console.log('跳转链接', href)
                }}
                onlineVideoCallback={(video) => {
                  // 插入网络视频的回调事件
                  console.log('插入视频内容', video)
                }}
                onChange={(html) => {
                  console.log('onChange html:', html)
                }}
                onBlur={(html) => {
                  console.log('onBlur html:', html)
                }}
                onFocus={(html) => {
                  console.log('onFocus html:', html)
                }}
              />


            </div>
          </StepsForm.StepForm>
          <StepsForm.StepForm
           
            title="填写归类信息"
          
  
          >
            <ProFormSelect
              label="信息所属类目"
              width="md"
              name="categoryId"
              request={CategoryModel.queryAllOptions}

            />


            <ProFormTextArea
              label="简单描述"
              width="md"
              name="description"
              placeholder="请输入描述内容"
            />

          </StepsForm.StepForm>

          <StepsForm.StepForm title="完成">

            {/* <StepResult
              onFinish={async () => {
                setCurrent(0);
                formRef.current?.resetFields();
              }}
            > */}
            <ProFormSelect
              label="挂载频道"
              width="md"
              name="channelId"
              defaultValue='home'
              request={ChannelModel.queryAllOptions}
            />
            <ProFormSelect
              label="挂载页面或模块"
              width="md"
              name="pageModuleId"
              defaultValue={0}
              request={PageModuleModel.queryAllOptions}
            />
            {/* </StepResult> */}
          </StepsForm.StepForm>
        </StepsForm>
  );
};

export default AddNewForm;
