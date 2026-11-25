// ב
let userName = "רחל";      // שגיאה 1: const אי אפשר לשנות - הוחלף ל-let
userName = "שרה";
let score = 10;
score = score + 5;          // שגיאה 2: "5" היה מחרוזת, ולכן יצא "105" במקום 15
console.log("הציון הוא: " + score);
if (score === 100) {        // שגיאה 3: = הוא השמה, צריך === להשוואה
  console.log("מושלם!");
}
for (let i = 0; i < 3; i++) { // שגיאה 4: חסר סוגר עגול ) - שגיאת תחביר
  console.log(i);
}
console.log(userName);      // שגיאה 5: שגיאת כתיב usrName - משתנה שלא קיים
