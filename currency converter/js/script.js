// Elements
const fromSelect = document.querySelector("select[name='from']");
const toSelect = document.querySelector("select[name='to']");
const fromFlagImg = document.querySelector(".from img");
const toFlagImg = document.querySelector(".to img");
const amountInput = document.querySelector(".amount input");
const exchangeMsg = document.querySelector(".msg");
const swapBtn = document.querySelector(".swap-icon");
const form = document.querySelector("form");

// Populate the selects with country codes and currency codes
function populateSelects() {
  const currencyCodes = Object.keys(countryList);
  currencyCodes.forEach((code) => {
    const optionFrom = document.createElement("option");
    optionFrom.value = code;
    optionFrom.textContent = code;
    fromSelect.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = code;
    optionTo.textContent = code;
    toSelect.appendChild(optionTo);
  });

  // Set default selected currencies
  fromSelect.value = "USD";
  toSelect.value = "INR";

  updateFlags();
  updateBackgroundColor();
}

// Update flag images based on selected currency
function updateFlags() {
  fromFlagImg.src = `https://flagsapi.com/${countryList[fromSelect.value]}/flat/64.png`;
  fromFlagImg.alt = fromSelect.value + " Flag";

  toFlagImg.src = `https://flagsapi.com/${countryList[toSelect.value]}/flat/64.png`;
  toFlagImg.alt = toSelect.value + " Flag";
}

// Update background color according to 'to' currency
function updateBackgroundColor() {
  const toCurrency = toSelect.value;
  const color = countryColors[toCurrency] || "#f2e9e4";
  document.body.style.background = color;
}

// Fetch exchange rate and display
async function fetchExchangeRate() {
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount) || amount <= 0) {
    exchangeMsg.textContent = "Please enter a valid amount (> 0)";
    return;
  }

  exchangeMsg.textContent = "Getting exchange rate...";

  const fromCurrency = fromSelect.value;
  const toCurrency = toSelect.value;

  try {
    // Using exchangerate-api.com or any free API with no key for demonstration
    // You can replace the URL with your own API key if needed
    const res = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`
    );

    if (!res.ok) throw new Error("Failed to fetch exchange rate.");

    const data = await res.json();

    if (data.result === "error") {
      throw new Error(data['error-type'] || "API error");
    }

    const rate = data.rates[toCurrency];

    if (!rate) throw new Error("Invalid target currency.");

    const convertedAmount = (amount * rate).toFixed(3);

    exchangeMsg.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  } catch (error) {
    exchangeMsg.textContent = "Error: " + error.message;
  }
}

// Event listeners
fromSelect.addEventListener("change", () => {
  updateFlags();
  updateBackgroundColor();
});

toSelect.addEventListener("change", () => {
  updateFlags();
  updateBackgroundColor();
});

swapBtn.addEventListener("click", () => {
  // Swap the selected currencies
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  updateFlags();
  updateBackgroundColor();
  fetchExchangeRate();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchExchangeRate();
});

// Initialize
populateSelects();
fetchExchangeRate();
