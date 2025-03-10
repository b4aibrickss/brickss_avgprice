document.getElementById("search").addEventListener("click", () => {
  const query = document.getElementById("query").value;
  console.log("Search button clicked, query:", query);
  chrome.runtime.sendMessage({ action: "search", query: query });
});
