import styled from "styled-components";
import { UserProfileProps } from "../types/userProfileProps";
import { colorPalette } from "../styles";
import { compactFormat } from "../utils";
import { Done, TaskAlt } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

// TODO: Доделать систему квестов.

export const Quests = ({ userProfile, setUserProfile }: UserProfileProps) => {
  const [timer, setTimer] = useState<number>(86400); // 24h in seconds

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  // Restart the timer
  useEffect(() => {
    if (timer <= 0) {
      setUserProfile({
        ...userProfile,
        quests: {
          ...userProfile.quests,
          daysCounter: userProfile.quests.daysCounter + 1,
        },
      });
    }
    const createdAt = new Date(userProfile.createdAt).getTime() / 1000; // convert to seconds
    const now = Math.floor(Date.now() / 1000); // convert to seconds
    const diff = now - createdAt;
    const remainingTime = 86400 - (diff % 86400);
    setTimer(remainingTime);
  }, [userProfile.createdAt]);

  const timeRemaining = new Date(timer * 1000).toISOString().substr(11, 8);

  const reward =
    userProfile.maxPoints * 1.2 > 5000 ? userProfile.maxPoints * 1.2 : 5000;

  const [questsList, setQuestsList] = useState({
    FirstQuest: {
      name: "Скоро (или нет)",
      description: "квесты ещё не доступны",
      emoji: "⛔",
      completed: false,
    },
    SecondQuest: {
      name: "завершенный квест",
      description: "это завершенный квест",
      emoji: "🍯",
      completed: true,
    },
  });

  const allCompleted = Object.values(questsList).every(
    (quest) => quest.completed
  );
  return (
    <Container>
      <Header>
        <TaskAlt /> &nbsp; Ежедневные квесты для {userProfile.name}
      </Header>

      <p>
        {allCompleted ? "Время до следующего квеста: " : "Времени осталось: "}
        <TimeRemaining nearTheEnd={timer < 7200 && !allCompleted}>
          {timeRemaining}
        </TimeRemaining>
      </p>

      {!allCompleted ? (
        Object.values(questsList).map((quest, index) => (
          <Item completed={quest.completed} key={index}>
            {quest.completed && <Done />} {quest.emoji} {quest.name}{" "}
          </Item>
        ))
      ) : (
        <Completed>Все квесты выполнены!</Completed>
      )}
      {!allCompleted && <p>Награда: 🍯{compactFormat(reward)}</p>}
      <Button
        onClick={() => {
          setQuestsList((prevState) => {
            return {
              ...prevState,
              FirstQuest: {
                ...prevState.FirstQuest,
                completed:
                  questsList.FirstQuest.completed === true ? false : true,
              },
            };
          });
        }}
      >
        Завершить
      </Button>
    </Container>
  );
};

const Container = styled.div`
  background: #ffffff2f;
  margin-left: 20px;
  min-width: 300px;
  padding: 20px;
  position: absolute;
  top: 220px;
  border-radius: 20px;
  @media (max-width: 1200px) {
    position: relative;
    top: 0;
    margin: 25px 20vw;
  }
  @media (max-width: 700px) {
    margin: 25px 60px;
  }
`;

const Header = styled.h3`
  color: ${colorPalette.orange};
  display: flex;
`;

const TimeRemaining = styled.span<{ nearTheEnd: boolean }>`
  color: ${(props) => (props.nearTheEnd ? colorPalette.red : "#efefef")};
  text-shadow: ${(props) =>
    props.nearTheEnd ? "0 0 12px#ff5e5e" : "0px 0px 5px rgba(0, 0, 0, 0.25)"};
`;

const Completed = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 28px;
  background-color: #ffffff2a;
  padding: 12px 16px;
  border-radius: 8px;
`;

const Item = styled.div<{ completed: boolean }>`
  background: ${colorPalette.peach};
  display: flex;
  color: #333;
  margin: 16px 0;
  padding: 12px 16px;
  border-radius: 8px;
  opacity: ${(props) => (props.completed ? 0.6 : 0.9)};
  font-weight: ${(props) => !props.completed && "500"};
  font-style: ${(props) => (props.completed ? "italic" : "normal")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;
const Description = styled.span`
  font-size: 12px;
`;
