import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, RememberContainer } from "../styles/pages/login";
import {
  InputBlock,
  ConfirmButton,
  Fieldset,
  Form,
  InputPasswordBlock,
} from "../styles/global";
import Panel from "../components/Panel";
import GoBack from "../components/GoBack";
import AuthContext from "../contexts/auth";
import crypto from "crypto-js";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const history = useHistory();
  const { signIn, signed } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginSaved, setIsLoginSaved] = useState(false);
  console.log(signed);

  useEffect(() => {
    function getUserLogin() {
      const storagedLoginEmail = localStorage.getItem("@happy-login-email");
      const storagedLoginPassword = localStorage.getItem(
        "@happy-login-password"
      );

      if (storagedLoginEmail && storagedLoginPassword) {
        const crypto_key = process.env.REACT_APP_CRYPTO_KEY || "";
        const bytes = crypto.AES.decrypt(
          JSON.parse(storagedLoginPassword),
          crypto_key
        );
        const decryptedPassword = bytes.toString(crypto.enc.Utf8);
        setEmail(JSON.parse(storagedLoginEmail));
        setPassword(decryptedPassword);
        setIsLoginSaved(true);
      }
    }

    getUserLogin();
  }, []);

  async function handleLogin() {
    const isLoginSucceded = await signIn({ email, password });
    if (isLoginSucceded) {
      if (isLoginSaved) {
        const crypto_key = process.env.REACT_APP_CRYPTO_KEY || "";
        const encryptedPassword = crypto.AES.encrypt(
          password,
          crypto_key
        ).toString();
        localStorage.setItem("@happy-login-email", JSON.stringify(email));
        localStorage.setItem(
          "@happy-login-password",
          JSON.stringify(encryptedPassword)
        );
      } else {
        localStorage.removeItem("@happy-login-email");
        localStorage.removeItem("@happy-login-password");
      }
    }
  }

  return (
    <>
      <GoBack route="/" />
      <Container>
        <Panel />
        <Form>
          <Fieldset>
            <legend>Fazer Login</legend>
            <InputBlock>
              <label htmlFor="email">E-mail</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                id="email"
              />
            </InputBlock>
            <InputPasswordBlock>
              <label htmlFor="password">Senha</label>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FiEyeOff
                    onClick={() => setShowPassword(!showPassword)}
                    size={20}
                    color="#15C3D6"
                  />
                ) : (
                  <FiEye
                    onClick={() => setShowPassword(!showPassword)}
                    size={20}
                  />
                )}
              </div>
            </InputPasswordBlock>
          </Fieldset>
          <RememberContainer>
            <span>
              <input
                checked={isLoginSaved}
                onChange={(e) => setIsLoginSaved(e.target.checked)}
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label htmlFor="remember"> Lembrar-me</label>
            </span>
            <p>
              <Link to="forgot-password"> Esqueci minha senha </Link>{" "}
            </p>
          </RememberContainer>
          <ConfirmButton onClick={handleLogin}>Entrar</ConfirmButton>
          <strong
            onClick={() => history.push("/user-registration")}
            className="register"
          >
            Sem Cadastro?
          </strong>
        </Form>
      </Container>
    </>
  );
}
