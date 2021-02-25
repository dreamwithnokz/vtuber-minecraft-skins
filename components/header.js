import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  margin: 0;
  color: #ffffff;
  font-size: 2em;
  text-align: center;
  margin-bottom: 0.2em;
`;

const Description = styled.p`
  margin: 0;
  color: #777777;
  font-size: 1em;
  text-align: center;
`;

const Header = () => (
  <Wrapper>
    <Title>VTuber Minecraft Skin</Title>
    <Description>
      Choose a VTuber below to show the minecraft skin they are using.
    </Description>
  </Wrapper>
);

export default Header;
