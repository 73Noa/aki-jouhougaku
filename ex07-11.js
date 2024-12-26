function seireki(){var yaer = (document.getElementById("yaer").value);
                  if((yaer % 4 == 0 && yaer % 100 != 0) || (yaer % 400 == 0)){
                    alert("閏年");
                  }else{
                    alert("平年");
                  }}
