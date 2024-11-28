import Header from './Header';
import Content from './Content';

//interface TaskLoggingProps {}

const TaskLogging = () => {

  return (
    <div className="notificationsFrame">
      <div className="panel">
       <Header></Header> 
       <Content></Content> 
      </div>
    </div>
  );
}

export default TaskLogging;
