import "./styles.css";
import { useNavigate } from "react-router-dom";
import Icone from "./Img/dashboard (2).png";
import Icone1 from "./Img/calendar (9).png";
import Icone2 from "./Img/multiple-users-silhouette (5).png";
import Icone3 from "./Img/user (6).png";
import Icone4 from "./Img/sair 1.png";

function Dashboard() {
  const navigate = useNavigate();

  const Back_Login = () => {
    navigate("/");
  };

  const Click_New_Paciente = () => {
    navigate("/Novo_Paciente");
  };

  const Click_Calendario = () => {
    navigate("/Calendario");
  }

  
  const Click_Paciente = () => {
    navigate("/Paciente")
  }
  return (
    <div className="root">
      <div className="Dashboard_Menu">
        <ul className="Topico_Dashboard">
          <li className="Img_Dashboard">
            <img src={Icone} alt="Dashboard" />
            <button type="button">
              Dashboard
            </button>
          </li>
          <li className="Img_Calendar">
            <img src={Icone1} alt="Calendar" />
            <button type="button" onClick={Click_Calendario}>
              Calendário
            </button>
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
          <button type="button" className="Img_Exist" onClick={Back_Login}>
            <img src={Icone4} />
            <p>Sair</p>
          </button>
      </div>
      <div className="Brief_">
        <p>EM BREVE</p>
      </div>
    </div>
  );
}

export default Dashboard;
