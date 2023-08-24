import React, { useState } from "react";
import SortButtons from "../../components/SortButtons";
import {
  ImagesContainer,
  ImageContainer,
  ImageTitle,
  ImageDescription,
  ImageTextContainer,
} from "./imagesStyle";
import { articles } from "../../components/article/consts";

export default function ImagesAndEvents() {
  const [data, setData] = useState([
    {
      src: require("../../assets/pictures/gurion.jpg"),
      title: "דוד בן גוריון",
      description: "היה מדינאי ישראלי, ראש הממשלה הראשון של מדינת ישראל.",
      showText: false,
    },
    {
      src: require("../../assets/pictures/goldameir.jpg"),
      title: "זוהי גולדה מאיר",
      description:
        "גולדה מאיר הייתה ראש ממשלת ישראל הרביעית, בין מרץ 1969 ליוני 1974. כראש הממשלה, הנהיגה את ישראל בתקופת מלחמת ההתשה ומלחמת יום הכיפורים.",
      showText: false,
    },
    {
      src: require("../../assets/pictures/moshedayan.jpg"),
      title: "משה דיין",
      description:
        "משה דיין היה מצביא, מדינאי ואיש ציבור ישראלי. היה חבר הכנסת ושר בממשלות ישראל, שימש שר הביטחון במהלך מלחמת ששת הימים, מלחמת ההתשה ומלחמת יום הכיפורים.",
      showText: false,
    },
    {
      src: require("../../assets/pictures/kipur.jpg"),
      title: "תמונה ממאגר יום הכיפורים",
      description: "זוהי תמונה ממאגר סודי של פרסומי יום הכיפורים 1973.",
      showText: false,
    },
  ]);

  const labels = ["לפני המלחמה", "ערב המלחמה", "מהלך המלחמה", "בעקבות המלחמה"];

  const handleClick = (i) => {
    let items = [...data];
    items[i].showText = !items[i].showText;
    setData(items);
  };

  //const filteredArticle = articles.filter((article) => return article.type === );

  return (
    <>
      <SortButtons labels={labels} />
      <ImagesContainer>
        {data.map((current, index) => {
          return (
            <ImageContainer
              onClick={() => handleClick(index)}
              src={current.src}
            >
              <ImageTextContainer visible={current.showText} delay="300ms">
                <ImageTitle>{current.title}</ImageTitle>
                <ImageDescription>{current.description}</ImageDescription>
              </ImageTextContainer>
            </ImageContainer>
          );
        })}
      </ImagesContainer>
    </>
  );
}