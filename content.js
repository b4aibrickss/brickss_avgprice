// Este arquivo será usado para coletar os resultados das páginas abertas
// Você pode adicionar a lógica de scraping específica para cada plataforma aqui

function scrapeMercadoLivre() {
    let results = [];
    const items = document.querySelectorAll('.ui-search-layout__item');
    console.log("Number of items found (Mercado Livre):", items.length);
    items.forEach(item => {
        let titleElement = item.querySelector('.poly-component__title');
        let priceElement = item.querySelector('.andes-money-amount__fraction');
        let linkElement = item.querySelector('a');
        let imageElement = item.querySelector('.poly-component__picture');

        if (titleElement && priceElement && linkElement && imageElement) {
            let title = titleElement.innerText;
            let price = priceElement.innerText;
            let link = linkElement.href;
            let image = imageElement.src;
            results.push({ title, price, link, image });
        } else {
            console.log("Missing element in item (Mercado Livre):", {
                titleElement,
                priceElement,
                linkElement,
                imageElement
            });
        }
    });
    console.log("Mercado Livre results:", results);
    return results;
}

function scrapeOLX() {
    let results = [];
    const items = document.querySelectorAll('section[data-ds-component="DS-AdCard"]');
    console.log("Number of items found (OLX):", items.length);
    items.forEach(item => {
        let titleElement = item.querySelector('h2');
        let priceElement = item.querySelector('.olx-ad-card__price');
        let linkElement = item.querySelector('a.olx-ad-card__link-wrapper');
        let imageElement = item.querySelector('img');

        if (titleElement && priceElement && linkElement && imageElement) {
            let title = titleElement.innerText;
            let price = priceElement.innerText;
            let link = linkElement.href;
            let image = imageElement.src;
            results.push({ title, price, link, image });
        } else {
            console.log("Missing element in item (OLX):", {
                titleElement,
                priceElement,
                linkElement,
                imageElement
            });
        }
    });
    console.log("OLX results:", results);
    return results;
}

function scrapeShopee() {
    let results = [];
    const items = document.querySelectorAll('.shopee-search-item-result__item');
    console.log("Number of items found (Shopee):", items.length);
    items.forEach(item => {
        let titleElement = item.querySelector('.yQmmFK');
        let priceElement = item.querySelector('.WTFwws');
        let linkElement = item.querySelector('a');
        let imageElement = item.querySelector('img');

        if (titleElement && priceElement && linkElement && imageElement) {
            let title = titleElement.innerText;
            let price = priceElement.innerText;
            let link = linkElement.href;
            let image = imageElement.src;
            results.push({ title, price, link, image });
        } else {
            console.log("Missing element in item (Shopee):", {
                titleElement,
                priceElement,
                linkElement,
                imageElement
            });
        }
    });
    console.log("Shopee results:", results);
    return results;
}

function scrapeAmazon() {
    let results = [];
    const items = document.querySelectorAll('.s-result-item');
    console.log("Number of items found (Amazon):", items.length);
    items.forEach(item => {
        let titleElement = item.querySelector('h2');
        let priceElement = item.querySelector('.a-price-whole');
        let linkElement = item.querySelector('a');
        let imageElement = item.querySelector('img');

        if (titleElement && priceElement && linkElement && imageElement) {
            let title = titleElement.innerText;
            let price = priceElement.innerText;
            let link = linkElement.href;
            let image = imageElement.src;
            results.push({ title, price, link, image });
        } else {
            console.log("Missing element in item (Amazon):", {
                titleElement,
                priceElement,
                linkElement,
                imageElement
            });
        }
    });
    console.log("Amazon results:", results);
    return results;
}

function scrapeMagazineLuiza() {
    let results = [];
    const items = document.querySelectorAll('.product-li');
    console.log("Number of items found (Magazine Luiza):", items.length);
    items.forEach(item => {
        let titleElement = item.querySelector('.product-title');
        let priceElement = item.querySelector('.price-value');
        let linkElement = item.querySelector('a');
        let imageElement = item.querySelector('img');

        if (titleElement && priceElement && linkElement && imageElement) {
            let title = titleElement.innerText;
            let price = priceElement.innerText;
            let link = linkElement.href;
            let image = imageElement.src;
            results.push({ title, price, link, image });
        } else {
            console.log("Missing element in item (Magazine Luiza):", {
                titleElement,
                priceElement,
                linkElement,
                imageElement
            });
        }
    });
    console.log("Magazine Luiza results:", results);
    return results;
}

