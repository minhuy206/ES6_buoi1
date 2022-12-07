let str = document.getElementsByClassName("heading")[0].innerHTML;
let chars = [...str];

let addHTML = () => {
  let content = "";
  chars.forEach((chars) => {
    content += `
<span>${chars}</span>
    `;
  });
  document.getElementsByClassName("heading")[0].innerHTML = content;
};
addHTML();
