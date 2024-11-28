import curro from './assets/images/curro.jpg'
import francisca from './assets/images/francisca.jpg'
import paco from './assets/images/paco.jpg'
import quica from './assets/images/quica.jpg'
import './Content.css' 

const Content = () => {
    return (
        <div className="content">
          <div className="line"></div>
          <div className="item">
            <div className="avatar">
              <img
                alt="Francisca"
                src={francisca}
              />
            </div>
            <span className="time">Hace una hora</span>
            <p>Fui a comer con amigos</p>
          </div>
          <div className="item">
            <div className="avatar">
              <img
                alt="Paco"
                src={paco}
              />
            </div>
            <span className="time">10:00 am</span>
            <p>Leí un artículo sobre tecnología</p>
          </div>
          <div className="item">
            <div className="avatar">
              <img
                alt="Quica"
                src={quica}
              />
            </div>
            <span className="time">10:00 am</span>
            <p>Escribí notas sobre un proyecto importante</p>
          </div>
          <div className="item">
            <div className="avatar">
              <img
                alt="Curro"
                src={curro}
              />
            </div>
            <span className="time">2:21 pm</span>
            <p>Preparé la presentación para la reunión de mañana</p>
          </div>
        </div>
    )
}

export default Content;