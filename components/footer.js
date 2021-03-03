import styled from 'styled-components';

const Link = styled.a`
  color: #f01f1f;

  &:hover {
    color: #f01f1f;
  }
`;

const FooterContent = styled.footer`
  background-color: #0d0c0c;
  width: 100%;
  padding: 1.25em 0;
  bottom: 0;
  border-top: 1px solid #681212;
  color: #939393;
`;

const Footer = () => (
  <FooterContent className="text-center">
    You may create an issue or submit a pr if you want me to add a vtuber in the
    list.
    <br />
    <Link
      href="https://github.com/DreamWithNokz/vtuber-minecraft-skins"
      target="_blank"
      rel="noopener noreferrer"
    >
      Github Repo
    </Link>
    <br />
    <Link
      href="https://www.dreamwithnokz.dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      dreamwithnokz.dev
    </Link>
  </FooterContent>
);

export default Footer;