function scrapeLojasAmericanas() {
    let results = [];
    const items = document.querySelectorAll('.product-grid-item');
    console.log("Number of items found (Lojas Americanas):", items.length);
    items.forEach(item => {
        let titleElement = item.querySelector('.product-name');
        let priceElement = item.querySelector('.price-value');
        let linkElement = item.querySelector('a');
        let imageElement = item.querySelector('img');

        if (titleElement && priceElement && linkElement && imageElement) {
            let title = titleElement.innerText;
            let price = priceElement.innerText;
            let link = linkElement.href;
            let image = imageElement.src;
            results.push({ title, price, link, image });
        } else {
            console.log("Missing element in item (Lojas Americanas):", {
                titleElement,
                priceElement,
                linkElement,
                imageElement
            });
        }
    });
    console.log("Lojas Americanas results:", results);
    return results;
}

function scrapeEnjoei() {
    let results = [];
    const items = document.querySelectorAll('.sc-1fcnm9e-2');
    console.log("Number of items found (Enjoei):", items.length);
    items.forEach(item => {
        let titleElement = item.querySelector('h2');
        let priceElement = item.querySelector('.sc-ifAKCX');
        let linkElement = item.querySelector('a');
        let imageElement = item.querySelector('img');

        if (titleElement && priceElement && linkElement && imageElement) {
            let title = titleElement.innerText;
            let price = priceElement.innerText;
            let link = linkElement.href;
            let image = imageElement.src;
            results.push({ title, price, link, image });
        } else {
            console.log("Missing element in item (Enjoei):", {
                titleElement,
                priceElement,
                linkElement,
                imageElement
            });
        }
    });
    console.log("Enjoei results:", results);
    return results;
}

function scrapeAliExpress() {
    let results = [];
    const items = document.querySelectorAll('.JIIxO');
    console.log("Number of items found (AliExpress):", items.length);
    items.forEach(item => {
        let titleElement = item.querySelector('.mGXnE');
        let priceElement = item.querySelector('.a8c37');
        let linkElement = item.querySelector('a');
        let imageElement = item.querySelector('img');

        if (titleElement && priceElement && linkElement && imageElement) {
            let title = titleElement.innerText;
            let price = priceElement.innerText;
            let link = linkElement.href;
            let image = imageElement.src;
            results.push({ title, price, link, image });
        } else {
            console.log("Missing element in item (AliExpress):", {
                titleElement,
                priceElement,
                linkElement,
                imageElement
            });
        }
    });
    console.log("AliExpress results:", results);
    return results;
}

function scrapeEbay() {
    let results = [];
    const items = document.querySelectorAll('.s-item');
    console.log("Number of items found:", items.length);
    items.forEach(item => {
        let titleElement = item.querySelector('.s-item__title');
        let priceElement = item.querySelector('.s-item__price');
        let linkElement = item.querySelector('.s-item__link');
        let imageElement = item.querySelector('.s-item__image-img');

        if (titleElement && priceElement && linkElement && imageElement) {
            let title = titleElement.innerText;
            let price = priceElement.innerText;
            let link = linkElement.href;
            let image = imageElement.src;
            results.push({ title, price, link, image });
        } else {
            console.log("Missing element in item:", {
                titleElement,
                priceElement,
                linkElement,
                imageElement
            });
        }
    });
    console.log("eBay results:", results);
    return results;
}

function sendResultsToBackground(results) {
    console.log("Sending results to background:", results);
    chrome.runtime.sendMessage({ action: "results", data: results });
}

// Adicionar um atraso antes de coletar os resultados
setTimeout(() => {
    let results = [];
    if (window.location.hostname.includes("mercadolivre.com.br")) {
        results = scrapeMercadoLivre();
    } else if (window.location.hostname.includes("olx.com.br")) {
        results = scrapeOLX();
    } else if (window.location.hostname.includes("shopee.com.br")) {
        results = scrapeShopee();
    } else if (window.location.hostname.includes("amazon.com.br")) {
        results = scrapeAmazon();
    } else if (window.location.hostname.includes("magazineluiza.com.br")) {
        results = scrapeMagazineLuiza();
    } else if (window.location.hostname.includes("americanas.com.br")) {
        results = scrapeLojasAmericanas();
    } else if (window.location.hostname.includes("enjoei.com.br")) {
        results = scrapeEnjoei();
    } else if (window.location.hostname.includes("aliexpress.com")) {
        results = scrapeAliExpress();
    }else if (window.location.hostname.includes("ebay.com")) {
        results = scrapeEbay();
    }
    sendResultsToBackground(results);
}, 10000); // Aguardar 10 segundos