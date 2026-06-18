import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Settings() {
  const [notifications, setNotifications] =
    useState(() => {
      return (
        JSON.parse(
          localStorage.getItem("notifications")
        ) || false
      );
    });


  useEffect(() => {
    localStorage.setItem(
      "notifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  const { t,i18n } = useTranslation();

  return (
    <div>
      <h1>{t("settings")}</h1>
      <h2>{t("welcome")}</h2>

      <label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() =>
            setNotifications((prevState => !prevState)

            )
          }
        />

        {t("enableNotifications")}
      </label>

    <h2>{t("language")}</h2>

<select
  onChange={(e) =>
    i18n.changeLanguage(
      e.target.value
    )
  }
>
  <option value="en">
    English
  </option>

  <option value="hi">
    Hindi
  </option>
</select>


    </div>
  );
}

export default Settings;