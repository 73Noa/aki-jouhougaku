function calculateBMI2(){var height = Number(document.getElementById("input10").value);
                        var weight = Number(document.getElementById("input11").value);
                       var bmi = weight / ((height / 100) **2);
                       alert(bmi.toFixed(3));
                        
                        if(bmi > 18.5){alert("低体重");}
                         else if(18.5 <= bmi < 25){alert("普通");}
                         else{alert("肥満");}
                        }
