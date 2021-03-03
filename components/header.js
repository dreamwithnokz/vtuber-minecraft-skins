import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Title = styled.h1`
  margin: 0;
  color: #ffffff;
  font-size: 2em;
  text-align: center;
  margin-bottom: 0.2em;
  font-weight: bold;
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
    <Description>
      This web app uses mc-heads to fetch the skins, so if it&apos;s showing the
      default skin, that is due to the limitations of the API.
    </Description>
  </Wrapper>
);

export default Header;
