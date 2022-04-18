import { Space, Spin } from "antd";

const withSpinner = (Component) => (props) => {
  const {isLoading, ...otherProps} = props;
  return (
    <>
      {isLoading ? (
        <Space size='middle'>
          <Spin size='large' />
        </Space>
      ) : (
        <Component {...otherProps} />
      )}
    </>
  );
};

export default withSpinner;
