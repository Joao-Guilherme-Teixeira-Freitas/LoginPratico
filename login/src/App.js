import { useState } from "react";

import logo from "./assets/pratico_logo_nome_baixo arrumada.png";
import "./styles.css";

const montanhaPicture = new URL("./assets/montanhaPicture.jpg", import.meta.url)




function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <body>



      <div className="container">

        <div className="main-container">
        
          <div className="container-login">

            <div className="wrap-login">
              <form className="login-form">
                <span className="login-form-title"> </span>

                <span className="login-form-title">
                  <img src={logo} alt="Prático Login" />
                </span>


                <div className="wrap-input">
                  <input
                    className={email !== "" ? "has-val input" : "input"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                  <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                  <input
                    className={password !== "" ? "has-val input" : "input"}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                  <span className="focus-input" data-placeholder="Password"></span>
                </div>

                <div className="container-login-form-btn">
                  <button className="login-form-btn">Login</button>
                </div>
                <nav>

                  <p className="copyright text-right">
                    ©Prático 2022
                  </p>
                </nav>
              </form>
            </div>
          </div>
        </div>

        
      </div>



    </body>

  );
}

export default App;