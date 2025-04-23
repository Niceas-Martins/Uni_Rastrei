import "./style(Novo_Paciente).css";
import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Icone from "./Img/dashboard (2).png";
import Icone1 from "./Img/calendar (9).png";
import Icone2 from "./Img/multiple-users-silhouette (5).png";
import Icone3 from "./Img/user (6).png";
import Icone4 from "./Img/sair 1.png";

function Cadastro() {
  const navigate = useNavigate();
  const [sexo, setSexo] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [nomecontato, setNomeContato] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [nacionalidades, setNacionalidades] = useState([]);
  const [cep, setCep] = useState("");
  const [data_nascimento, setData_Nascimento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name")
      .then((res) => {
        const nomes = res.data
          .map((pais) => pais.name.common)
          .sort((a, b) => a.localeCompare(b));
        setNacionalidades(nomes);
      })
      .catch((err) => console.error("Erro ao carregar nacionalidades", err));
  }, []);

  const Back_Login = () => {
    navigate("/");
  };

  const Click_Back_Dashboard = () => {
    navigate("/Dashboard");
  };

  const Click_Calendario = () => {
    navigate("/Calendario");
  };

  const Click_Paciente = () => {
    navigate("/Paciente");
  };

  const Click_Historico_Do_Paciente = () => {
    setSubmitted(true);

    if (
      nome.trim() === "" ||
      cpf.trim() === "" ||
      telefone.trim() === "" ||
      nacionalidade.trim() === "" ||
      cep.trim() === "" ||
      bairro.trim() === "" ||
      cidade.trim() === ""
    ) {
      return;
    }

    navigate("/Historico_Do_Paciente");
  };

  return (
    <div className="Main_Patient">
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
            <button type="button">
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

      <div className="Main_register">
        <header>
          <p className="Tops_Title">Cadastro de Paciente</p>
          <div className="Barr_Fina"></div>
        </header>

        <div className="Infor_Title">
          <p className="Tops_Title">Informações pessoais </p>
          <div className="Line"></div>
        </div>

        <label className="N_C">
          <div className="Name_Top">
            <p>Nome completo </p>
            <input
              type="text"
              value={nome}
              className={`Nome_Completo ${
                submitted && nome.trim() === "" ? "erro-input" : ""
              }`}
              onChange={(e) => setNome(e.target.value)}
            />
            <span
              className={`Verification_input ${
                submitted && nome.trim() === "" ? "mostrar-erro" : ""
              }`}
            >
              Obrigatório o preenchimento
            </span>
          </div>

          <div className="CPF_Top">
            <p>CPF</p>
            <InputMask
              mask="999.999.999-99"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  type="text"
                  className={`Input_Telefone ${
                    submitted && cpf.trim() === "" ? "erro-input" : ""
                  }`}
                />
              )}
            </InputMask>
            <span
              className={`Verification_input ${
                submitted && cpf.trim() === "" ? "mostrar-erro" : ""
              }`}
            >
              Obrigatório o preenchimento
            </span>
          </div>
        </label>

        <label>
          <div className="Data_Tele_Sexo">
            <div className="Data_Top">
              <p>Data de nascimento</p>
              <input type="date" 
               value={data_nascimento}
               onChange={(e) => setData_Nascimento(e.target.value)}
              className={`Input_Data ${
                submitted && data_nascimento.trim() === "" ? "erro-input" : ""
              }`} />
              <span  className={`Verification_input ${
                  submitted && data_nascimento.trim() === "" ? "mostrar-erro" : ""
                }`}> Obrigatório</span>
            </div>

            <div className="Telefone_Top">
              <p>Telefone</p>
              <InputMask
                mask="(99) 99999-9999"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="text"
                    className={`Input_Telefone ${
                      submitted && telefone.trim() === "" ? "erro-input" : ""
                    }`}
                  />
                )}
              </InputMask>
              <span
                className={`Verification_input ${
                  submitted && telefone.trim() === "" ? "mostrar-erro" : ""
                }`}
              >
                Obrigatório o preenchimento
              </span>
            </div>

            <div className="Sexo_Top">
              <p>Sexo</p>
              <select
                className="Input_Sexo"
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
              >
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
            </div>
          </div>
        </label>

        <label>
          <div className="Email_Top">
            <p>E-mail</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`Input_Email ${
                submitted && email.trim() === "" ? "erro-input" : ""
              }`}
            />
            <span
              className={`Verification_input ${
                submitted && email.trim() === "" ? "mostrar-erro" : ""
              }`}
            >
              Obrigatório o preenchimento
            </span>
          </div>
        </label>

        <label>
          <div className="Nome_Mae">
            <p>Nome da mãe </p>
            <input type="text" className="Input_Nome_Mae" />
          </div>
          <div className="Estado_Civil_Top">
            <p>Estado Civil</p>
            <input type="text" className="Input_Estado_Civil" />
          </div>
        </label>

        <label>
          <div className="Outro_Contato">
            <p>Outro contato</p>
            <input type="text" className="Input_Outro_Contato" />
          </div>
          <div className="Nome_do_Contato">
            <p>Nome do contato/ responsável</p>
            <input
              type="text"
              value={nomecontato}
              onChange={(e) => setNomeContato(e.target.value)}
              className={`Input_Nome_do_Contato ${
                submitted && nomecontato.trim() === "" ? "erro-input" : ""
              }`}
            />
            <span
              className={`Verification_input ${
                submitted && nomecontato.trim() === "" ? "mostrar-erro" : ""
              }`}
            >
              Obrigatório o preenchimento
            </span>
          </div>
          <div className="Menor_Top">
            <input type="checkbox" name="Menor_de_idade" />
            <p>Menor de idade</p>
          </div>
        </label>

        <label>
          <div className="Naturalidade_Top">
            <p>Naturalidade</p>
            <input type="text" className="Input_Naturalidade" />
          </div>

          <div className="Nacionalidade_Top">
            <p>Nacionalidade</p>
            <select
              value={nacionalidade}
              onChange={(e) => setNacionalidade(e.target.value)}
              className={`Input_Nacionalidade ${
                submitted && nacionalidade.trim() === "" ? "erro-input" : ""
              }`}
            >
              <option value="">Selecione a nacionalidade</option>
              {nacionalidades.map((pais, index) => (
                <option key={index} value={pais}>
                  {pais}
                </option>
              ))}
            </select>
            <span
              className={`Verification_input ${
                submitted && nacionalidade.trim() === "" ? "mostrar-erro" : ""
              }`}
            >
              Obrigatório o preenchimento
            </span>
          </div>
        </label>

        <div>
          <div className="Ender_Title">
            <p className="Tops_Title">Endereço</p>
            <div className="Line"></div>
          </div>

          <label>
            <div className="CEP_Top">
              <p>CEP</p>
              <InputMask
                mask="99999-999"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="text"
                    className={`Input_CEP ${
                      submitted && cep.trim() === "" ? "erro-input" : ""
                    }`}
                  />
                )}
              </InputMask>
              <span
                className={`Verification_input ${
                  submitted && cep.trim() === "" ? "mostrar-erro" : ""
                }`}
              >
                Obrigatório o preenchimento
              </span>
            </div>
            <div className="Logradouro_Top">
              <p>Logradouro</p>
              <input type="text" className="Input_logradouro" />
            </div>
            <div className="Bairro_Top">
              <p>Bairro</p>
              <input
                type="text"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                className={`Input_Bairro ${
                  submitted && bairro.trim() === "" ? "erro-input" : ""
                }`}
              />
              <span
                className={`Verification_input ${
                  submitted && bairro.trim() === "" ? "mostrar-erro" : ""
                }`}
              >
                Obrigatório o preenchimento
              </span>
            </div>
          </label>

          <label>
            <div className="Complemento_Top">
              <p>Complemento</p>
              <input type="text" className="Input_Complemento" />
            </div>
            <div className="Cidade_Top">
              <p>Cidade</p>
              <input type="text" 
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className={`Input_Cidade ${
                submitted && cidade.trim() === "" ? "erro-input" : ""
              }`} />
              <span  className={`Verification_input ${
                  submitted && cidade.trim() === "" ? "mostrar-erro" : ""
                }`}>
                Obrigatório o preenchimento
              </span>
            </div>
            <div className="UF_Top">
              <p>UF</p>
              <input type="text" className="Input_UF" />
            </div>
          </label>
        </div>

        <div className="Button_Div">
          <button
            type="submit"
            className="But_Pro"
            onClick={Click_Historico_Do_Paciente}
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
