/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/react";
import { useTheme, titleStyle } from "./ThemeContext";

// Animasi bouncing (naik-turun)
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const App = () => {
  const { theme, toggleTheme } = useTheme();

  // Gaya kontainer
  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${theme.background};
    color: ${theme.color};
    font-family: Arial, sans-serif;
    transition: background-color 0.5s, color 0.5s;
  `;

  // Gaya tombol umum
  const buttonStyle = css`
    margin: 10px;
    width: 500px;
    font-weight: bold;
    padding: 10px 20px;
    border: 1px solid ${theme.borderColor};
    background-color: transparent;
    color: ${theme.color};
    font-size: 16px;
    cursor: pointer;
    transition: color 0.3s, border 0.3s;

    &:hover {
      background-color: ${theme.color};
      color: ${theme.background};
    }
  `;

  // Gaya tombol dengan animasi bouncing
  const bounceButtonStyle = css`
    ${buttonStyle};
    animation: ${bounceAnimation} 1s infinite;
    margin-top: 100px;
  `;

  return (
    <div css={containerStyle}>
      <h1 css= {titleStyle}>Selamat Datang di Materi Jayjay!</h1>
      <button css={buttonStyle} onClick={toggleTheme}>
        Ganti Tema
      </button>
      <button css={bounceButtonStyle}>Ayo Belajar Animasi!</button>
    </div>
  );
};

export default App;
