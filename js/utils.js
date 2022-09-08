function formatPrice(price) {
  return `${gCurrency}${price.toFixed(2)}`;
}

function toggleByClassName(classNameToAddCurrent, classNameToRemoveCurrent){
  var subscribeBtnEl = document.querySelector(classNameToAddCurrent);
  subscribeBtnEl.classList.add(gCurrentClassName);

  var oneTimeBtnEl = document.querySelector(classNameToRemoveCurrent);
  oneTimeBtnEl.classList.remove(gCurrentClassName);
}