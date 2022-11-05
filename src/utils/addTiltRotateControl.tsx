export const addTiltRotateControl = (mapInstance: google.maps.Map) => {
  const buttons: [
    string,
    string,
    number,
    google.maps.ControlPosition,
    string
  ][] = [
    [
      "Rotate Left",
      "rotate",
      20,
      google.maps.ControlPosition.LEFT_CENTER,
      "20px",
    ],
    [
      "Rotate Right",
      "rotate",
      -20,
      google.maps.ControlPosition.RIGHT_CENTER,
      "20px",
    ],
    [
      "Tilt Down",
      "tilt",
      20,
      google.maps.ControlPosition.BOTTOM_CENTER,
      "40px",
    ],
    ["Tilt Up", "tilt", -20, google.maps.ControlPosition.BOTTOM_CENTER, "40px"],
  ];

  buttons.forEach(([text, mode, amount, position, buttonHeight]) => {
    const controlDiv = document.createElement("div");
    const controlUI = document.createElement("button");

    // controlUI.style.width = "100px"; // setting the width to 200px
    controlUI.style.height = buttonHeight; // setting the height to 200px
    // controlUI.style.background = "teal"; // setting the background color to teal
    // controlUI.style.color = "white"; // setting the color to white
    controlUI.style.fontSize = "14px"; // setting the font size to 20px

    controlUI.classList.add("ui-button");
    controlUI.innerText = `${text}`;
    controlUI.addEventListener("click", () => {
      adjustMap(mode, amount);
    });
    controlDiv.appendChild(controlUI);
    mapInstance.controls[position].push(controlDiv);
  });

  const adjustMap = function (mode: string, amount: number) {
    switch (mode) {
      case "tilt":
        mapInstance.setTilt(mapInstance.getTilt()! + amount);
        break;
      case "rotate":
        mapInstance.setHeading(mapInstance.getHeading()! + amount);
        break;
      default:
        break;
    }
  };
};
