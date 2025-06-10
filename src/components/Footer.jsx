import styled from '@emotion/styled';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.background};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: 2rem 0;
  margin-top: 4rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <SocialLinks>
          <SocialLink href="https://github.com/JoaoSantosCodes" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/jo%C3%A3o-santos-5a59a567/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://twitter.com/JoaoSantosCodes" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialLink>
          <SocialLink href="mailto:joaosantos.dev@gmail.com">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
        <Copyright>
          © {new Date().getFullYear()} João Santos. Todos os direitos reservados.
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 