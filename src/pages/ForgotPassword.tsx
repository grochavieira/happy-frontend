import React, { useState } from "react";
import Panel from "../components/Panel";
import GoBack from "../components/GoBack";
import { Container } from "../styles/pages/forgot-password";
import { Form, InputBlock, ConfirmButton, Fieldset } from "../styles/global";
import { toast } from "react-toastify";
import api from "../services/api";
import Loading from "../components/Loading";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    setLoading(true);
    const { data } = await api.post("/forgot-password", { email });
    setLoading(false);
    if (data.success) {
      toast.success(data.success);
    } else if (data.error) {
      toast.warn(data.error);
    }
  };

  return (
    <>
      <GoBack route="/login" />
      {loading && <Loading />}
      <Container>
        <Panel />
        <Form>
          <Fieldset>
            <legend>Esqueci a senha</legend>
            <p>
              Sua redefinição de senha será enviada para o e-mail cadastrado
            </p>
            <InputBlock>
              <label htmlFor="email">E-mail</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
              />
            </InputBlock>
            <ConfirmButton onClick={handleForgotPassword}>Enviar</ConfirmButton>
          </Fieldset>
        </Form>
      </Container>
    </>
  );
}
