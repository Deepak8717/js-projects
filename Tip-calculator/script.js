const calcBtn = document.getElementById("calculate");
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQuality = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;
  console.log(billAmt + ":" + serviceQuality + ":" + numOfPeople);
  if (billAmt === "" || serviceQuality == 0) {
    alert("You forgot either Bill amount or Service quality");
    return;
  }
  if (numOfPeople === "" || numOfPeople <= 1) {
    document.getElementById("each").style.display = "none";
  } else document.getElementById("each").style.display = "block";
  var total = (billAmt * serviceQuality) / numOfPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
calcBtn.addEventListener("click", calculateTip);
