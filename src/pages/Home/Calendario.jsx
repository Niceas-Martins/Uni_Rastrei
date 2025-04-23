import { useNavigate } from "react-router-dom";
import './Style(Calendario).css'
import Icone from "./Img/dashboard (2).png";
import Icone1 from "./Img/calendar (9).png";
import Icone2 from "./Img/multiple-users-silhouette (5).png";
import Icone3 from "./Img/user (6).png";
import Icone4 from "./Img/sair 1.png";

function Calendario(){
  
  const navigate = useNavigate()
  

  const Back_Login = () => {
    navigate("/");
  };
  const Click_Back_Dashboard = () => {
    navigate("/Dashboard");
  };
  
  const Click_New_Paciente = () => {
    navigate("/Novo_Paciente");
  };

  const Click_Paciente = () => {
    navigate("/Paciente")
  }
    return(
     <div>
        <div className="Dashboard_Menu">
                  <ul className="Topico_Dashboard">
                  <li className="Img_Dashboard">
                    <img src={Icone} alt="Dashboard" />
                    <button type="button" onClick={Click_Back_Dashboard}>Dashboard</button>
                  </li>
                  <li className="Img_Calendar">
                    <img src={Icone1} alt="Calendar" />
                    <button type="button">Calendário</button>
                  </li>
                  <li className="Img_Multiple">
                    <img src={Icone2} alt="multiple-users" />
                    <button type="button" onClick={Click_Paciente}>Pacientes</button>
                  </li>
                  <li className="User_Img">
                    <img src={Icone3} alt="user" />
                    <button type="button" onClick={Click_New_Paciente}>
                      <p>Novo Paciente</p>
                    </button>
                  </li>
                  </ul>
                  <p>
                  <button type="button" className="Img_Exist" onClick={Back_Login}>
                    <img src={Icone4} />
                    Sair
                  </button>
                </p>
              </div>
              <div className="Brief">
                <p>EM BREVE</p>
              </div>
     </div>
    )
}

export default Calendario