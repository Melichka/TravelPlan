import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import { EntertainmentButton } from "src/components/EntertainmentButton";
import { HeaderTitle } from "src/components/HeaderTitle";
import { HotelButton } from "src/components/HotelButton";
import { SightButton } from "src/components/SightButton";
import { SignInButton } from "src/components/SignInButton";
import { SwitchLanguage } from "src/components/SwitchLanguage";
import { SupportButton } from "src/components/SupportButton";
import { FavoriteBorderTwoToneIconStyles } from "src/pages/city/utils";
import ProfileButton from "../../components/ProfileButton/ProfileButton";
import styles from "./styles.module.scss";
import { CityButton } from "../../components/CityButton/CityButton";

export const CityPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [city, setCity] = useState(null);
  const [cityData, setCityData] = useState<{
    name: string;
    description: string;
    imgUrl: string;
    tags: { name: string }[];
  } | null>(null);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsAuthenticated(true);
    }

    loadData(id);
  }, []);

  // Функция для загрузки данных о месте или городе с сервера
  const loadData = async (id) => {
    try {
      // Получаем значение переменной searchType из localStorage
      const searchType = localStorage.getItem("searchType");

      // Формируем путь запроса на сервер в зависимости от значения searchType
      let apiUrl;
      if (searchType === "place") {
        apiUrl = `http://localhost:8000/places/searchid/${id}`;
      } else if (searchType === "city") {
        apiUrl = `http://localhost:8000/city/searchid/${id}`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();
      setCityData(data);
    } catch (error) {
      console.error("Error loading city data:", error);
    }
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  console.log("cityData:", cityData);

  return (
    <div className={styles["city-page"]}>
      <div className={styles["city-page-header"]}>
        <div className={styles["city-page-title"]}>
          <HeaderTitle />
        </div>
        <div className={styles["city-page-buttons"]}>
          <SwitchLanguage changeLanguage={changeLanguage} />
          {isAuthenticated ? (
            <ProfileButton />
          ) : (
            <SignInButton onClick={handleSignIn} />
          )}
          <SupportButton />
        </div>
      </div>
      <div className={styles["city-page-main"]}>
        {/* Проверяем, загружены ли данные о месте или городе */}
        {cityData && (
          <div className={styles["city-page-main-card"]}>
            <div className={styles["city-page-main-card-header"]}>
              <div className={styles["city-page-main-card-header-name"]}>
                <h3>{cityData.name}</h3> {/* Отображаем имя места или города */}
              </div>
              <FavoriteBorderTwoToneIcon
                sx={FavoriteBorderTwoToneIconStyles()}
              />
            </div>
            <div className={styles["city-page-main-card-image"]}>
              <img src={cityData.imgUrl} alt={cityData.name} />
            </div>
          </div>
        )}
        {cityData && (
          <div className={styles["city-page-description"]}>
            <p>{cityData.description}</p>
            <div className={styles["city-page-description-tags"]}>
              {cityData.tags && cityData.tags.length > 0 && (
                <div className={styles["city-page-description-tags"]}>
                  {cityData.tags.map((tag, index) => (
                    <span key={index} className={styles["tag"]}>
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {/* Условный рендеринг кнопок в зависимости от типа поиска */}
            {localStorage.getItem("searchType") === "place" ? (
              <CityButton /> // Отображаем CityButton для поиска места
            ) : (
              <div className={styles["city-page-description-buttons"]}>
                <div className={styles["city-page-description-sight"]}>
                  <SightButton />
                </div>
                <div className={styles["city-page-description-hotel"]}>
                  <HotelButton />
                </div>
                <div className={styles["city-page-description-entertainment"]}>
                  <EntertainmentButton />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
