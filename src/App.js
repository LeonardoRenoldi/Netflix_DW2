import "./styles.css";

export default function App() {
  return (
    <div class="main-content">
      <div class="loginBody">
        <div class="loginBox">
          <h2>Entrar</h2>
          <form>
            <div class="inputBox">
              <input
                type="email"
                placeholder="Email ou Número de telefone"
              ></input>
            </div>
          </form>

          <div class="inputBox">
            <input type="password" placeholder="Senha"></input>
          </div>

          <div>
            <button class="submit">Entrar</button>
          </div>
        </div>

        <div class="support">
          <div class="remember">
            <span>
              <input class="checkBox" type="checkbox"></input>
              <span>Lembre-se de mim</span>
            </span>
          </div>
          <div class="help">
            <a href="#">Precisa de ajuda?</a>
          </div>
        </div>
        <div class="sign_up">
          <p>
            Novo por aqui? <a href="#">Assine agora.</a>
          </p>
        </div>
        <div class="terms">
          <p>
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô. <a href="#">Saiba mais</a>
          </p>
        </div>
      </div>
    </div>
  );
}
