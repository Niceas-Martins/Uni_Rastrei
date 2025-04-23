import { useNavigate } from "react-router-dom";
import "./Style(ExameDoPaciente).css"; // Importa o CSS

function ExameDoPaciente() {
  const navigate = useNavigate();
   
  const Click_Paciente = () => {
    navigate("/Paciente");
  };

  const exames = [
    "Avaliação de Fundo de Olho",
    "Mapeamento de Retina",
    "Pentacam",
    "Avaliação do fundo de olho",
    "Paquimetria ultrassônica",
  ];

  return (
    <div className="container">
      <h1>Exames do Paciente</h1>

      {/* Informações do Paciente */}
      <div className="info-box">
        <div className="info-group">
          <p><strong>Nome:</strong> Cecília Oliveira Martins</p>
          <p><strong>Data de nascimento:</strong> 23/04/2000</p>
          <p><strong>Idade:</strong> 24 anos</p>
        </div>
        <div className="info-group">
          <p><strong>Início do tratamento:</strong> 02/08/2022</p>
          <p><strong>Tipo de tratamento:</strong> Acompanhamento</p>
          <p><strong>Médico:</strong> Dr. João Oliveira CRM: 12345-SP Oftalmologista</p>
        </div>
      </div>

      <div className="exam-list">
        {exames.map((exame, index) => (
          <div key={index} className="exam-item">
            <span>{exame}</span>
            <button className="view-button" onClick={() => navigate(`/Exame/${index}`)}>Ver exame</button>
          </div>
        ))}
              <div className="Div_Button"><button className="Back_button" onClick={Click_Paciente}>Voltar</button></div>
      </div>
    </div>
  );
}

export default ExameDoPaciente;



