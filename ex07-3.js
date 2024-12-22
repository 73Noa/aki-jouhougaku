function calculateBMI(){var height = Number(document.getElementById("input8").value);
                        var weight = Number(document.getElementById("input9").value);
                       var bmi = weight / ((height / 100) **2);
                       alert(bmi.toFixed(2));}
