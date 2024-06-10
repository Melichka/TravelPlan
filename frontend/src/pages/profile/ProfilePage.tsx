import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { HeaderTitle } from "src/components/HeaderTitle";
import { SupportButton } from "src/components/SupportButton";
import { SwitchLanguage } from "src/components/SwitchLanguage";
import { EditButton } from "../../components/EditButton";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { SignOutButton } from "../../components/SignOutButton";
import EditTagModal from "../../components/EdiTagModal/EditTagModal";
import EditProfileModal from "../../components/EditProfileModal/EditProfileModal";

export function ProfilePage() {
  const { t, i18n } = useTranslation();
  const [tags, setTags] = useState([]);
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const [showEditTagModal, setShowEditTagModal] = useState(false);
  const [allTags, setAllTags] = useState([]);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [userData, setUserData] = useState<{
    name: string;
    surname: string;
    email: string;
  }>({ name: "", surname: "", email: "" });

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleEditProfile = () => {
    setShowEditProfileModal(true);
  };

  const handleEditTags = () => {
    setShowEditTagModal(true);
  };

  useEffect(() => {
    const fetchAllTags = async () => {
      try {
        const response = await fetch("http://localhost:8000/tag");
        const data = await response.json();
        setAllTags(data);
      } catch (error) {
        console.error("Error fetching all tags:", error);
      }
    };

    fetchAllTags();
  }, []);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken || "");
  }, []);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userToken = localStorage.getItem("userToken");
        if (!userToken) {
          console.error("Token is missing or invalid.");
          return;
        }
        const response = await fetch(
          "http://localhost:8000/users/currentUserId",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        if (!response.ok) {
          console.error("Failed to fetch user ID:", response.status);
          return;
        }
        const data = await response.json();
        if (data.userId) {
          setUserId(data.userId);
        }
      } catch (error) {
        console.error("Error fetching user id:", error);
      }
    };

    fetchUserId();
  }, [token]);

  useEffect(() => {
    if (userId) {
      fetchUserTags();
    }
  }, [userId, token]);

  const fetchUserTags = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/users/${userId}/tags`
      );
      const data = await response.json();
      setTags(data);
    } catch (error) {
      console.error("Error fetching user tags:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userToken = localStorage.getItem("userToken");
        if (!userToken) {
          console.error("Token is missing or invalid.");
          return;
        }
        const tokenData = JSON.parse(atob(userToken.split(".")[1]));
        const userId = tokenData.id;
        const userEmail = tokenData.email;

        const response = await fetch(
          `http://localhost:8000/users/${userEmail}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        if (!response.ok) {
          console.error("Failed to fetch user data:", response.status);
          return;
        }
        const fetchedUserData = await response.json();
        setUserData(fetchedUserData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token]);

  const handleCancelEdit = () => {
    setShowEditTagModal(false);
  };

  return (
    <div className={styles.profilePage}>
      <div className={styles.header}>
        <div className={styles.title}>
          <HeaderTitle />
        </div>
        <div className={styles.button}>
          <SupportButton />
          <SwitchLanguage changeLanguage={changeLanguage} />
          <SignOutButton />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.photo}></div>
            <h1 className={styles.name}>
              {userData.name} {userData.surname}
            </h1>
            <EditButton onClick={handleEditProfile} />
          </div>

          <Typography className={styles.text}>
            {t("description.my-tags")}
          </Typography>
          <div className={styles.tag}>
            {tags.map((tag, index) => (
              <span key={index} className={`${styles.tagItem} ${styles.text}`}>
                {tag}
              </span>
            ))}
            <EditButton onClick={handleEditTags} />
          </div>
          <Typography className={styles.text}>
            {t("description.my-favorite-place")}
          </Typography>
          <div className={styles.place}>
            <div className={styles.card}></div>
          </div>
        </div>
        <div className={styles.image}></div>
      </div>
      {showEditTagModal && (
        <EditTagModal
          isOpen={showEditTagModal}
          closeModal={handleCancelEdit}
          allTags={allTags}
          userId={userId}
        />
      )}
      {showEditProfileModal && (
        <EditProfileModal
          open={showEditProfileModal}
          initialFirstName={userData.name}
          initialLastName={userData.surname}
          onSave={(editedFirstName, editedLastName) => {
            setShowEditProfileModal(false);
          }}
          onCancel={() => setShowEditProfileModal(false)}
          setUserData={setUserData}
        />
      )}
    </div>
  );
}
