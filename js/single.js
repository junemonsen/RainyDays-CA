let baseUrl = (window.location).href; 
let uuid = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
let apiurl = "https://api.noroff.dev/api/v1/rainy-days/"+uuid;

function getSingleProduct() {
    fetch(apiurl)
        .then(function(response) {
            return response.json();
    })
    .then(function(product) {
        document.querySelector(".product_image").innerHTML += `
        <img src="${product.image}" alt="${product.title}" class="img-fluid" width="100%"/>
        `;
        document.querySelector(".product_title").innerHTML += `
        ${product.title}
        `;
        document.querySelector(".baseColor").innerHTML += `
        ${product.baseColor}
        `;
        document.querySelector(".price_nok").innerHTML += `
        USD ${product.discountedPrice}`+' '+`USD <del>${product.price}</del>
        `;
        for (let i = 0; i < product.sizes.length; i++) {
        const size = product.sizes[i];
        document.querySelector(".size-row").innerHTML += `
            <button>${size}</button>
        `;
        }
        document.querySelector(".descroption_text").innerHTML += `
        ${product.description}
        `;                     
    })
        .catch(function(error) {
            console.dir(error);
    });
}
getSingleProduct();