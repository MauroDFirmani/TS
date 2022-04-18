import { Row, Col, Card } from 'antd'
import CustomModal from 'components/Modal';
import Task from 'components/Task';
import {ITask, ITasksList} from "constants/interfaces/task";
import './style.css'

function HomeBody({
  showModal,
  data,
  modalData,
  isModalVisible,
  handleOk,
  handleCancel,
}: ITasksList) {
  return (
    <>
    <Row >
            <Col xs={24}>
              <Card title="Number of Tasks" style={{textAlign: 'center'}}>
                {data.length}
              </Card>
            </Col>
        </Row>
    <Row className='rowBody'>
      {data.map(({id, title}: ITask) => (
        <Col key={id} xs={24} md={2} onClick={() => showModal({id, title})}>
          <Task id={id} title={title} />
        </Col>
      ))}
      <CustomModal
        data={modalData}
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </Row>
    </>
  );
}

export default HomeBody;
