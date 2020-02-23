var grays = [
  ["gray1", "gray2", "gray3"],
  ["gray4", "gray5", "gray6"],
  ["gray4", "gray5", "gray6"],
  ["gray7", "gray8", "gray9"]
];

for (i = 0; i < 28; i++) {
  // On choisit l'élément après lequel on doit rajouter notre forme
  if (i == 0) {
    var elem = $("#bleuSombre");
  } else {
    var elem = $(".forme" + i);
  }

  // On génère le html qu'il nous faut mettre
  var nb = i + 1;
  var new_shape = '<div class="forme' + nb + '">';

  // On a 4 triangles par forme
  for (j = 0; j < 4; j++) {
    new_shape += '<div class="triangle' + (j + 1) + '">';
    new_shape += '<div class="rectangle" id="rect">';

    for (k = 0; k < 20; k++) {
      new_shape +=
        '<div class="tranche pos' +
        (k + 1) +
        " " +
        grays[j][Math.floor(Math.random() * 3)] +
        '" id="minirect' +
        k +
        '"></div>';
      $(".pos" + k).css({
        margin: k * 3 + "px 0px 0px " + k * 3 + "px",
        position: "absolute"
      });
    }

    // On pense à refermer les divs
    new_shape += "</div></div>";
  }
  new_shape += "</div>";

  // Et on rajoute notre shape
  elem.after(new_shape);
}
