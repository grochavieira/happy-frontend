import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Container } from "../styles/pages/user-registration";
import {
  InputBlock,
  ConfirmButton,
  Fieldset,
  Form,
  InputPasswordBlock,
} from "../styles/global";
import Panel from "../components/Panel";
import GoBack from "../components/GoBack";
import { toast } from "react-toastify";
import api from "../services/api";

export default function UserRegistration() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleUserRegistration() {
    if (password.length >= 6) {
      if (password === confirmPassword) {
        const { data } = await api.post("/users", {
          name,
          email,
          password,
        });

        console.log(data.error);

        if (data.success) {
          toast.success(data.success);
          history.push("/login");
        } else if (data.error) {
          toast.warn(data.error);
        }
      } else {
        toast.warn("as senhas não batem!");
      }
    } else {
      toast.warn("senha precisa ter no mínimo 6 carácteres!");
    }
  }

  return (
    <>
      <GoBack route="/login" />
      <Container>
        <Panel />
        <Form>
          <Fieldset>
            <legend>Cadastro de Usuário</legend>
            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                id="name"
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
          </Fieldset>

          <ConfirmButton onClick={handleUserRegistration}>
            Cadastrar
          </ConfirmButton>
        </Form>
      </Container>
    </>
  );
}
