function productHandler(product, price, isIncreasing) {
    const phoneInput = document.getElementById(product + '-number');
    let phoneInputNumber = phoneInput.value;
    if (isIncreasing) {
        phoneInputNumber = parseInt(phoneInputNumber) + 1;
    }
    else if (phoneInputNumber > 0) {
        phoneInputNumber = parseInt(phoneInputNumber) - 1;
    }
    phoneInput.value = phoneInputNumber;

    const updateProduct = document.getElementById(product + '-total');
    updateProduct.innerText = phoneInputNumber * price;

    calculateTotal();
}

function productQuantityHandler(product) {
    const quntity = document.getElementById(product + '-number');
    const productQuantity = parseInt(quntity.value);
    return productQuantity;

}
function calculateTotal() {
    const phoneTotal = productQuantityHandler('phone') * 1219;
    const caseTotal = productQuantityHandler('case') * 59;

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    //set in html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = total;



}



// phone handle
document.getElementById('phone-plus').addEventListener('click', function () {
    productHandler('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    productHandler('phone', 1219, false)
})
//case handle
document.getElementById('case-plus').addEventListener('click', function () {
    productHandler('case', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function () {
    productHandler('case', 59, false)
})