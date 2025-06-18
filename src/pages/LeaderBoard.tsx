import { useEffect, useState } from "react";
import styled from "styled-components";
import { BackButton } from "../components";
import { colorPalette } from "../styles";
import HappyBee from "../assets/HappyBee.png";
import { LeaderboardPlayer } from "../types/leaderboard";

export const LeaderBoard = () => {
  const [players, setPlayers] = useState<LeaderboardPlayer[]>([]);

  useEffect(() => {
    document.title = "Таблица лидеров - Honey Clicker";
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem("leaderboard");
    if (stored) {
      try {
        setPlayers(JSON.parse(stored));
      } catch (err) {
        console.error("Failed to parse leaderboard", err);
      }
    }
  }, []);

  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === "leaderboard" && e.newValue) {
        try {
          setPlayers(JSON.parse(e.newValue));
        } catch (err) {
          console.error("Failed to parse leaderboard", err);
        }
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <>
      <BackButton />
      <Container>
        <Heading>Таблица лидеров</Heading>
        {sortedPlayers.length === 0 ? (
          <Empty>Нет данных</Empty>
        ) : (
          sortedPlayers.map((player, idx) => (
            <PlayerRow key={player.userID}>
              <Position>{idx + 1}</Position>
              <Avatar src={player.picture || HappyBee} alt={player.displayName} />
              <Name>{player.displayName}</Name>
              <Score>{player.score}</Score>
            </PlayerRow>
          ))
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  max-width: 500px;
  padding: 40px 20px;
  border-radius: 40px;
  border: 5px solid ${colorPalette.orange};
  background: #f5f5f5;
  text-align: center;
`;

const Heading = styled.h1`
  color: ${colorPalette.orange};
  margin-bottom: 20px;
`;

const PlayerRow = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 12px 16px;
  margin: 8px 0;
  border-radius: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const Position = styled.span`
  width: 24px;
  font-weight: bold;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 12px;
`;

const Name = styled.span`
  flex-grow: 1;
  text-align: left;
`;

const Score = styled.span`
  font-weight: bold;
  color: ${colorPalette.orange};
`;

const Empty = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;
