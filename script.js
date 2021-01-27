///phn- - - - - - -
const phnDecrescBtn = document.getElementById("phn-decresc-btn");
phnDecrescBtn.addEventListener("click", function () {
  let phnInput = parseFloat(document.getElementById("phnInput").value);
  document.getElementById("phnInput").value = phnInput - 1;
  let phnPrice = parseFloat(document.getElementById("phnPrice").innerText);
  phnCurrentPrice = phnPrice - 1219;
  document.getElementById("phnPrice").innerText = phnCurrentPrice;
  let subTotal = parseFloat(document.getElementById("sub-total").innerText);
  document.getElementById("sub-total").innerText = subTotal - 1219;
  const total = parseFloat(document.getElementById("total").innerText);
  document.getElementById("total").innerText = total - 1219;
});
///phn+ + + + + + +
const phnIncreaseBtn = document.getElementById("phn-increase-btn");
phnIncreaseBtn.addEventListener("click", function () {
  let phnInput = parseFloat(document.getElementById("phnInput").value);
  document.getElementById("phnInput").value = phnInput + 1;
  let phnPrice = parseFloat(document.getElementById("phnPrice").innerText);
  phnCurrentPrice = phnPrice + 1219;
  document.getElementById("phnPrice").innerText = phnCurrentPrice;
  let subTotal = parseFloat(document.getElementById("sub-total").innerText);
  document.getElementById("sub-total").innerText = subTotal + 1219;
  const total = parseFloat(document.getElementById("total").innerText);
  document.getElementById("total").innerText = total + 1219;
});
///cover- - - - -
const coverBtnMinus = document.getElementById("cover-btnminus");
coverBtnMinus.addEventListener("click", function () {
  let phnCoverInput = parseFloat(
    document.getElementById("phn-cover-input").value
  );
  document.getElementById("phn-cover-input").value = phnCoverInput - 1;
  let coverPrice = parseFloat(document.getElementById("cover-price").innerText);
  coverCurrentPrice = coverPrice - 59;
  document.getElementById("cover-price").innerText = coverCurrentPrice;
  let subTotal = parseFloat(document.getElementById("sub-total").innerText);
  document.getElementById("sub-total").innerText = subTotal - 59;
  const total = parseFloat(document.getElementById("total").innerText);
  document.getElementById("total").innerText = total - 59;
});
//cover + + + + + + +
const coverBtnPlus = document.getElementById("cover-btnplus");
coverBtnPlus.addEventListener("click", function () {
  let phnCoverInput = parseFloat(
    document.getElementById("phn-cover-input").value
  );
  document.getElementById("phn-cover-input").value = phnCoverInput + 1;
  let coverPrice = parseFloat(document.getElementById("cover-price").innerText);
  coverCurrentPrice = coverPrice + 59;
  document.getElementById("cover-price").innerText = coverCurrentPrice;
  let subTotal = parseFloat(document.getElementById("sub-total").innerText);
  document.getElementById("sub-total").innerText = subTotal + 59;
  const total = parseFloat(document.getElementById("total").innerText);
  document.getElementById("total").innerText = total + 59;
});
