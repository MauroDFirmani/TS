import { ITask } from 'constants/interfaces/task';
import './style.css'

const Task = ({id, title}:ITask) => {
  return (
    <div className='taskDiv'>
      <p className='taskP'>Task #{id}</p>
      <p className='taskP'>{title}</p>
    </div>
  );
};

export default Task;
