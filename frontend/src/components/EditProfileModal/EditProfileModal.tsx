import React, { useState } from "react";
import { Modal, TextField, Button } from "@mui/material";

interface EditProfileModalProps {
  open?: boolean;
  initialFirstName: string;
  initialLastName: string;
  onSave: (editedFirstName: string, editedLastName: string) => void;
  onCancel: () => void;
  setUserData: React.Dispatch<React.SetStateAction<{
    name: string;
    surname: string;
    email: string;
  }>>;
}

function EditProfileModal({
  open = false,
  initialFirstName,
  initialLastName,
  onSave,
  onCancel,
  setUserData,
}: EditProfileModalProps) {
  const [editedFirstName, setEditedFirstName] = useState(initialFirstName);
  const [editedLastName, setEditedLastName] = useState(initialLastName);

  const handleSave = () => {
    updateProfile();
  };

  const updateProfile = async () => {
    try {
      const userToken = localStorage.getItem("userToken");
      if (!userToken) {
        console.error("Token is missing or invalid.");
        return;
      }
      const tokenData = JSON.parse(atob(userToken.split(".")[1]));
      const userId = tokenData.id;
      const response = await fetch(`http://localhost:8000/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          name: editedFirstName,
          surname: editedLastName,
        }),
      });
      if (!response.ok) {
        console.error("Failed to update user data:", response.status);
        return;
      }
      // Обновление локального состояния пользователя после успешного обновления на сервере
      setUserData((prevUserData) => ({
        ...prevUserData,
        name: editedFirstName,
        surname: editedLastName,
      }));
      // Закрытие модального окна
      onCancel();
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modal" // Применяем класс стилей к модальному окну
    >
      <div>
        <TextField
          label="First Name"
          variant="outlined"
          value={editedFirstName}
          onChange={(e) => setEditedFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          value={editedLastName}
          onChange={(e) => setEditedLastName(e.target.value)}
        />
        <div>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="contained" color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default EditProfileModal;
