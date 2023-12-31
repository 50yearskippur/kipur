import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Banner,
  Title,
  SemiTitle,
  CloseButton,
} from "./FirstBannerStyles";

const FirstTimeBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const hasClosedPopup = sessionStorage.getItem("firstTimeBannerDismissed");
    if (hasClosedPopup === "true") {
      setShowBanner(false);
    }
    return () => {
      sessionStorage.setItem("firstTimeBannerDismissed", "false");
    };
  }, []);

    const handlePopState = (event) => {
      if (event.type === "popstate") {
        sessionStorage.setItem("firstTimeBannerDismissed", "true");
      }
    };


  window.addEventListener("popstate", handlePopState);

  const handleDismiss = () => {
    setShowBanner(false);
    sessionStorage.setItem("firstTimeBannerDismissed", "true");
  };

  return (
    <Wrapper style={{ display: showBanner ? "block" : "" }}>
      <Banner>
        <Title>ברוכים הבאים לפורטל מורשת אמ"ן במלחמת יום הכיפורים</Title>
        <SemiTitle>
          עמוד דיגיטלי זה הופק על-ידי ארטק, בית טכנולוגיות הלמידה של מערך ההדרכה
          באגף המודיעין.
          <br />
          <p style={{ marginTop: "0.5rem" }} />
          מטרתו להוות מקור ידע אודות האירועים והדמויות המרכזיות, שאפיינו את
          התנהלות אגף המודיעין בהקשרי מלחמת יום הכיפורים – המלחמה שאנו מציינים
          בימים אלה יובל להתרחשותה.
          <br />
          <p style={{ marginTop: "0.5rem" }} />
          התוכן המובא בדף זה – '50 אירועים ואנשים לציון שנת ה-50' - נכתב במשולב
          על-ידי חניכי תכנית המצוינות 'חבצלות', אנשי מערך ההדרכה ומערך המשא"ן של
          אמ"ן ורע"ן המורשת החילי, סא"ל במיל' גדעון מיטשניק.
          <br />
          <p style={{ marginTop: "0.5rem" }} />
          עמוד זה אינו מחליף עיון והעמקה במקורות רבים נוספים שעוסקים בקורות
          המלחמה, ובסיפורי האנשים שהיו מעורבים בה.
          <br />
          <p style={{ marginTop: "0.5rem" }} />
          אנו מצדיעים לאנשי אגף המודיעין וקהילת המודיעין בני ובנות דור המלחמה
          שנשאו על כתפיהם את עול המלחמה והיו עמוד תווך איתן להשגת הניצחון.
          <br />
          <p style={{ marginTop: "0.5rem" }} />
          עיון מועיל!
        </SemiTitle>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <CloseButton onClick={handleDismiss}>אישור</CloseButton>
        </div>
      </Banner>
    </Wrapper>
  );
};

export default FirstTimeBanner;
