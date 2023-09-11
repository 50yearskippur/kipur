import React, { useState } from "react";
import articlepic from "../../assets/pictures/cardImage.jpg";
import Carousel from "../../components/carousel/Carousel";
import { AccountCircle, CalendarMonth } from "@mui/icons-material";
import {
  SemiTitle,
  ArticleDetailsContainer,
  ArticleTextContainer,
  ArticleContainer,
  ArticlePic,
  ArticleTitle,
  ArticleDetail,
} from "../../components/general";
import Article from "../article/Article";
import SecBanner from "./banner/SecBanner";
import Navbar from "../../components/navbar/Navbar";

const aritcles = [
  {
    article: true,
    type: "לפני המלחמה",
    title: `ניצני הקונספציה בתקופתו של ראש אמ"ן אהרון יריב`,
    miniTitle: `"אהרל'ה היה מגיע כנראה לאותה מסקנה, אך מציגה אחרת"`,
    text: (
      <>
        תיאור הקונספציה טרם פרוץ מלחמת יום הכיפורים בדרך כלל העמיד במרכז השיח את
        אלי זעירא, ראש אמ"ן בעת המלחמה ובשנה שקדמה לה. עם זאת, זרעיה של
        הקונספציה, ההערכה העמוקה שלסוריה ולמצרים אין כוונות ויכולות לצאת למלחמה
        עם ישראל, נטמנו עוד הרבה לפני לכן, בתקופתה של אהרן יריב, שכיהן בתפקידו
        בין 1964-1972.
        <br />
        <p style={{ marginTop: "0.5rem" }} />
        לאחר הניצחון הישראלי במלחמת ששת הימים, הפך יעד החזרת סיני למטרה עליונה
        עבור המצרים. בימיו של אהרון יריב אמ"ן העריך כי אפשר ומצרים תבחר בעתיד
        במהלך צבאי במטרה להחזיר לידיה את שטחי סיני, אך לא סביר שמהלך כזה יתבצע
        ב-1973. תפיסה זו נשענה על כך שישנם שני תנאים לפריצתה של מלחמה כוללת:
        מצרים לא תצא למלחמה לפני שתצטייד במטוסי קרב שיוכלו להפציץ בעומק הישראלי;
        וכן, סוריה לא תצא למלחמה ללא מצרים.
        <br />
        <p style={{ marginTop: "0.5rem" }} />
        התפיסה אמנם הייתה נכונה בימים שלאחר מלחמת ששת הימים, אך החמיצה לחלוטין
        את השינוי האסטרטגי במצרים לאחר עלייתו לשלטון של אנואר סאדאת ב-1970, עוד
        בימיו של יריב. סאדאת הבין כי יתכן והמצב הפוליטי המצרים יאלץ אותו לצאת
        למלחמה עוד לפני שישיג כושר הרתעה אווירי. כך, בימיו של יריב נוצר הפער
        העמוק בין התפיסה המודיעינית את האסטרטגיה המצרית ובין המציאות בשלטון
        המצרי. סאדאת למעשה התכוון לפתוח במלחמה להשגת יעדים טריטוריאליים התואמים
        את יכולות הצבא המצרי ואשר יניעו תהליך המדיני בהמשך.
        <br />
        <p style={{ marginTop: "0.5rem" }} />
        יודגש כי גם בתקופתו של אהרן יריב, הידוע בשאילת שאלות, בהטלת ספק, ובמתן
        מקום רב לדעות אחרות, לא נשמעו הערכות מנוגדות. אלי זעירא טען לא פעם בפני
        ועדת אגרנט, כי לא הוא שהקים את מחלקת המחקר של אמ"ן והיא לא הגיעה אליו
        יש-מאין אלא קיבל אותה בירושה מאהרן יריב. כך, זעירא טוען כי כבר כשהגיע
        לאגף כל מחלקת מחקר, שיריב גידל והצמיח, העריכה שלא תהיה מלחמה ולא היו
        דעות מנוגדות משמעותיות. יתרה מכך, מסופר כי באירוע ההחלפה בין יריב
        לזעירא, יריב המשיך להחזיק בדעה הרווחת ואמר בפני הנוכחים כי הוא מוריש
        לזעירא מצב של שקט.
        <br />
        <p style={{ marginTop: "0.5rem" }} />
        האלוף אביעזר יערי, שהיה ראש ענף 5 (סוריה ולבנון) במחלקת המחקר באותה
        תקופה אמר כי "אחרי מלחמת יום הכיפורים שאלנו את עצמנו מה אהרל'ה היה עושה.
        נטינו לחשוב שאילו הייתה עומדת לפניו אותה מערכת ידיעות ושיקולים הוא היה
        עוצר ושואל מתישהו למה זה לא יכול להיות הפוך." שלמה גזית, שהחליף את אלי
        זעירא כראש אמ"ן, טען ברבות הימים כי הוא חושב שגם בימים שלפני המלחמה
        "יריב היה מגיע לאותה מסקנה כמו זעירא, אך הוא היה מציג אותה אחרת".
      </>
    ),
    pic: require("../../assets/pictures/ahron.jpg"),
    underPic: `אהרן יריב כר' אמ"ן ב-1970; מקור: לשכת העיתונות הממשלתית`,
  },
  {
    article: true,
    type: "לפני המלחמה",
    title: `כוננות כחול-לבן`,
    miniTitle: `המלחמה שלא באה (עדיין..)`,
    text: (
      <>
        'שם קוד' לצעדי כוננות שננקטו בין אפריל לאוגוסט 1973. הכוננות הוכרזה
        בעקבות הגעת ידיעות מהמקור המיוחד של המוסד 'בבל' (אשרף מרוואן) על כוונות
        מצריים לפתוח במלחמה בחודשים אפריל או מאי. למרות שהערכת אמ"ן הייתה כי לא
        עתידה לפרוץ מלחמה, הרמטכ"ל דוד אלעזר ושר הביטחון משה דיין החליטו על
        העלאת הכוננות. העלאת הכוננות הוכרזה על מנת להרתיע את סוריה ומצרים ולמנוע
        את הפתעת הכוחות הישראליים למקרה שבו אכן תפרוץ מלחמה.
        <br />
        <p style={{ marginTop: "0.5rem" }} />
        במסגרת העלאת הכוננות נעשו פעולות רבות בתחום בניין הכוח, שהצריכו השקעת
        משאבים גדולה. כך למשל, הוקדמה הקמתה של אוגדה 210 ברמת הגולן מיוני 74'
        ליוני 73'; הוקדמו אימונים שונים והוגבר קצב ההצטיידות באמל"ח שהיה חסר;
        לצד אלה, רועננו התוכניות המבצעיות בכלל צה"ל, ובכלל זאת רועננו תוכניות
        מגננה ('שובך יונים') ומתקפה ('חתול המדבר') של פיקוד הדרום וכן תוכניות
        התקיפה של חיל האוויר בכלל הזירות. לבסוף הורדה רמת הכוננות באוגוסט 73',
        כחודשיים לפני פרוץ מלחמת יום הכיפורים לאור עלותה הכספית הגבוהה, שמנתה
        כ-60 מיליון לירות, ושחיקת הכוחות הסדירים, וחלק מכוחות המילואים.
        <br />
        <p style={{ marginTop: "0.5rem" }} />
        קשה לקבוע האם להעלאת הכוננות הייתה השפעה אמיתית על דחיית פרוץ המלחמה
        לחודש אוקטובר. יחד עם זאת, לכוננות 'כחול-לבן' הייתה השפעה משמעותית על
        מוכנות צה"ל למלחמת יום הכיפורים בהיבטים רבים. החוקר אורי בן יוסף כתב
        בספרו "הצופה שנרדם": "לעובדה שמלחמה לא פרצה במאי היה אפקט קטלני על הערכת
        המודיעין הישראלית בסוף הקיץ. סינדרום "זאב זאב", המוכר כאחד המקורות
        העיקריים לכישלונות מודיעין במתן התרעה על מתקפת פתע ממשמשת ובאה". עם זאת,
        הגם שהכוננות תרמה את שלה להעמקת הקונספציה והזחיחות המקצועית במידה-מה
        שאפיינה את מסדרונות אמ"ן, הרי שהיא כן תרמה בצעדי שיפור המוכנות הכוללים
        של צה"ל לאתגר שנכפה עליו באוקטובר אותה שנה. צה"ל הופתע אמנם, אך מוכנותו
        להכיל ההפתעה, להשיב המצב לקדמותו ולהשיג הכרעה – הייתה נעוצה בין השאר
        לאור מאפייני הכוננות בה היה שרוי זה לא מכבר.
        <br />
        <p style={{ marginTop: "0.5rem" }} />
        בדו"ח המסכם שלה, פסקה וועדת אגרנט כי "הכישלון בהערכת המצב לקראת מלחמת
        יום כיפור נבע בין היתר מתוך אותה העלאת כוננות אשר גרמה לחוסר ערנות לקראת
        המלחמה."
      </>
    ),
    pic: require("../../assets/pictures/konenot.jpeg"),
    underPic: `מוצב ברמת הגולן, דובר צה"ל`,
  },
  {
    article: true,
    type: `ערב המלחמה`,
    title: `פגישת גולדה – חוסיין`,
    miniTitle: `ההתרעה של המלך שנדחתה על הסף`,
    text: (
      <>
        ב-25 בספטמבר 1973 בשעות הערב, התקיים מפגש בין רוה"מ גולדה מאיר ומלך ירדן
        חוסיין באזור תל אביב לאור בקשה דחופה של המלך, לאחר שהגיעה לידיו ההבנה כי
        מצרים וסוריה עתידות לפלוש לישראל. חוסיין חשש ממלחמה נגד ישראל ולא רצה
        למצוא את עצמו בתווך בין ישראל לסוריה.
        <br />
        <p style={{ marginTop: "0.5rem" }} />
        חוסיין גם הוסיף את הערכתו כי מדובר בתכנונה של מתקפה משולבת של הסורים
        והמצרים.
        <br />
        <p style={{ marginTop: "0.5rem" }} />
        עם תום השיחה, יצרה גולדה קשר עם שר הביטחון דאז, משה דיין ועדכנה אותו
        בנתונים. הוא מייד בדק את מהימנות הדברים מול הרמטכ"ל וראש אמ"ן ותוך מספר
        דקות עדכן את גולדה באופן ראשוני שההערכה של המלך ככל-הנראה מוטעית וכי יש
        לקחת אותה בערבון מוגבל. גם כאן, הקונספציה אודות נכונות צבאות ערב לפתוח
        במלחמה נגד ישראל עמדה בעינה.
        <br />
        <p style={{ marginTop: "0.5rem" }} />
        למרות הערכה ראשונית זו, נקבעו דיונים בראשות הרמטכ"ל ושר הביטחון בכדי
        לדון לעומק בשאלת השפעת דברי המלך חוסיין על ההערכה ועל היערכות צה"ל
        כנגזרת שלה. בשני הדיונים, אשר יודגש כי לא השתתפו בהם נציגים אשר נכחו
        בפגישת גולדה-חוסיין או שידעו לאשורו מה עלה בפגישתם, הלכה והתגבשה עוד
        יותר ההערכה שלא עתידה לפרוץ מלחמה בטווח הזמן הקרוב וניתנה התייחסות
        'מצמצמת' לחלק מדבריו של חוסיין. כך, בפועל, דבריו של חוסיין לא הצליחו
        לתרום להתרעה שצה"ל נדרש לה בכדי להיערך למתקפה אשר פרצה כשבועיים מאוחר
        יותר.
      </>
    ),
    pic: require("../../assets/pictures/hosi.jpg"),
  },
];

