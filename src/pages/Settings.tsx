import { useEffect, useState } from "react";
import { BackButton } from "../components";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Tooltip,
  IconButton,
  Badge,
} from "@mui/material";
import { formatTimeAgo, isImageUrl } from "../utils";
import { SaveButton, SettingsContainer, SettingsInput } from "../styles";
import { nameToAvatar, showToast } from "../utils";
import { AddAPhoto, Delete, InfoOutlined, Logout } from "@mui/icons-material";
import { defaultUserProfile, achievements } from "../constants";
import { UserProfileProps } from "../types/userProfileProps";
import { toast } from "react-toastify";

export const Settings = ({ userProfile, setUserProfile }: UserProfileProps) => {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [imgLink, setImgLink] = useState<string>("");
  const [imgError, setImgError] = useState<string>("");
  const [imgDialog, setImgDialog] = useState<boolean>(false);
  const [logoutDialog, setLogoutDialog] = useState<boolean>(false);
  const n = useNavigate();
  useEffect(() => {
    document.title = `Найстройки - ${userProfile.name} - Honey Clicker`;
  }, []);
  useEffect(() => {
    if (userProfile.name === null) {
      n("/");
    }
  }, [userProfile]);

  const createdAt = new Date(userProfile.createdAt);
  const handleChangeImage = () => {
    if (isImageUrl(imgLink) && imgLink.length <= 255) {
      setImgDialog(false);
      setImgLink("");
      // change profile picture achievement
      const changeImageAchievementName = "profilePicturePro";
      const changeImageAchievement = achievements[changeImageAchievementName];
      const newAchievements = userProfile.newAchievements + 1;
      if (!userProfile.achievements.includes(changeImageAchievement.name)) {
        const updatedAchievements = [
          ...userProfile.achievements,
          changeImageAchievement.name,
        ];
        setUserProfile({
          ...userProfile,
          achievements: updatedAchievements,
          profilePicture: imgLink === "" ? null : imgLink,
          newAchievements: newAchievements,
          dateAchievements: {
            ...userProfile.dateAchievements,
            [changeImageAchievement.name]: new Date(),
          },
        });
        showToast({
          header: `${changeImageAchievement.name} разблокированно!`,
          text: changeImageAchievement.description,
          emoji: changeImageAchievement.emoji,
          volume: userProfile.audioVolume,
        });
      } else {
        setUserProfile({
          ...userProfile,
          profilePicture: imgLink === "" ? null : imgLink,
        });
      }
      toast.success("Успешно изменили фото");
    } else {
      setImgError("Пожалуйста вставте правельный URL.");
    }
  };

  const handleSaveNameClick = () => {
    if (name.length < 4) {
      setNameError("Должно содержать минимум 4 символа");
    } else if (name.length > 16)
      setNameError("Не может быть более 16 символов");
    else if (name === userProfile.name) {
      toast.error("Новое имя не может быть таким же как и предыдущее");
    } else {
      setUserProfile({
        ...userProfile,
        name: name,
      });
      toast.success("Имя изменено успешно");
      setName("");
    }
  };

  return (
    <>
      <BackButton />
      <SettingsContainer>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          onClick={() => setImgDialog(true)}
          badgeContent={
            <Avatar
              style={{
                background: "#767676ae",
                backdropFilter: "blur(6px)",
                cursor: "pointer",
              }}
            >
              <AddAPhoto />
            </Avatar>
          }
        >
          <Avatar
            src={userProfile.profilePicture?.toString()}
            alt="Фото профиля"
            onError={() => {
              setUserProfile({ ...userProfile, profilePicture: null });
            }}
            style={{
              width: "128px",
              height: "128px",
              fontSize: "60px",
              background: `${
                userProfile.profilePicture === null ? "#f28705" : ""
              }`,
              boxShadow: `${
                userProfile.profilePicture === null
                  ? "0 0 30px -1px #f28705cb"
                  : ""
              }`,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {nameToAvatar(userProfile.name)}
          </Avatar>
        </Badge>
        <div style={{ fontSize: "24px", marginTop: "6px" }}>
          {userProfile.name}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.7,
          }}
        >
          <Tooltip
            title={`Создано: ${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`}
          >
            <IconButton>
              <InfoOutlined />
            </IconButton>
          </Tooltip>
          <span> Зарегистрирован {formatTimeAgo(createdAt.toString())}</span>
        </div>
        <br />
        <SettingsInput
          label="Изменить имя"
          type="text"
          value={name}
          error={nameError !== ""}
          helperText={nameError}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
            setNameError("");
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSaveNameClick()}
        />
        <br />
        {name !== "" && (
          <>
            <SaveButton
              // disabled={name === userProfile.name}
              onClick={handleSaveNameClick}
            >
              Сохранить
            </SaveButton>
            <br />
          </>
        )}
        <Button
          style={{
            fontSize: ".9rem",
            borderRadius: 12,
            padding: "8px 14px",
          }}
          color="error"
          onClick={() => setLogoutDialog(true)}
        >
          <Logout /> &nbsp; Выйти
        </Button>
      </SettingsContainer>

      <Dialog
        PaperProps={{
          style: {
            borderRadius: 18,
            padding: 4,
          },
        }}
        open={imgDialog}
        onClose={() => {
          setImgDialog(false);
        }}
      >
        <DialogTitle>Изменить фото профиля</DialogTitle>
        <DialogContent>
          <br />

          <SettingsInput
            type="url"
            label="Ссылка к желаемому фото"
            error={imgError !== "" || imgLink.length > 255}
            helperText={imgError || `${imgLink.length}/255`}
            value={imgLink}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setImgLink(e.target.value);
              setImgError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && handleChangeImage()}
          />
          <br />
          <br />
          <Button
            color="error"
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
              padding: "8px 14px",
            }}
            onClick={() => {
              setUserProfile({ ...userProfile, profilePicture: null });
              setImgDialog(false);
              setImgError("");
              setImgLink("");
            }}
          >
            <Delete /> &nbsp; Удалить фото
          </Button>
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
            }}
            onClick={() => setImgDialog(false)}
          >
            отменить
          </Button>
          <Button
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
            }}
            onClick={handleChangeImage}
          >
            ок
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        PaperProps={{
          style: {
            borderRadius: 18,
            padding: 4,
          },
        }}
        open={logoutDialog}
        onClose={() => setLogoutDialog(false)}
      >
        <DialogTitle>Вы уверены что хотите выйти?</DialogTitle>
        <DialogContent>Ваш профиль не будет сохранен</DialogContent>
        <DialogActions>
          <Button
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
            }}
            onClick={() => setLogoutDialog(false)}
          >
            no
          </Button>
          <Button
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
            }}
            onClick={() => {
              setLogoutDialog(false);
              setUserProfile(defaultUserProfile);
              toast.success("Successfully logged out");
            }}
          >
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
