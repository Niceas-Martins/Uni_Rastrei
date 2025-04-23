import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style(Paciente).css";
import Icone from "./Img/dashboard (2).png";
import Icone1 from "./Img/calendar (9).png";
import Icone2 from "./Img/multiple-users-silhouette (5).png";
import Icone3 from "./Img/user (6).png";
import Icone4 from "./Img/sair 1.png";
import Icone_Vector_Black from "./Img/Vector (2).png";
import Icone_Cardiogram from "./Img/cardiogram (1).png";
import Icone_Group397 from "./Img/Group 397.png";
import Icone_Group399 from "./Img/Group 399.png";

function Paciente() {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const Back_Login = () => navigate("/");
  const Click_Back_Dashboard = () => navigate("/Dashboard");
  const Click_New_Paciente = () => navigate("/Novo_Paciente");
  const Click_Paciente = () => navigate("/Paciente");
  const Click_Calendario = () => navigate("/Calendario");
  const Click_Exame = () => navigate("/Exame_Do_Paciente");

  const handleDeleteClick = (patient) => {
    setSelectedPatient(patient);
    setShowConfirm(true);
  };

  const handleCancel = () => {
    setShowConfirm(false);
    setSelectedPatient(null);
  };

  const handleConfirmDelete = () => {
    console.log("Paciente deletado:", selectedPatient);
    setShowConfirm(false);
    setSelectedPatient(null);
  };

  return (
    <div className="root_Paciente">
      <div className="Dashboard_Menu">
        <ul className="Topico_Dashboard">
          <li className="Img_Dashboard">
            <img src={Icone} alt="Dashboard" />
            <button type="button" onClick={Click_Back_Dashboard}>
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
            <button type="button" onClick={Click_Paciente}>
              Pacientes
            </button>
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
            <img src={Icone4} alt="sair"/>
            Sair
          </button>
        </p>
      </div>

      <div className="Div_Paciente">
        <p className="Tops_Title_Paciente">Pacientes</p>
        <div className="Main_Registre_Search">
          <button type="button" className="Button_Registre" onClick={Click_New_Paciente}>
            <img src={Icone_Vector_Black} className="Vector_Black" alt="icone" />
            <span>Novo Cadastro</span>
          </button>

          <input
            type="search"
            className="Input_Search"
            placeholder="Pesquisar paciente..."
          />
        </div>

        <div className="List_Registre">
          <table className="Paciente_Table">
            <thead>
              <tr>
                <th>Nome Completo</th>
                <th>CPF</th>
                <th>Médico</th>
                <th>Última Consulta</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rodrigo Cardoso Correia</td>
                <td>313.080.220-77</td>
                <td>Dr. João Silva</td>
                <td>01/04/2025</td>
                <td className="Acoes">
                  <button onClick={Click_Exame}>
                    <img src={Icone_Cardiogram} className="Cardiogram_Style" alt="exame" />
                  </button>
                  <button onClick={Click_New_Paciente}>
                    <img src={Icone_Group397} className="Group397_Style" alt="editar" />
                  </button>
                  <button onClick={() => handleDeleteClick("Rodrigo Cardoso Correia")}>
                    <img src={Icone_Group399} className="Group399_Style" alt="deletar" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Tem certeza que quer excluir o paciente?</p>
            <div className="modal-buttons">
              <button  onClick={handleCancel}  className="button_cancelar">Cancelar</button>
              <button onClick={handleConfirmDelete} className="button_certeza">Tenho certeza</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Paciente;
