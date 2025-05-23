import {
  Avatar,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { nameToAvatar } from "../utils";
import { FormContainer, NameInput, CreateButton } from "../styles";
import { UserProfileProps } from "../types/userProfileProps";

export const CreateProfile = ({
  userProfile,
  setUserProfile,
}: UserProfileProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [dialog, setDialog] = useState<boolean>(true);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    setInputValue(event.target.value);
  };

  useEffect(() => {
    document.title = "Создание профиля - Honey Clicker";
  }, []);
  const handleSetUserProfile = () => {
    if (inputValue.length < 4) {
      setErrorMessage("Должен быть минимум 4 символа в длину");
    } else if (inputValue.length > 16)
      setErrorMessage("Не может превышать 16 символов в длину");
    else {
      setUserProfile({
        ...userProfile,
        name: inputValue,
        createdAt: new Date(),
      });
    }
  };

  return (
    <>
      <Dialog
        PaperProps={{
          style: {
            borderRadius: 18,
            padding: 4,
            fontFamily: "Inter",
          },
        }}
        open={dialog}
        onClose={() => setDialog(false)}
      >
        <DialogTitle>Похоже, у вас еще нет профиля</DialogTitle>
        <DialogContent>
          Вы можете создать его сейчас, введя свое имя пользователя
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
              fontFamily: "Inter",
            }}
            onClick={() => setDialog(false)}
          >
            ok
          </Button>
        </DialogActions>
      </Dialog>
      <FormContainer>
        <Avatar
          style={{
            width: "96px",
            height: "96px",
            fontSize: "36px",
            background: "#f28705",
            boxShadow: "0 0 30px -1px #f28705cb",
          }}
        >
          {inputValue !== "" ? nameToAvatar(inputValue) : null}
        </Avatar>
        <br />
        <NameInput
          error={errorMessage !== null}
          helperText={errorMessage}
          label="Введите свое имя пользователя"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSetUserProfile()}
        />
        <br />
        <CreateButton onClick={handleSetUserProfile}>Сохранить профиль</CreateButton>
      </FormContainer>
    </>
  );
};
