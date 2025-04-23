import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
import "./style(Novo_Paciente).css";
import Icone from "./Img/dashboard (2).png";
import Icone1 from "./Img/calendar (9).png";
import Icone2 from "./Img/multiple-users-silhouette (5).png";
import Icone3 from "./Img/user (6).png";
import Icone4 from "./Img/sair 1.png";

function Historico_Do_Paciente() {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [data_oftamologia, setData_oftamologia] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const Back_Login = () => {
    navigate("/");
  };

  const Click_New_Paciente = () => {
    navigate("/Novo_Paciente");
  };

  const Click_Calendario = () => {
    navigate("/Calendario");
  };

  const Click_Paciente = () => {
    navigate("/Paciente");
  };

  const handleSave = () => {
    setSubmitted(true); // Ativa exibição de erros

    if (data_oftamologia.trim() === "") {
      return; // Não salva se a data estiver vazia
    }

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div className="root">
      {showMessage && (
        <div className="overlay">
          <div className="message-box">
            <p>Salvo com sucesso!</p>
            <button className="Button_Style" onClick={() => setShowMessage(false)}>Fechar</button>
          </div>
        </div>
      )}
      <div className="Dashboard_Menu">
        <ul className="Topico_Dashboard">
          <li className="Img_Dashboard">
            <img src={Icone} alt="Dashboard" />
            <button type="button">Dashboard</button>
          </li>
          <li className="Img_Calendar">
            <img src={Icone1} alt="Calendar" />
            <button type="button" onClick={Click_Calendario}>Calendário</button>
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
          <img src={Icone4} alt="sair" />
          <p>Sair</p>
        </button>
      </div>
      <div className="Main_register">
        <header>
          <p className="Tops_Title">Cadastro de Paciente</p>
          <div className="Barr_Fina"></div>
        </header>
        <div className="Infor_Title">
          <p className="Tops_Title">Histórico do paciente</p>
          <div className="Line"></div>
        </div>
        <div className="Taba_Alcool">
          <div className="Historico_De_Taba">
            <p>Histórico de tabagismo</p>
            <div className="Taba_Check">
              <input type="radio" name="tabagismo" value="sim" />
              <p>Sim</p>
              <input type="radio" name="tabagismo" value="nao" className="Checkbox_Not" />
              <p>Não</p>
            </div>
          </div>
          <div className="Historico_De_Consumo_De_Alcool">
            <p>Histórico de consumo de álcool</p>
            <div className="Consumo_Check">
              <input type="radio" name="alcool" value="sim" />
              <p>Sim</p>
              <input type="radio" name="alcool" value="nao" className="Checkbox_Not" />
              <p>Não</p>
            </div>
          </div>
          <div className="Paciente_Diabetes">
            <p>Paciente tem diabetes? </p>
            <div className="Paciente_Check">
              <input type="radio" name="diabetes" value="sim" />
              <p>Sim</p>
              <input type="radio" name="diabetes" value="nao" className="Checkbox_Not" />
              <p>Não</p>
              <p>Se sim, qual? <input type="text" className="Text_Diabete" /></p>
            </div>
          </div>
        </div>
        <div className="Div_Main_Paciente">
          <div className="Paciente_Hipertensão">
            <p>Paciente tem hipertensão? </p>
            <div className="Paciente_Check">
              <input type="radio" name="hipertensao" value="sim" />
              <p>Sim</p>
              <input type="radio" name="hipertensao" value="nao" className="Checkbox_Not" />
              <p>Não</p>
            </div>
          </div>
          <div className="Paciente_retinopatia_diabéticao">
            <p>Paciente tem retinopatia diabética?</p>
            <div className="Paciente_Check">
              <input type="radio" name="retinopatia" value="sim" />
              <p>Sim</p>
              <input type="radio" name="retinopatia" value="nao" className="Checkbox_Not" />
              <p>Não</p>
            </div>
          </div>
        </div>
        <div className="Div_Paciente_Glaucoma_Consulta">
          <div className="Paciente_Glaucoma">
            <p>Paciente tem glaucoma ou risco de glaucoma?</p>
            <div className="Paciente_Check">
              <input type="radio" name="glaucoma" value="sim" />
              <p>Sim</p>
              <input type="radio" name="glaucoma" value="nao" className="Checkbox_Not" />
              <p>Não</p>
            </div>
          </div>
          <div className="Paciente_Check_Date">
            <p>Última consulta oftamologica feita</p>
            <input
              type="date"
              value={data_oftamologia}
              onChange={(e) => setData_oftamologia(e.target.value)}
              className={`Date_Oftamologica ${submitted && data_oftamologia.trim() === "" ? "erro-input" : ""}`}
            />
            <span className={`Verification_input ${submitted && data_oftamologia.trim() === "" ? "mostrar-erro" : ""}`}>
              Obrigatório o preenchimento
            </span>
          </div>
        </div>
        <div className="Main_Condicoe_Medicas">
          <p>Outras condições médicas</p>
          <textarea className="Condicoes_medicas"></textarea>
        </div>
        <div className="Main_Sintomas">
          <p>Possui algum sintoma?</p>
          <textarea className="Input_Sintoma"></textarea>
        </div>
        <div className="Button_Div1">
          <button type="button" className="But_Volt" onClick={Click_New_Paciente}>Voltar</button>
          <button type="submit" className="But_Pro" onClick={handleSave}>Salvar</button>
        </div>
      </div>
    </div>
  );
}

export default Historico_Do_Paciente;
