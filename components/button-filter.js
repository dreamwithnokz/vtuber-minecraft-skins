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

  @media (min-width: 768px) {
    margin: 1rem 4rem 2rem 4rem;
  }
`;

const StyledButton = styled(Button)`
  font-size: 1em;
  flex-grow: 1;
  margin: 2px;
`;

const ButtonFilter = ({ vtubers, selectedMinecraftUUID, onSelected }) => {
  const handleSelected = (e) =>
    onSelected(e.target.getAttribute('name'), e.target.getAttribute('value'));

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
            name={vtuber.name}
            active={
              selectedMinecraftUUID === vtuber.minecraftUUID ? 'active' : ''
            }
            onClick={handleSelected}
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
