import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: ${props => props.theme.fonts.body};
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        line-height: 1.6;
        transition: all 0.3s ease;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: ${props => props.theme.fonts.heading};
        font-weight: 600;
        line-height: 1.3;
      }

      a {
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: ${props => props.theme.colors.accent};
        }
      }

      button {
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
        font-family: inherit;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;

        @media (min-width: ${props => props.theme.breakpoints.tablet}) {
          padding: 0 2rem;
        }
      }

      .section {
        padding: 4rem 0;

        @media (min-width: ${props => props.theme.breakpoints.tablet}) {
          padding: 6rem 0;
        }
      }
    `}
  />
);

export default GlobalStyles; 