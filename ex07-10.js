function BMI2() {
  var height = Number(document.getElementById("height").value) / 100;
  var weight = Number(document.getElementById("weight").value);
  var bmi = weight / (height * height);
  var resultText = bmi.toFixed(1);

if (bmi < 18.5) {
  resultText += " 低体重";
} else if (bmi >= 18.5 && bmi < 25) {
  resultText += " 普通";
} else {
  resultText += " 肥満";
}
  document.getElementById("result").innerText = resultText;
}
