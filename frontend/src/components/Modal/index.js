import { Modal } from "antd";

const CustomModal = ({data, isModalVisible, handleOk, handleCancel}) => {
  return (
    <Modal
      visible={isModalVisible}
      onOk={() =>handleOk({id:data.id, title:data.title})}
      onCancel={handleCancel}
      okText='Complete'
      cancelText='Close'>
      <p>
        Task #{data.id}
        <br />
        {data.title}
      </p>
    </Modal>
  );}
;

export default CustomModal