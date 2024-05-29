document.getElementById('discount-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const price = parseFloat(document.getElementById('price').value);
    const percentage = parseFloat(document.getElementById('percentage').value);

    if (isNaN(price) || isNaN(percentage)) {
        alert('Per favore, inserisci valori validi.');
        return;
    }

    const percentageValue = (price * percentage) / 100;
    const discountedPrice = price - percentageValue;

    document.getElementById('discounted-price').textContent = `Prezzo Scontato: €${discountedPrice.toFixed(2)}`;
    document.getElementById('percentage-value').textContent = `Valore della Percentuale: €${percentageValue.toFixed(2)}`;
});
