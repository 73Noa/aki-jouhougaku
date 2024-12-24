function calculateBMI2(){var height = Number(document.getElementById("input10").value);
                        var weight = Number(document.getElementById("input11").value);
                       var bmi = weight / ((height / 100) **2);
                       alert(bmi.toFixed(3));}
