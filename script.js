const rate = 125;

function demoTransfer() {
  const thb = document.getElementById("thb").value;
  const mmk = thb * rate;
  document.getElementById("mmk").value = mmk.toLocaleString();
  alert("Demo transfer successful (No real money involved)");
}
