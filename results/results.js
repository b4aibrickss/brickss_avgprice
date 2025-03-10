chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "updateResults") {
    console.log("Update results message received in results page:", request.data);
    displayResults(request.data);
  }
});

function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";
  results.forEach(result => {
    const resultElement = document.createElement("div");
    resultElement.className = "result";
    resultElement.innerHTML = `
      <img src="${result.image}" alt="${result.title}" />
      <div>
        <h3>${result.title}</h3>
        <p>${result.price}</p>
        <a href="${result.link}" target="_blank">Ver no site</a>
      </div>
    `;
    resultsContainer.appendChild(resultElement);
  });
  console.log("Results displayed in results page:", results);
}

// Este arquivo será usado para coletar os resultados das páginas abertas
// Você pode adicionar a lógica de scraping específica para cada plataforma aqui

function scrapeMercadoLivre() {
    let results = [];
    const items = document.querySelectorAll('.ui-search-layout__item');
    console.log("Number of items found:", items.length);
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
            console.log("Missing element in item:", {
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

// Funções de scraping para outras plataformas...

function sendResultsToBackground(results) {
    console.log("Sending results to background:", results);
    chrome.runtime.sendMessage({ action: "results", data: results });
}

// Chamar a função de scraping apropriada e enviar os resultados
let results = scrapeMercadoLivre(); // Substitua pela função de scraping apropriada
sendResultsToBackground(results);