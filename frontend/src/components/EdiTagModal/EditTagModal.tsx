import React, { useState } from 'react';
import Modal from 'react-modal';

interface Tag {
  id: number;
  name: string;
}

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  allTags: Tag[];
  userId: string;
}

const EditTagModal: React.FC<Props> = ({ isOpen, closeModal, allTags, userId }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSave = async () => {
    try {
      // Получение токена из localStorage
      const userToken = localStorage.getItem('userToken');

      // Проверка наличия токена
      if (!userToken) {
        throw new Error('User token not found');
      }

      // Преобразуем объект tagIds в массив значений
      const tagIdsArray = Object.values(selectedTags).map((tagId: any) => tagId);

      // Отправляем запросы на сервер для сохранения выбранных тегов в таблицу tag_user
      for (const tagId of tagIdsArray) {
        await fetch(`http://localhost:8000/users/${userId}/tags`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`, // Добавление токена в заголовок запроса
          },
          body: JSON.stringify({
            userId: userId,
            tagId: tagId,
          }),
        });
      }
      closeModal(); // Закрыть модальное окно после сохранения
      window.location.reload();
    } catch (error) {
      console.error('Error saving tags:', error);
    }
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
    const updatedTags = [...selectedTags];
    updatedTags[index] = e.target.value;
    setSelectedTags(updatedTags);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Tag Modal"
    >
      <h2>Edit Tag</h2>
      {[0, 1, 2].map(index => (
        <div key={index}>
          <label>Tag {index + 1}:</label>
          <select
            value={selectedTags[index]}
            onChange={(e) => handleTagChange(e, index)}
          >
            <option value="">Select Tag</option>
            {allTags.map(tag => (
              <option key={tag.id} value={tag.id}>{tag.name}</option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={handleSave}>Save</button>
      <button onClick={closeModal}>Cancel</button>
    </Modal>
  );
};

export default EditTagModal;
