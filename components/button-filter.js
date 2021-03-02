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

const ButtonFilter = ({
  vtubers,
  selectedMinecraftUUID,
  onSelectedMinecraftUUID,
}) => {
  function handleSelectedMinecraftUUI(e) {
    onSelectedMinecraftUUID(e.target.getAttribute('value'));
  }

  const renderButtons = (affiliation, data) => (
    <>
      <Title>{affiliation}</Title>
      <ButtonWrapper>
        {data.map((vtuber) => (
          <StyledButton
            variant={
              vtuber.gender === 'f' ? 'outline-danger' : 'outline-primary'
            }
            key={vtuber.minecraftUUID}
            value={vtuber.minecraftUUID}
            active={
              selectedMinecraftUUID === vtuber.minecraftUUID ? 'active' : ''
            }
            onClick={handleSelectedMinecraftUUI}
          >
            {vtuber.name}
          </StyledButton>
        ))}
      </ButtonWrapper>
    </>
  );

  return (
    <>
      {renderButtons('Hololive', vtubers.hololive)}
      {renderButtons('Nijisanji', vtubers.nijisanji)}
      {renderButtons('Independent', vtubers.independent)}
    </>
  );
};

export default ButtonFilter;
