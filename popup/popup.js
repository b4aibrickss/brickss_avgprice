document.getElementById("search").addEventListener("click", () => {
  const query = document.getElementById("query").value;
  console.log("Search button clicked, query:", query);
  chrome.runtime.sendMessage({ action: "search", query: query });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "updateResults") {
    console.log("Update results message received in popup:", request.data);
    calculateStats(request.data);
  }
});

function displayResults(results) {
  // Ordenar os resultados pelo menor preço
  results.sort((a, b) => parseFloat(a.price.replace(/[^\d.-]/g, '')) - parseFloat(b.price.replace(/[^\d.-]/g, '')));

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
  console.log("Results displayed in popup:", results);
}

function calculateStats(results) {
  const filteredResults = results.filter(result => !result.disabled);
  if (filteredResults.length === 0) {
    document.getElementById("min-price").innerText = "Menor Pre&ccedil;o: -";
    document.getElementById("max-price").innerText = "Maior Pre&ccedil;o: -";
    document.getElementById("avg-price").innerText = "Pre&ccedil;o M&eacute;dio: -";
    return;
  }

  const prices = filteredResults.map(result => parseFloat(result.price.replace(/[^\d.-]/g, '')));
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const avgPrice = prices.reduce((sum, price) => sum + price, 0) / prices.length;

  document.getElementById("min-price").innerText = `Menor Pre&ccedil;o: R$ ${minPrice.toFixed(2)}`;
  document.getElementById("max-price").innerText = `Maior Pre&ccedil;o: R$ ${maxPrice.toFixed(2)}`;
  document.getElementById("avg-price").innerText = `Pre&ccedil;o M&eacute;dio: R$ ${avgPrice.toFixed(2)}`;
}
