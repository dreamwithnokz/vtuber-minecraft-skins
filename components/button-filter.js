import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Title = styled.h1`
  margin: 0;
  color: #ffffff;
  font-size: 2em;
  text-align: center;
  margin-bottom: 0.2em;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  margin: 1rem 1rem 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
`;

const StyledButton = styled(Button)`
  font-size: 1em;
  flex-grow: 1;
  margin: 2px;
`;

const ButtonFilter = () => (
  <>
    <Title>Hololive</Title>
    <ButtonWrapper>
      <StyledButton variant="outline-primary">Tokoyami Towa</StyledButton>
      <StyledButton variant="outline-primary">Rushia Uruha</StyledButton>
      <StyledButton variant="outline-primary">Gawr Gura</StyledButton>
      <StyledButton variant="outline-primary">Ayame Nakiri</StyledButton>
      <StyledButton variant="outline-primary">Minato Aqua</StyledButton>
    </ButtonWrapper>
    <Title>Nijisanji</Title>
    <ButtonWrapper>
      <StyledButton variant="outline-danger">Rindou Mikoto</StyledButton>
      <StyledButton variant="outline-danger">Lize Helesta</StyledButton>
      <StyledButton variant="outline-danger">Tsukina Mito</StyledButton>
      <StyledButton variant="outline-danger">Yuki Chihiro</StyledButton>
      <StyledButton variant="outline-danger">Higuchi Kaede</StyledButton>
    </ButtonWrapper>
  </>
);

export default ButtonFilter;
