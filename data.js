"use strict";

const summaryData = new Request("data.json");
const summary = document.querySelector(".summary");

fetch(summaryData)
  .then((response) => response.json())
  .then((data) => {
    for (const results of data.summary) {
      const resultBox = document.createElement("div");
      const icon = document.createElement("img");
      const category = document.createElement("span");
      const result = document.createElement("span");
      const maxResult = document.createElement("span");

      resultBox.classList.add("results", "text-lead");

      resultBox.appendChild(icon).setAttribute("src", `${results.icon}`);
      resultBox.appendChild(category).textContent = results.category;
      resultBox.appendChild(result).textContent = results.score;
      result.appendChild(maxResult).textContent = "/100";

      summary.appendChild(resultBox);
    }
  })

  .catch(console.error);