export default function Recommended() {
  const [showCard, setShowCard] = useState(false);
  const [articleI, setArticleI] = useState();
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <>
      <Carousel />
      <SemiTitle>כתבות מומלצות</SemiTitle>
      {aritcles.map((article) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ArticleContainer
              onClick={() => {
                setShowCard(true);
                setArticleI(article);
              }}
            >
              {article.pic ? (
                <ArticlePic src={article.pic} />
              ) : (
                <ArticlePic src={articlepic} />
              )}
              <ArticleTextContainer>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDetailsContainer>
                  <ArticleDetail>
                    {article.type}
                    <img
                      src={require("../../assets/pictures/clock.svg")}
                      style={{ height: "14px", marginLeft: "5px" }}
                    />
                  </ArticleDetail>
                </ArticleDetailsContainer>
              </ArticleTextContainer>
            </ArticleContainer>
            {showCard && (
              <Article setShowCard={setShowCard} article={articleI} />
            )}
          </div>
        );
      })}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ArticleContainer
          style={{ alignItems: "center" }}
          onClick={() => setShowPopUp(true)}
        >
          <ArticlePic src={require("../../assets/pictures/kelim.png")} />
          <ArticleTextContainer>
            <ArticleTitle>כלים חינוכיים של אמ"ן</ArticleTitle>
          </ArticleTextContainer>
        </ArticleContainer>
      </div>
      {!showCard ? <Navbar selected="recommended" /> : null}
      {showPopUp && <SecBanner setShowPopUp={setShowPopUp} />}
    </>
  );
}
