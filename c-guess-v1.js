// ג
let playAgain = true;
while (playAgain) {
  const secret = Math.floor(Math.random() * 20) + 1;
  let guesses = 0;
  let guessedRight = false;
  while (!guessedRight) {
    const input = prompt("נחשי מספר בין 1 ל-20");
    if (input === null) break; // ביטול - יציאה מהמשחק הנוכחי
    const guess = Number(input);
    guesses++;
    if (guess > secret) {
      alert("גבוה מדי");
    } else if (guess < secret) {
      alert("נמוך מדי");
    } else {
      guessedRight = true;
    }
  }
  if (guessedRight) {
    let text;
    if (guesses <= 3) text = "מדהים!";
    else if (guesses <= 6) text = "יפה מאוד";
    else text = "אפשר לשפר";
    const msg = `${text} ניחשת אחרי ${guesses} ניסיונות`;
    alert(msg);
    console.log(msg);
  }
  playAgain = confirm("לשחק שוב?");
}
