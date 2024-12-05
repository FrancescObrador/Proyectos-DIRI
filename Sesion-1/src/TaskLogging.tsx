import Header from './Header';
import Content from './Content';

//interface TaskLoggingProps {}

const TaskLogging = () => {

  return (
    <div className="notificationsFrame">
      <div className="panel">
       <Header title="Registro de tareas"></Header> 
       <Content></Content> 
       <Header title="Perfil"></Header>
      </div>
    </div>
  );
}

export default TaskLogging;
