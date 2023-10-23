var getURLParameter = function(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location)||[,""])[1].replace(/\+/g, '%20'))||null;
};

var lang = getURLParameter('lang');

if(lang == 'de'){
  TEXT_GAMEOVER   = "Gratulation! Du hast alle Level bestanden!\nDeine Gesamtpunktzahl ist: ";
  TEXT_SCORE      = "\nDu brauchtest: ";
  TEXT_PAUSE      = "Pause";
  TEXT_MOVES      = "Aktionen";
  TEXT_NEXT_LEVEL = "Gratulation! Du bist ein Level weiter!";
  TEXT_SELECT_LEVEL      = "Level aussuchen";
  TEXT_SCORE      = "Punkte";
  TEXT_LEVEL      = "Lvl";
  TEXT_YOUR_SCORE = "Deine Punktzahl ist";
  TEXT_MOVES_OUT  = "Keine weiteren Aktionen";

  TEXT_HELP       = "Bekomme den Wagen voll mit Gold aus der Mine, indem du die Wagen gefüllt mit Steinen aus dem Weg schiebst";
  TEXT_DEVELOPED = "DEVELOPED BY";

  TEXT_SHARE_IMAGE = "200x200.jpg";
  TEXT_SHARE_TITLE = "Gratulation!";
  TEXT_SHARE_MSG1 = "Du hast <strong>";
  TEXT_SHARE_MSG2 = " Punkte</strong>!<br><br>Teile das mit deinen Freunden!";
  TEXT_SHARE_SHARE1 = "Mein Ergebnis sind ";
  TEXT_SHARE_SHARE2 = " Punkte! Kannst du es besser?";
}else{
  TEXT_GAMEOVER   = "CONGRATULATIONS! YOU HAVE COMPLETED ALL THE LEVELS!\nYOUR TOTAL SCORE IS: ";
  TEXT_SCORE      = "\nYOU USED: ";
  TEXT_PAUSE      = "PAUSE";
  TEXT_MOVES      = "MOVES";
  TEXT_NEXT_LEVEL = "CONGRATULATIONS! YOU MOVE TO THE NEXT LEVEL!";
  TEXT_SELECT_LEVEL      = "SELECT LEVEL";
  TEXT_SCORE      = "SCORE";
  TEXT_LEVEL      = "Lvl";
  TEXT_YOUR_SCORE = "YOUR SCORE IS";
  TEXT_MOVES_OUT  = "MOVES OUT OF";

  TEXT_HELP       = "Get the cart full of gold out of the mine by sliding those filled with rocks out of the way";
  TEXT_DEVELOPED = "DEVELOPED BY";

  TEXT_SHARE_IMAGE = "200x200.jpg";
  TEXT_SHARE_TITLE = "Congratulations!";
  TEXT_SHARE_MSG1 = "You collected <strong>";
  TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
  TEXT_SHARE_SHARE1 = "My score is ";
  TEXT_SHARE_SHARE2 = " points! Can you do better?";
}
