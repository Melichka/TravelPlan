import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom"; // Импортируем Link
import { SignInButton } from "src/components/SignInButton";
import { SupportButton } from "src/components/SupportButton";
import { SwitchLanguage } from "src/components/SwitchLanguage";
import { Title } from "src/components/Title";
import { SearchBar } from "src/components/SearchBar";
import ProfileButton from "../../components/ProfileButton/ProfileButton";
import styles from "./styles.module.scss";
import SearchResultCard from "../../components/SearchResultCard/SearchResultCard";

export function SearchPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchType, setSearchType] = useState("");
  const [searchResults, setSearchResults] = useState<
    {
      id: string;
      name: string;
      description: string;
      tags: { id: string; name: string }[]; // добавляем свойство tags
    }[]
  >([]);

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const performSearch = async (query) => {
    setIsSearching(true);
    if (!query) {
      setIsSearching(false);
      return;
    }

    try {
      // Получаем теги текущего пользователя
      const userTagsResponse = await fetchCurrentUserTags();
      const userTagsData = await userTagsResponse.json();
      // Преобразуем объект тегов пользователя в массив тегов
      const userTags = Object.values(userTagsData);
      console.log("User tags:", userTags);

      // Выполняем поиск городов и мест
      const citiesResponse = await searchCities(query);
      const placesResponse = await searchPlaces(query);
      const combinedResults = [...citiesResponse, ...placesResponse];

      // Функция для подсчета количества совпадающих тегов между пользователем и результатами поиска
      const countMatchingTags = (userTags, placeTags) => {
        return userTags.filter(userTag => placeTags.some(placeTag => placeTag.id === userTag.id)).length;
      };

      // Сортировка результатов по убыванию количества совпадающих тегов
      const sortedResults = combinedResults.sort((a, b) => {
        const matchingTagsA = countMatchingTags(userTags, a.tags);
        const matchingTagsB = countMatchingTags(userTags, b.tags);
        return matchingTagsB - matchingTagsA;
      });

      // Устанавливаем результаты поиска и тип поиска в зависимости от найденных городов или мест
      if (citiesResponse.length > 0) {
        setSearchResults(sortedResults);
        setSearchType("city"); // Устанавливаем тип поиска как "city"
        localStorage.setItem("searchType", "city"); // Сохраняем тип поиска в localStorage
      } else {
        setSearchResults(sortedResults);
        setSearchType("place"); // Устанавливаем тип поиска как "place"
        localStorage.setItem("searchType", "place"); // Сохраняем тип поиска в localStorage
      }

      setIsSearching(false);
    } catch (error) {
      console.error("Error performing search:", error);
      setIsSearching(false);
    }
  };


  const searchCities = async (query) => {
    const response = await fetch(`http://localhost:8000/city/search/${query}`);
    const data = await response.json();
    return data;
  };

  const searchPlaces = async (query) => {
    const response = await fetch(
      `http://localhost:8000/places/search/${query}`
    );
    const data = await response.json();
    return data;
  };

  const fetchCurrentUserTags = async () => {
    try {
      const userToken = localStorage.getItem("userToken");
      if (!userToken) {
        throw new Error("Token is missing or invalid.");
      }
      const response = await fetch("http://localhost:8000/users/currentUserId", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch user tags: ${response.status}`);
      }
      return response;
    } catch (error) {
      console.error("Error fetching user tags:", error);
      throw error;
    }
  };

  return (
    <div className={styles.searchPage}>
      <div className={styles.buttons}>
        {isAuthenticated ? (
          <ProfileButton />
        ) : (
          <SignInButton onClick={handleSignIn} />
        )}
        <SupportButton />
        <SwitchLanguage changeLanguage={changeLanguage} />
      </div>
      <div className={styles.main}>
        <div className={styles.assets}>
          <div className={styles.image} />
          {!isSearching && <Title />}
        </div>
        <SearchBar onSearch={performSearch} />
        <div className={styles.searchResults}>
          {searchResults.map((result, index) => (
            <div key={index}>
              <Link key={index} to={`/city/${result.id}`}>
                <SearchResultCard
                  name={result.name}
                  description={result.description}
                  tags={result.tags} // Передача тегов в SearchResultCard
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
