import React, { useState } from "react";
import Panel from "../components/Panel";
import GoBack from "../components/GoBack";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Container } from "../styles/pages/password-reset";
import {
  Form,
  ConfirmButton,
  Fieldset,
  InputBlock,
  InputPasswordBlock,
} from "../styles/global";
import api from "../services/api";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const history = useHistory();

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async () => {
    if (password.length >= 6) {
      if (password === confirmPassword) {
        const { data } = await api.post("/password-reset", {
          token,
          email,
          password,
        });

        if (data.success) {
          toast.success(data.success);
          history.push("/login");
        } else if (data.error) {
          toast.warn(data.success);
        }
      } else {
        toast.warn("as senhas não batem!");
      }
    } else {
      toast.warn("senha precisa ter no mínimo 6 carácteres!");
    }
  };

  return (
    <>
      <GoBack route="/login" />
      <Container>
        <Panel />
        <Form>
          <Fieldset>
            <legend>Redefinição de senha</legend>
            <p>
              Escolha uma nova senha para você acessar o dashboard do Happy.
            </p>
            <InputBlock>
              <label htmlFor="email">Token</label>
              <input
                onChange={(e) => setToken(e.target.value)}
                value={token}
                type="text"
                id="email"
              />
            </InputBlock>
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
              <label htmlFor="new-password">Nova Senha</label>
              <div>
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showNewPassword ? (
                  <FiEyeOff
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    size={20}
                    color="#15C3D6"
                  />
                ) : (
                  <FiEye
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    size={20}
                  />
                )}
              </div>
            </InputPasswordBlock>
            <InputPasswordBlock>
              <label htmlFor="confirm-password">Confirmar Senha</label>
              <div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {showConfirmPassword ? (
                  <FiEyeOff
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    size={20}
                    color="#15C3D6"
                  />
                ) : (
                  <FiEye
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    size={20}
                  />
                )}
              </div>
            </InputPasswordBlock>
            <ConfirmButton onClick={handleResetPassword}>Entrar</ConfirmButton>
          </Fieldset>
        </Form>
      </Container>
    </>
  );
}
