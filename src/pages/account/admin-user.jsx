import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Popconfirm, Drawer } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormText, ProFormTextArea, ProFormSelect } from '@ant-design/pro-form';
import ProDescriptions from '@ant-design/pro-descriptions';
import UpdateForm from './components/UserUpdateForm';
import AccountModel from '@/models/account';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */

const handleAdd = async (fields) => {
  const hide = message.loading('正在添加');

  try {
    //fields.name = fields.loginName;
    await AccountModel.addAdminUser({ ...fields });
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};
/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */

const handleUpdate = async (fields) => {
  const hide = message.loading('Configuring');

  try {
    await AccountModel.updateAdminUser({
     ...fields
    });
    // await AccountModel.updateUserInfo({
    //   ...fields
    //  });
    hide();
    message.success('Configuration is successful');
    return true;
  } catch (error) {
    hide();
    message.error('Configuration failed, please try again!');
    return false;
  }
};
/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */

const handleRemove = async (selectedRows) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await AccountModel.removeAdminUsers({
      ids: selectedRows.map((row) => row.key),
    });
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

/**
 *  Delete node
 * @zh-CN 删除一行数据
 *
 * @param index
 */

const handleRemoveRow = async (id) => {
  const hide = message.loading('正在删除');
  if (!id) return true;

  try {
    await AccountModel.removeAdminUser({
      id: id,
    });
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};



const TableList = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalVisible, handleModalVisible] = useState(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */

  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  //const [removeModalVisible, setRemoveModalVisible] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const actionRef = useRef();
  const [currentRow, setCurrentRow] = useState();
  const [selectedRowsState, setSelectedRows] = useState([]);
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */

  const intl = useIntl();
  const columns = [
    {
      title: <FormattedMessage id="pages.table.titleId" defaultMessage="编号ID" />,
      dataIndex: 'id',
      valueType: 'textarea',
    },
    {
      title: (
        <FormattedMessage
          id="pages.table.titleName"
          defaultMessage="名称"
        />
      ),
      dataIndex: 'name',
      tip: 'The rule name is the unique key',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: <FormattedMessage id="pages.accountTable.titleNickName" defaultMessage="昵称" />,
      dataIndex: 'nickName',
      valueType: 'textarea',
    },
    {
      title: <FormattedMessage id="pages.accountTable.titlePhoneNumber" defaultMessage="手机号" />,
      dataIndex: 'phoneNumber',
      valueType: 'textarea',
    },
    {
      title: (
        <FormattedMessage
          id="pages.accountTable.titleLoginName"
          defaultMessage="登录名"
        />
      ),
      dataIndex: 'loginName',
      sorter: true,
      hideInForm: true,
    },

    {
      title: <FormattedMessage id="pages.table.titleOperation" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [

        <a
          key="config"
          onClick={() => {
            handleUpdateModalVisible(true);
            setCurrentRow(record);
          }}
        >
          <FormattedMessage id="pages.table.config" defaultMessage="配置修改" />
        </a>,
        <Popconfirm
          key={'Remove-' + record.id}
          title={intl.formatMessage({
            id: 'pages.table.titleRemove',
            defaultMessage: '删除',
          })} onConfirm={() => {
            handleRemoveRow(record.id);
            setSelectedRows([]);
            actionRef.current?.reloadAndRest?.();
          }} >
          < a href="#" > <FormattedMessage id="pages.table.remove" defaultMessage="删除" /> </a>
        </Popconfirm>,

      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable
        headerTitle={intl.formatMessage({
          id: 'pages.accountTable.title',
          defaultMessage: '系统管理列表',
        })}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.table.addNew" defaultMessage="New" />
          </Button>,
        ]}
        request={AccountModel.queryAdminUsers}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              <FormattedMessage id="pages.table.item" defaultMessage="项" />

            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            <FormattedMessage
              id="pages.table.batchDeletion"
              defaultMessage="Batch deletion"
            />
          </Button>

        </FooterToolbar>
      )}
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.table.addNew',
          defaultMessage: '新增',
        })}
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value);

          if (success) {
            handleModalVisible(false);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >


        <ProFormText
          label={intl.formatMessage({
            id: 'pages.accountTable.titleLoginName',
            defaultMessage: '用户名（登录名称）',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.roleTable.titleName"
                  defaultMessage="Role name is required"
                />
              ),
            },
          ]}
          width="md"
          name="loginName"
        />

        <ProFormText
          label={intl.formatMessage({
            id: 'pages.accountTable.titleNickName',
            defaultMessage: '昵称',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.roleTable.titleName"
                  defaultMessage="Role name is required"
                />
              ),
            },
          ]}
          width="md"
          name="nickName"
        />
        <ProFormText
          name="phoneNumber"
          label={intl.formatMessage({
            id: 'pages.accountTable.titlePhoneNumber',
            defaultMessage: '手机号',
          })}
          width="md"
        />
        <ProFormText
          name="email"
          label={intl.formatMessage({
            id: 'pages.accountTable.titleEmail',
            defaultMessage: '邮箱',
          })}
          width="md"
        />
      </ModalForm>
      <UpdateForm
        onSubmit={async (value) => {
          console.log("update the user info===>");
          console.log(value);
          const success = await handleUpdate(value);

          if (success) {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalVisible(false);

          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        updateModalVisible={updateModalVisible}
        values={currentRow || {}}
      />

      <Drawer
        width={600}
        visible={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
