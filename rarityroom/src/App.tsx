import "./App.css";

function App() {
  return (
    <main className="login-page">
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      <section className="login-container">
        <div className="login-showcase">
          <div className="brand">
            <span className="brand-symbol">✦</span>
            <span>RARITYROOM</span>
          </div>

          <div className="showcase-content">
            <span className="eyebrow">COLECIONE. ENCONTRE. CONQUISTE.</span>

            <h1>
              Seu universo
              <br />
              <span>geek</span> começa
              <br />
              aqui.
            </h1>

            <p>
              Encontre itens raros, edições limitadas e colecionáveis que
              merecem um lugar especial na sua coleção.
            </p>

            <div className="collection-cards">
              <div className="mini-card">
                <span className="mini-icon">◈</span>

                <div>
                  <strong>Itens raros</strong>
                  <small>Peças exclusivas</small>
                </div>
              </div>

              <div className="mini-card">
                <span className="mini-icon">✦</span>

                <div>
                  <strong>Coleções</strong>
                  <small>Seu acervo em um só lugar</small>
                </div>
              </div>
            </div>
          </div>

          <div className="showcase-footer">
            <span>EST. 2026</span>

            <span className="footer-line"></span>

            <span>FOR COLLECTORS</span>
          </div>
        </div>

        <div className="login-box">
          <div className="login-header">
            <div className="login-icon">♜</div>

            <h2>Bem-vindo de volta</h2>

            <p>
              Entre na sua conta e continue
              <br />
              sua jornada de colecionador.
            </p>
          </div>

          <form className="login-form">
            <div className="input-group">
              <label htmlFor="email">E-MAIL</label>

              <div className="input-wrapper">
                <span className="input-icon">@</span>

                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <div className="password-label">
                <label htmlFor="password">SENHA</label>

                <a href="#">Esqueceu a senha?</a>
              </div>

              <div className="input-wrapper">
                <span className="input-icon">◉</span>

                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <label className="remember">
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              Lembrar de mim
            </label>

            <button type="submit" className="login-button">
              <span>ENTRAR NA RARITYROOM</span>

              <span className="button-arrow">→</span>
            </button>
          </form>

          <p className="register">
            Ainda não é colecionador?
            <a href="#"> Criar minha conta</a>
          </p>

          <div className="security">
            <span>◆</span>
            COMPRA SEGURA &nbsp;•&nbsp; COLECIONADORES VERIFICADOS
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
