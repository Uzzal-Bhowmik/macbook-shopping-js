function updateMemoryCost(memorySize) {
    const memoryCostField = document.getElementById('memory-cost');
    if (memorySize == '8') {
        memoryCostField.innerText = '0';
    }
    else if (memorySize == '16') {
        memoryCostField.innerText = '180';
    }
}
function updateStorageCost(storageSizeDetails) {
    const storageCostField = document.getElementById('storage-cost');
    if (storageSizeDetails.includes('256')) {
        storageCostField.innerText = '0';
    }
    else if (storageSizeDetails.includes('512')) {
        storageCostField.innerText = '100';
    }
    else if (storageSizeDetails.includes('1TB')) {
        storageCostField.innerText = '180';
    }
};

function updateDeliveryCost(deliveryChoice) {
    const deliveryCostField = document.getElementById('delivery-cost');
    if (deliveryChoice.includes('Free')) {
        deliveryCostField.innerText = '0';
    }
    else if (deliveryChoice.includes('$20')) {
        deliveryCostField.innerText = '20';
    }
};

function updateTotalPrice(isButtonClicked) {
    const totalPriceFields = document.getElementsByClassName('total-price');
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const memoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);

    if (isButtonClicked == true) {
        for (let totalPrice of totalPriceFields) {
            totalPrice.innerText = bestPrice + memoryCost + storageCost + deliveryCost;
        }
    }
}
// Memory 8gb button handler 
document.getElementById('memory-8').addEventListener('click', function () {
    updateMemoryCost('8');
});
// Memory 16gb button handler 
document.getElementById('memory-16').addEventListener('click', function () {
    updateMemoryCost('16');
});

// all storage buttons handler 
const allStorageBtns = document.querySelectorAll('.storages');
for (let differentStorage of allStorageBtns) {
    differentStorage.addEventListener('click', function (event) {
        updateStorageCost(event.target.innerText);
    });
};

// all delivery btn handler 
const allDeliveryBtns = document.querySelectorAll('.delivery-btn');
for (let differentDeliveryBtn of allDeliveryBtns) {
    differentDeliveryBtn.addEventListener('click', function (event) {
        updateDeliveryCost(event.target.innerText);
    })
};

// using event delegate to give event-listener to all the buttons 
document.getElementById('product-details').addEventListener('click', function (event) {
    updateTotalPrice(event.target.classList.contains('btn-outline-secondary'));
})

// promo apply button handler 
document.getElementById('promo-apply').addEventListener('click', function () {
    const promoCodeField = document.getElementById('promo-field')
    const promoCode = promoCodeField.value;

    const totalPrice = document.getElementById('initial-total-price');

    const ultimateTotalPrice = document.getElementById('ultimate-price');
    if (promoCode == 'stevekaku') {
        ultimateTotalPrice.innerText = parseFloat(totalPrice.innerText) - (parseFloat(totalPrice.innerText) * .2);
    }
    promoCodeField.value = '';

})
