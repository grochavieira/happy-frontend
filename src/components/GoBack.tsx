import React from "react";
import { Container } from "../styles/components/go-back";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

interface GoBackProps {
  route: string;
}

export default function GoBack({ route }: GoBackProps) {
  const history = useHistory();
  return (
    <>
      <Container onClick={() => history.push(`${route}`)}>
        <FiArrowLeft size={24} />
      </Container>
    </>
  );
}
