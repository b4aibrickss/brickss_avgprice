const platforms = [
  { name: "Mercado Livre", url: "https://lista.mercadolivre.com.br/" },
  { name: "OLX", url: "https://www.olx.com.br/brasil?q=" },
  { name: "Shopee", url: "https://shopee.com.br/search?keyword=" },
  { name: "Amazon", url: "https://www.amazon.com.br/s?k=" },
  { name: "Magazine Luiza", url: "https://www.magazineluiza.com.br/busca/" },
  { name: "Lojas Americanas", url: "https://www.americanas.com.br/busca/" },
  { name: "Enjoei", url: "https://www.enjoei.com.br/search?q=" },
  { name: "AliExpress", url: "https://www.aliexpress.com/wholesale?SearchText=" }
];

let allResults = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "search") {
    const query = request.query;
    allResults = [];
    console.log("Search query received:", query);
    platforms.forEach(platform => {
      console.log("Opening tab for platform:", platform.name);
      chrome.tabs.create({ url: platform.url + query });
    });
    chrome.tabs.create({ url: chrome.runtime.getURL("results/results.html") });
  } else if (request.action === "results") {
    console.log("Results received from content script:", request.data);
    allResults = allResults.concat(request.data);
    chrome.runtime.sendMessage({ action: "updateResults", data: allResults });
  }
});