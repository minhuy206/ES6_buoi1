let calAverage = (...scores) => {
  let total = 0;
  scores.forEach((scores) => {
    total += parseFloat(scores);
  });
  return total / scores.length;
};

document.getElementById("btnKhoi2").onclick = function () {
  let van = document.getElementById("inpVan").value;
  let su = document.getElementById("inpSu").value;
  let dia = document.getElementById("inpDia").value;
  let anh = document.getElementById("inpEnglish").value;

  document.getElementById("tbKhoi2").innerHTML = calAverage(van, su, dia, anh);
};

document.getElementById("btnKhoi1").onclick = function () {
  let toan = document.getElementById("inpToan").value;
  let li = document.getElementById("inpLy").value;
  let hoa = document.getElementById("inpHoa").value;

  document.getElementById("tbKhoi1").innerHTML = calAverage(toan, li, hoa);
};
