import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./register.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    // Lógica temporária enquanto não conectamos o backend, para simular o registro e redirecionar para a página home
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    const existingUser = localStorage.getItem("user");

    if (existingUser) {
      const user = JSON.parse(existingUser);

      if (user.email === email) {
        setError("Já existe uma conta cadastrada com este e-mail.");
        return;
      }
    }

    const user = {
      name,
      username,
      email,
      phone,
      cpf,
      birthDate,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    localStorage.setItem("isLogged", "true");

    navigate("/home");
  }

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

        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-row">
            <div className="register-input-group">
              <label htmlFor="name">NOME COMPLETO</label>

              <input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>

            <div className="register-input-group">
              <label htmlFor="username">NOME DE USUÁRIO</label>

              <input
                id="username"
                type="text"
                placeholder="@seunome"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="register-input-group">
              <label htmlFor="phone">TELEFONE</label>

              <input
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
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
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
                required
              />
            </div>

            <div className="register-input-group">
              <label htmlFor="birthDate">DATA DE NASCIMENTO</label>

              <input
                id="birthDate"
                type="date"
                value={birthDate}
                onChange={(event) => setBirthDate(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="register-input-group">
            <label htmlFor="password">SENHA</label>

            <input
              id="password"
              type="password"
              placeholder="Crie uma senha segura"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="register-input-group">
            <label htmlFor="confirmPassword">CONFIRMAR SENHA</label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Digite sua senha novamente"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>

          {error && <p className="register-error">{error}</p>}

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
            Já possui uma conta? <Link to="/login">Entrar na RarityRoom</Link>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Register;
