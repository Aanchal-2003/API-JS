async function getProducts() {
    var response =await fetch("https://dummyjson.com/products");
    var data = await response.json();
    sectionProducts(data.products.slice(0, 4), "topSection");
    sectionProducts(data.products.slice(4, 8), "trendingSection");
    sectionProducts(data.products.slice(8, 12), "dealsSection");
    sectionProducts(data.products.slice(12, 16), "latestSection");
    sectionProducts(data.products.slice(0, 28), "Allproduct");



}

function sectionProducts(items, section) {
    var heading = document.getElementById(section);
    if(!heading) return;
    html = ''
    for(data of items) {
        html+=`<div class="product-card">
                <img src=${data.thumbnail}
                    alt="">
                <h3>${data.title}</h3>
                <p class="price">$${data.price} <span class="old-price"></span></p>
            </div>`
    }
    heading.innerHTML = html
}


getProducts();