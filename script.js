const productsList = {
  diamantes: [
    { text: "110 Diamantes - $1.800 ARS" },
    { text: "220 Diamantes - $3.500 ARS" },
    { text: "341 Diamantes - $4.700 ARS" },
    { text: "572 Diamantes - $8.100 ARS" },
    { text: "682 Diamantes - $9.600 ARS" },
    { text: "1166 Diamantes - $12.500 ARS" },
    { text: "2398 Diamantes - $14.500 ARS" },
    { text: "3564 Diamantes - $43.000 ARS" },
    { text: "4796 Diamantes - $56.000 ARS" },
    { text: "6160 Diamantes - $70.000 ARS" },
    { text: "12320 Diamantes - $138.000 ARS" }
  ],
  pases: [
    { text: "Semanal Básica - $1.000 ARS" },
    { text: "Tarjeta Semanal - $3.400 ARS" },
    { text: "Tarjeta Mensual - $15.500 ARS" },
    { text: "Pase de Nivel 15 - $4.000 ARS" },
    { text: "Pase de Nivel 30 - $5.900 ARS" },
    { text: "Pase Booyah - $4.500 ARS" }
  ],
  fragmentos: [
    { text: "35 Fragmentos - $2.600 ARS" },
    { text: "100 Fragmentos - $7.200 ARS" },
    { text: "200 Fragmentos - $14.000 ARS" },
    { text: "300 Fragmentos - $20.800 ARS" },
    { text: "400 Fragmentos - $27.500 ARS" },
    { text: "500 Fragmentos - $34.200 ARS" }
  ],
  cajas: [
    { text: "15 Cajas Evolutivas - $5.600 ARS" },
    { text: "30 Cajas Evolutivas - $10.900 ARS" },
    { text: "50 Cajas Evolutivas - $17.800 ARS" },
    { text: "100 Cajas Evolutivas - $34.200 ARS" },
    { text: "200 Cajas Evolutivas - $67.800 ARS" },
    { text: "500 Cajas Evolutivas - $168.000 ARS" }
  ]
};

// Elementos de navegación
const homeScreen = document.getElementById('homeScreen');
const diamondsScreen = document.getElementById('diamondsScreen');
const internetScreen = document.getElementById('internetScreen');

document.getElementById('btnGoDiamonds').addEventListener('click', () => {
  homeScreen.classList.add('hidden');
  diamondsScreen.classList.remove('hidden');
});

document.getElementById('btnGoInternet').addEventListener('click', () => {
  homeScreen.classList.add('hidden');
  internetScreen.classList.remove('hidden');
});

document.getElementById('btnBackFromDiamonds').addEventListener('click', () => {
  diamondsScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
});

document.getElementById('btnBackFromInternet').addEventListener('click', () => {
  internetScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
});

// Lógica de Categorías Free Fire
const categorySelect = document.getElementById('productCategory');
const productSelect = document.getElementById('product');

function updateProductOptions() {
  const selectedCat = categorySelect.value;
  productSelect.innerHTML = '';

  productsList[selectedCat].forEach(item => {
    const option = document.createElement('option');
    option.value = item.text;
    option.textContent = item.text;
    productSelect.appendChild(option);
  });
}

updateProductOptions();
categorySelect.addEventListener('change', updateProductOptions);

// Pedidos por WhatsApp
const phone = "5492644762825";

document.getElementById('buyDiamondsBtn').addEventListener('click', function() {
  const id = document.getElementById('playerId').value.trim();
  const selectedProduct = productSelect.value;

  if (!id) {
    alert("Por favor, ingresá tu ID de jugador.");
    return;
  }

  const message = `¡Hola! Quiero comprar el siguiente producto: ${selectedProduct}. Mi ID de Free Fire es: ${id}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});

document.getElementById('buyInternetBtn').addEventListener('click', function() {
  const name = document.getElementById('clientName').value.trim();
  const selectedPlan = document.getElementById('internetProduct').value;

  if (!name) {
    alert("Por favor, ingresá tu nombre.");
    return;
  }

  const message = `¡Hola! Quiero contratar el servicio de: ${selectedPlan}. Mi nombre es: ${name}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});
