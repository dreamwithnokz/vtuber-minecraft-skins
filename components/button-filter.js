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

const renderButtons = (affiliation, vtubers) => (
  <>
    <Title>{affiliation}</Title>
    <ButtonWrapper>
      {vtubers.map((vtuber) => (
        <StyledButton
          variant={vtuber.gender == 'f' ? 'outline-danger' : 'outline-primary'}
          key={vtuber.minecraftUUID}
          value={vtuber.minecraftUUID}
        >
          {vtuber.name}
        </StyledButton>
      ))}
    </ButtonWrapper>
  </>
);

const ButtonFilter = ({ vtubers }) => (
  <>
    {renderButtons('Hololive', vtubers.hololive)}
    {renderButtons('Nijisanji', vtubers.nijisanji)}
    {renderButtons('Independent', vtubers.independent)}
  </>
);

export default ButtonFilter;
