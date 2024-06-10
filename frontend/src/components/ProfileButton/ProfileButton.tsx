import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavigateButton } from "../NavigateButton/NavigateButton";
import styles from "./styles.module.scss";

const ProfileButton = () => {
  const { t } = useTranslation();
  return (
    <Link to="/profile" className={styles.button}>
      <NavigateButton text={t("ProfileButton")} isMain />
    </Link>
  );
};

export default ProfileButton;
