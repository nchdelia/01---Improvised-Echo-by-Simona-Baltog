// animation on scroll settings
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-element');
hiddenElements.forEach((element) => {
    observer.observe(element);
});

// animation on scroll settings - settings for prices section
const pricesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show-prices');
        } else {
            entry.target.classList.remove('show-prices');
        }
    });
});

const hiddenPrices = document.querySelectorAll('.hidden-prices');
hiddenPrices.forEach((element) => {
    pricesObserver.observe(element);
});

const trialPricesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show-trial-prices');
        } else {
            entry.target.classList.remove('show-trial-prices');
        }
    });
});

const hiddenTrialPrices = document.querySelectorAll('.hidden-trial-prices');
hiddenTrialPrices.forEach((element) => {
    trialPricesObserver.observe(element);
});

//choosing a duration for the INDIVIDUAL piano courses - in order to return a price
function changePricePianoIndividual(y) {
    let price = document.getElementById("price-element-1");
    let priceList = [647, 747, 877, 977, 1077, 1177];
    switch(y.value) {
        case "20min":
            price.innerHTML = priceList[0];
            break;
        case "25min":
            price.innerHTML = priceList[1];
            break;
        case "30min":
            price.innerHTML = priceList[2];
            break;
        case "35min":
            price.innerHTML = priceList[3];
            break;
        case "40min":
            price.innerHTML = priceList[4];
            break;
        case "45min":
            price.innerHTML = priceList[5];
            break;
    }
}

//choosing a duration for the PAIR piano courses - in order to return a price
function changePricePianoPair(y) {
    let price = document.getElementById("price-element-2");
    let priceList = [497, 597];
    switch(y.value) {
        case "30min":
            price.innerHTML = priceList[0];
            break;
        case "45min":
            price.innerHTML = priceList[1];
            break;
    }
}

//choosing a duration for the TRIAL individual courses - in order to return a price
function changePriceTrial(y) {
    let price = document.getElementById("price-element-3");
    let priceList = [58, 80];
    switch(y.value) {
        case "30min":
            price.innerHTML = priceList[0];
            break;
        case "45min":
            price.innerHTML = priceList[1];
            break;
    }
}