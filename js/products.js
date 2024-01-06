
let apiurl = "https://api.noroff.dev/api/v1/rainy-days?fbclid=IwAR1O2roL4g7X-esQpG8P7kZ20YK_3luGor8b4KlVeHdLHQAbzToYTTxAZ34";
       

function showLoadingIndicator() {
    const loadingIndicator = document.getElementById("loadingIndicator");
    loadingIndicator.style.display = "block";
}


function hideLoadingIndicator() {
    const loadingIndicator = document.getElementById("loadingIndicator");
    loadingIndicator.style.display = "none";
}

function getProductsofProduct() {
    showLoadingIndicator(); 

    fetch(apiurl)
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            hideLoadingIndicator(); 

            let productsContainer = document.querySelector(".products");
            productsContainer.innerHTML = "";
            console.log(products);
            products.forEach(product => {
                productsContainer.innerHTML += `<div class="products2"><figure class="product-image"><a href="productspecific.html?id=${product.id}"><img src="${product.image}" alt="${product.title}"></a></figure>
                    <p class="p1">${product.gender}</p>
                    <h3 class="h2text">${product.title}</h3>
                    <p class="p2">USD <del>${product.price}</del> ${product.discountedPrice}</p> 
                    </div>`;
            });
        })
        .catch(function (error) {
            hideLoadingIndicator(); 
            console.dir(error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    getProductsofProduct();
});