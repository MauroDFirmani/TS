export interface ITask { id: string, title: string }


export interface ITasksList {
    showModal: ({ id, title }: ITask) => {},
    isSuccess: boolean,
    data: { id: string, title: string }[],
    modalData: { id: string, title: string },
    isModalVisible: boolean,
    handleOk: void,
    handleCancel: void,
}