angular.module('guildsApp', [])
  .controller('NewsCtrl', function($scope){
    $scope.news = [
      { ueberschrift: "Willkommen auf der Gildenseite von Haus Stark", postdate: "Garodan, April 04, 2017", label: "News", text: "Diese Seite ist die Alpha Version für ein Gilden Tool, die jede Gilde für sich verwenden kann, um ihre Ressourcen einkünfte besser zu Überblicken. Damit Spieler belohnt werden könne die viel für die Gilde tun. Diese Seite entsteht gemeinsam mit einem Kollegen aus der Uni.", end: "Grüße Garodan und xXPOLYGONXx." },
      { ueberschrift: "Du bist neu und sucht eine Gilde?", postdate: "Garodan, April 03, 2017", label: "Wichtig", text:"Dann bewirb dich bei uns!", end: "Grüße Garodan und xXPOLYGONXx." },
      { ueberschrift: "New Meta in GvG", postdate: "Garodan, April 02, 2017", label: "Fakten", text:"Total gut ist gerade als Heal wie zu erwarten Druide!", end: "Grüße Garodan und xXPOLYGONXx." }
    ];
  });
