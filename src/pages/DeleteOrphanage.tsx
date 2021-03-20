import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Container, Content, Main } from "../styles/pages/delete-orphanage";
import { FiTrash } from "react-icons/fi";
import deleteImg from "../images/exclude.svg";
import { Orphanage, OrphanageParams } from "./Orphanage";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export default function SuccessfulRegistration() {
  const history = useHistory();
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();

  useEffect(() => {
    async function loadOrphanage() {
      const { data } = await api.get(`/orphanages/${params.id}`);
      setOrphanage(data);
    }
    loadOrphanage();
  }, [params.id]);

  const handleOrphanageDelete = async () => {
    try {
      const response = await api.delete(`/orphanages/${params.id}`);
      console.log(response);
      toast.success("Orfanato excluído com sucesso");
      history.push("/");
    } catch (error) {
      toast.error("Não foi possível deletar o orfanato!");
    }
  };

  if (!orphanage) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <Container>
        <Main>
          <h1>Excluir!</h1>
          <p>
            Você tem certeza que quer <br /> excluir {orphanage.name}?
          </p>
          <div>
            <button
              onClick={() => {
                history.push("/");
              }}
            >
              Voltar para o mapa
            </button>

            <button onClick={handleOrphanageDelete}>
              <FiTrash />
              Excluir
            </button>
          </div>
        </Main>
        <Content>
          <img src={deleteImg} alt="Excluir" />
        </Content>
      </Container>
    </>
  );
}
