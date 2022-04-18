import { useCallback, useState } from 'react';
import { useDoneTask, useGetTasks } from '../../hooks/useTasks'
import withSpinner from 'components/Spinner';
import { ITask } from 'constants/interfaces/task';
import HomeBody from 'components/HomeBody';
import {
  useParams
} from "react-router-dom";
import { Layout} from 'antd';
import { Content } from 'antd/lib/layout/layout';
import './style.css'


const TasksWithSpinner = withSpinner(HomeBody)

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { quantity } = useParams();
  const param = quantity ? quantity : '3'
  const { isLoading, data } = useGetTasks(param)
  const [modalData, setModalData] = useState({})

  const {mutate} = useDoneTask()

  const showModal = useCallback((e:ITask) => {
    setModalData(e)
    setIsModalVisible(true);
  },[])

  const handleOk = useCallback((e:ITask) => {
    mutate(e)
    setIsModalVisible(false);
  },[mutate]);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  },[]);
 
  return (
    <Layout>
        <Content className='content'>
          <TasksWithSpinner
            isLoading={isLoading}
            showModal={showModal}
            data={data}
            modalData={modalData}
            isModalVisible={isModalVisible}
            handleOk={handleOk}
            handleCancel={handleCancel}/>
        </Content>
    </Layout>
  );
}

export default Home;