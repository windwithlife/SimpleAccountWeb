import { Card, Col, DatePicker, Row, Tabs } from 'antd';
import { Column } from '@ant-design/charts';
import numeral from 'numeral';
import styles from '../style.less';
const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
const rankingListData = [];

for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}

const SalesCard = ({
  rangePickerValue,
  salesData,
  isActive,
  handleRangePickerChange,
  loading,
  selectDate,
}) => (
  <Card
    loading={loading}
    bordered={false}
    bodyStyle={{
      padding: 0,
    }}
  >
    <div className={styles.salesCard}>
      <Tabs
        tabBarExtraContent={
          <div className={styles.salesExtraWrap}>
            <div className={styles.salesExtra}>
             
            </div>
          
          </div>
        }
        size="large"
        tabBarStyle={{
          marginBottom: 24,
        }}
      >
        <TabPane tab="物联网设备销售额" key="sales">
          <Row>
            <Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesBar}>
                <Column
                  height={300}
                  forceFit
                  data={salesData}
                  xField="x"
                  yField="y"
                  xAxis={{
                    visible: true,
                    title: {
                      visible: false,
                    },
                  }}
                  yAxis={{
                    visible: true,
                    title: {
                      visible: false,
                    },
                  }}
                  title={{
                    visible: true,
                    text: '销售趋势',
                    style: {
                      fontSize: 14,
                    },
                  }}
                  meta={{
                    y: {
                      alias: '销售量',
                    },
                  }}
                />
              </div>
            </Col>
            </Row>
        </TabPane>
        <TabPane tab="物联网平台访问量" key="views">
          <Row>
            <Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesBar}>
                <Column
                  height={300}
                  forceFit
                  data={salesData}
                  xField="x"
                  yField="y"
                  xAxis={{
                    visible: true,
                    title: {
                      visible: false,
                    },
                  }}
                  yAxis={{
                    visible: true,
                    title: {
                      visible: false,
                    },
                  }}
                  title={{
                    visible: true,
                    text: '访问量趋势',
                    style: {
                      fontSize: 14,
                    },
                  }}
                  meta={{
                    y: {
                      alias: '访问量',
                    },
                  }}
                />
              </div>
            </Col>
            
          </Row>
        </TabPane>
      </Tabs>
    </div>
  </Card>
);

export default SalesCard;
