import { PlusOutlined, HomeOutlined, ContactsOutlined, ClusterOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Divider, Input, Row, Tag, Typography } from 'antd';
import React, { useState, useRef } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Link, useModel } from 'umi';
import styles from './BaseView.less';
const { Title, Paragraph, Text } = Typography;

const TagList = ({ tags }) => {
  const ref = useRef(null);

  return (
    <div className={styles.tags}>
      <div className={styles.tagsTitle}>标签</div>
      {(tags || []).map((item) => (
        <Tag key={item.key}>{item.label}</Tag>
      ))}
    </div>
  );
};

const renderUserInfo = ({ title, group, geographic }) => {
  return (
    <div className={styles.detail}>

      <p>

        <>
          简介
          <Paragraph>
            此人风华正茂，急待破莫方成蝶，加班成性
          </Paragraph>
        </>
      </p>

      <p>
        <ContactsOutlined
          style={{
            marginRight: 8,
          }}
        />
        {title}
      </p>
      <p>
        <ClusterOutlined
          style={{
            marginRight: 8,
          }}
        />
        {group}
      </p>
      <p>
        <HomeOutlined
          style={{
            marginRight: 8,
          }}
        />
        {
          (
            geographic || {
              province: {
                label: '',
              },
            }
          ).province.label
        }
        {
          (
            geographic || {
              city: {
                label: '',
              },
            }
          ).city.label
        }
      </p>


    </div>
  );
}; // 渲染tab切换


const Center = (props) => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { currentUser } = initialState;
  const getAvatarURL = () => {
    if (currentUser) {
      if (currentUser.avatar) {
        return currentUser.avatar;
      }

      const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      return url;
    }

    return '';
  };

  const handleEdit = async () => {
    console.log(props);
    props.switchTab('base-edit');
  };

  return (
    <GridContent>
      <Row gutter={24}>
        <Col lg={14} md={24}>
          <Card
            bordered={false}
            style={{
              marginBottom: 24,
            }}
          >
            {currentUser && (
              <div>
                <div className={styles.avatarHolder}>
                  <img alt="" src={getAvatarURL()} />
                  <div className={styles.name}>{currentUser.name}</div>
                  <div>{currentUser?.signature}</div>
                </div>
                {renderUserInfo(currentUser)}
                <Divider dashed />
                <TagList tags={currentUser.tags || []} />
                <Divider
                  style={{
                    marginTop: 16,
                  }}
                  dashed
                />
                <div className={styles.team}>
                  <div className={styles.teamTitle}>团队</div>
                  <Row gutter={36}>
                    {currentUser.notice &&
                      currentUser.notice.map((item) => (
                        <Col key={item.id} lg={24} xl={12}>
                          <Link to={item.href}>
                            <Avatar size="small" src={item.logo} />
                            {item.member}
                          </Link>
                        </Col>
                      ))}
                  </Row>
                 
                  <Button onClick ={handleEdit} >编辑用户信息</Button>
                 
                </div>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </GridContent>
  );
};

export default Center;
