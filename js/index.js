'use strict';

function onInit() {
  renderQuantitiesTabs();
  initPackage(3);
  document.querySelector('.terms').style.display = 'none';
}

function initPackage(packageQuantity) {
  var btnsEl = document.getElementsByClassName('quantities-tabs__btn');
  for (var i = 0; i < btnsEl.length; i++) {
    btnsEl[i].className = btnsEl[i].className.replace(gCurrentClassName, '');
  }

  var btnEl = document.querySelector('.quantities-tabs__btn--' + packageQuantity);
  btnEl.classList.add(gCurrentClassName);

  gPackages.forEach((productPackage) => {
    if (packageQuantity === productPackage.quantity) {
      gSelectedPackage = productPackage;
    }
  });
  renderOneTimePurchase();
}

function toggleCheckBoxTermsCtaLink() {
  var ctaLinkEl = document.querySelector('.package__link');
  ctaLinkEl.classList.toggle('package__link--disabled');
}

function renderSubscribeAndSaveMore() {
  const showMonth = true;

  var termsEl = document.querySelector('.terms');
  termsEl.classList.add('opened');
  termsEl.style.display = 'block';

  toggleByClassName('.purchase-tabs__btn--subscribe', '.purchase-tabs__btn--one-time');

  var strHtml = '';
  strHtml += `${renderPackage(gSelectedPackage.subscribe_price, gSelectedPackage.retail_price, gSelectedPackage.isBestSeller, 
    gSelectedPackage.isBestValue, gSelectedPackage.subscribe_link, gSelectedPackage.quantity, showMonth)}`;
  var packageEl = document.querySelector('.package');
  packageEl.innerHTML = strHtml;

  var ctaLinkEl = document.querySelector('.package__link');
  ctaLinkEl.classList.add('package__link--disabled');
}

function renderOneTimePurchase() {
  toggleByClassName('.purchase-tabs__btn--one-time', '.purchase-tabs__btn--subscribe');

  var termsEl = document.querySelector('.terms');
  termsEl.classList.remove('opened');
  termsEl.style.display = 'none';

  document.getElementById('subscribe').checked = false;

  var strHtml = '';
  strHtml += `${renderPackage(gSelectedPackage.price, gSelectedPackage.retail_price, gSelectedPackage.isBestSeller,
     gSelectedPackage.isBestValue, gSelectedPackage.link, gSelectedPackage.quantity)}`;
  var packageEl = document.querySelector('.package');
  packageEl.innerHTML = strHtml;
}

function renderQuantitiesTabs() {
  var strHtml = '';
  for (var i = 0; i < gPackages.length; i++) {
    strHtml += `<button class="tabs__btn quantities-tabs__btn quantities-tabs__btn--${gPackages[i].quantity}" onClick="initPackage(${gPackages[i].quantity})">${gPackages[i].quantity}</button>`;
  }
  var btnsEl = document.querySelector('.quantities-tabs');
  btnsEl.innerHTML = strHtml;
}

function renderPackage(currentPrice, originalPrice, isBestSeller, isBestValue, currentLink, quantity, showMonth = false) {
  var stampEl = '';
  if (isBestSeller) {
    stampEl = `<svg><use xlink:href="${gImagesPath}sprite.svg#stamp"></use></svg>`;
  } else if (isBestValue) {
    stampEl = `<svg><use xlink:href="${gImagesPath}sprite.svg#stamp_green"></use></svg>`;
  }

  var durationEl = showMonth ? '<span class="package__price--duration">/month</span>' : '';

  return `<div class="package__stamp">${stampEl}</div>
  <div class="package__img"><img src=${gImagesPath}${quantity}pack.png alt="" /></div>
  <span class="package__price">${formatPrice(currentPrice)}${durationEl}</span>
  <p class="package__p">Retail Price <span class="package__retail-price">${formatPrice(originalPrice)}</span></p>
  <p class="package__p">Instant Savings <span class="package__instant-price">${formatPrice(originalPrice - currentPrice)}</p>
  <p class="package__p package__shipping-txt">Free US shipping</p><a href="https://${currentLink}" target="_blank" class="package__link">Buy Now</a>`;
}