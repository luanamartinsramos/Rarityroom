import "./Register.css";

function Register() {
  return (
    <main className="register-page">
      <div className="register-glow register-glow-one"></div>
      <div className="register-glow register-glow-two"></div>

      <section className="register-container">
        <div className="register-header">
          <div className="register-brand">
            <span className="register-brand-symbol">✦</span>
            <span>RARITYROOM</span>
          </div>

          <div className="register-title">
            <span className="register-eyebrow">
              JUNTE-SE AOS COLECIONADORES
            </span>

            <h1>
              Crie sua
              <br />
              <span>conta.</span>
            </h1>

            <p>
              Entre para a RarityRoom e descubra um universo de itens raros,
              exclusivos e colecionáveis.
            </p>
          </div>
        </div>

        <form className="register-form">
          <div className="form-row">
            <div className="register-input-group">
              <label htmlFor="name">NOME COMPLETO</label>
              <input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className="register-input-group">
              <label htmlFor="username">NOME DE USUÁRIO</label>
              <input
                id="username"
                type="text"
                placeholder="@seunome"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="register-input-group">
              <label htmlFor="email">E-MAIL</label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="register-input-group">
              <label htmlFor="phone">TELEFONE</label>
              <input
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="register-input-group">
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                placeholder="000.000.000-00"
                required
              />
            </div>

            <div className="register-input-group">
              <label htmlFor="birthDate">DATA DE NASCIMENTO</label>
              <input id="birthDate" type="date" required />
            </div>
          </div>

          <div className="register-input-group">
            <label htmlFor="password">SENHA</label>
            <input
              id="password"
              type="password"
              placeholder="Crie uma senha segura"
              required
            />
          </div>

          <div className="register-input-group">
            <label htmlFor="confirmPassword">CONFIRMAR SENHA</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Digite sua senha novamente"
              required
            />
          </div>

          <label className="terms">
            <input type="checkbox" required />
            <span className="terms-checkbox"></span>

            <span>
              Concordo com os <a href="#">Termos de Uso</a> e a{" "}
              <a href="#">Política de Privacidade</a>.
            </span>
          </label>

          <button type="submit" className="register-button">
            <span>CRIAR MINHA CONTA</span>
            <span className="register-arrow">→</span>
          </button>

          <p className="already-account">
            Já possui uma conta? <a href="/">Entrar na RarityRoom</a>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Register;
