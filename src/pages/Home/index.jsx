import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./styles.css";
import logo from "./Img/image16.png";
import Rastrei from "./Img/image 37.png"

function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [submitted, setSubmitted]  = useState("")
  const navigate = useNavigate();
  
  const HandLogin = ()=> {
    setSubmitted(true)
    if(email.trim() === "" || password.trim() === ""){
      setError("Usuário e/ou senha incorreto(s) tente novamente")
    } else{
      setError()
      navigate("/Dashboard");
    }
  }
  return (
     <div className="App">
        <div className="Img_Login">
          <img src={logo} alt="Login"/>
        </div>
        <div className="Login_Main">
           <h1>Uni<span>Rastrei<div className="Rastrei_Icone"> <img src={Rastrei} /></div></span></h1>
           {submitted && error && (
            <div className="F_span">
              <span className="Text_Error">{error}</span>
            </div>
           )}
        <div>
          <p>Login</p>
          <input type="email"
          name="email"
          id="Email"
          value= {email}
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <p>Senha</p>
          <div>
            <input type="password" 
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-container"/>
            <button type="button"></button>
          </div>
          <a href="#" className="forgot-password">Esqueceu sua senha?</a>
        </div>
        <button type="submit" className="Login-button" onClick={HandLogin}>Entrar</button>
      </div>
    </div>
  );
}

export default Home;
