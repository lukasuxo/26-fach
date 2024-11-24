let btn = document.getElementById("productButton");
let number = 1;
btn.addEventListener("click", () => {
    number++;
    productButton(number);
});

async function productButton(number) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${number}`);
        const data = await res.json();
        scriptToHtml(data);
    } catch { }
}

function scriptToHtml(data) {
    const productInfo = document.createElement("button");
    productInfo.textContent = `NAME: ${data.title}, PRICE: $${data.price}`;
    document.body.appendChild(productInfo);
}
