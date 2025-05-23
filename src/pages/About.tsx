import React from "react";
import { useEffect } from "react";
import { BackButton } from "../components";
import styled, { keyframes } from "styled-components";
import { colorPalette } from "../styles";
import { Coffee, GitHub } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { achievements, items } from "../constants";
import PLFlag from "../assets/poland-flag-icon.svg";
import HappyBee from "../assets/HappyBee.png";

export const About = () => {
  // Calculate the number of achievements and items
  const achievementsCount = Object.keys(achievements).length;
  const itemsCount = Object.keys(items).length;
  // Set the document title
  useEffect(() => {
    document.title = "Инфо - Honey Clicker";
  }, []);

  // Define the technology stack used to build the game
  const techStack = [
    { name: "React.js", link: "https://react.dev/" },
    { name: "TypeScript", link: "https://www.typescriptlang.org/" },
    { name: "Vite", link: "https://vitejs.dev/" },
    { name: "MUI", link: "https://mui.com/" },
    { name: "styled-components", link: "https://styled-components.com/" },
  ];
  return (
    <>
      <BackButton />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AboutContainer>
          <AboutTitle>Обо Honey Clicker</AboutTitle>
          <AboutText>
            <b>Добро пожаловать в Honey Clicker!</b> Это простая, но захватывающая
            игра-кликер, в которой можно зарабатывать очки, нажимая на баночку с медом.
            Вы можете использовать свои очки, чтобы улучшить силу клика и зарабатывать больше
            очков в секунду и разблокировать достижения.
          </AboutText>
          <AboutText>
            <b>Для начала,</b> просто нажмите на банку с медом, чтобы заработать очки.
            Вы также можете использовать ползунок громкости для настройки звука в игре.
            Не забудьте просмотреть статистику, чтобы узнать, сколько вы
            заработали баллов и ваш прогресс на пути к разблокировке
            достижения. Чтобы настроить свой профиль в Honey Clicker, вы можете
            получить доступ к настройкам профиля пользователя, нажав на значок профиля на
            правом верхним уголу экрана. Отсюда вы можете
            изменить свое имя пользователя и изображение профиля, нажав на кнопку
            соответствующего поля и загрузите изображение или введите новое имя.
          </AboutText>
          <AboutText>
            <b>Играя в игру,</b> вы будете открывать различные достижения.
            На данный момент есть достижения: <b>{achievementsCount}</b>{" "}
            доступные для разблокировки в Honey Clicker. К ним относятся достижения за
            производство меда, нажатие кнопки и многое другое. Вы также можете посетить
            магазин, где можно приобрести улучшения, которые увеличат ваш доход 
            и множитель. Там <b>{itemsCount} уникальных предметов</b>,
            для покупки.
          </AboutText>

          <AboutText>
            <b>Honey Clicker — это прогрессивное веб-приложение. </b>
            Добавьте это приложение на главный экран для быстрого и легкого доступа к
            игре. Эта игра работает в автономном режиме, поэтому вы можете играть в нее когда угодно и где угодно, даже
            без подключения к Интернету.
          </AboutText>
        </AboutContainer>
        <BeeImg src={HappyBee} alt="happy bee" />
      </div>
    </>
  );
};
const AboutContainer = styled.div`
  background-color: #f5f5f5;
  padding: 32px;
  margin: 18px;
  border-radius: 28px;
  max-width: 1000px;
`;

const AboutTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${colorPalette.orange};
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #333333;
`;

const Flag = styled.img`
  width: 20px;
  border-radius: 3px;
  filter: drop-shadow(0px 0px 1.5px rgba(0, 0, 0, 0.45));
`;

interface LinkProps {
  color?: string;
}

const AboutLink = styled.a<LinkProps>`
  cursor: pointer;
  color: ${(props) => props.color || colorPalette.orange};
  display: inline-block;
  position: relative;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s all;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.color || colorPalette.orange};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    border-radius: 100px;
  }
  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &:hover {
    text-shadow: 0px 0px 20px ${(props) => props.color || colorPalette.orange};
  }
  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;
const bounce = keyframes`
   0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(0);
  }
`;
const BeeImg = styled.img`
  position: fixed;
  bottom: 12px;
  right: 12px;
  width: 10vw;
  max-width: 96px;
  animation: ${bounce} 1.5s ease-in-out infinite;
  @media (max-width: 1300px) {
    opacity: 0.8;
  }
`;
