const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let addColorBtn = () => {
  let content = "";
  colorList.forEach((color) => {
    content += `
            <button class="color-button ${color}" onclick="changeHouseColor('${color}')" ></button>    
        `;
    // console.log(color);
  });
  document.getElementById("colorContainer").innerHTML = content;
};

addColorBtn();

let changeHouseColor = (color) => {
  document.getElementById("house").className = `house ${color}`;
};
