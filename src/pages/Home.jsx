import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  background-color: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const Content = styled.div`
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    text-align: left;
  }
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.textLight};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;

const ImageContainer = styled(motion.div)`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Home = () => {
  return (
    <HeroSection>
      <Container>
        <Content>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Olá, eu sou João Santos
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desenvolvedor Full Stack
          </Subtitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Apaixonado por criar soluções web modernas e eficientes.
            Especialista em React, Node.js e desenvolvimento full-stack.
          </Description>
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <SocialLink href="https://github.com/JoaoSantosCodes" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/jo%C3%A3o-santos-5a59a567/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://twitter.com/JoaoSantosCodes" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
          </SocialLinks>
          <CTAButton
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Entre em Contato
          </CTAButton>
        </Content>
        <ImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src="/profile-image.png" alt="João Santos" />
        </ImageContainer>
      </Container>
    </HeroSection>
  );
};

export default Home; 