import ActivityItem from './ActivityItem'
import './Content.css'





const Content = () => {
  return (
    <div className="content">
      <div className="line"></div>
      
      <ActivityItem 
      imageName="francisca" 
      timeText="Hace una hora" 
      description="Fui a comer con amigos"/>
      
      <ActivityItem 
      imageName="paco" 
      timeText="10:00 am" 
      description="Leí un artículo sobre tecnología" />
      
      <ActivityItem 
      imageName="quica" 
      timeText="10:00 am" 
      description="Escribí notas sobre un proyecto importante" />
      
      <ActivityItem 
      imageName="curro" 
      timeText="2:21 pm" 
      description="Preparé la presentación para la reunión de mañana" />
    
    </div>
  )
}

export default Content;